import { useCallback, useEffect, useRef, useState } from 'react';

export const LEETCODE_USERNAME = 'salahin0ashfi';
export const LEETCODE_PROFILE_URL = `https://leetcode.com/u/${LEETCODE_USERNAME}/`;

export const CACHE_KEY = 'ashfi:leetcode:v1';
export const CACHE_TTL_MS = 10 * 60 * 1000;

// Verified 2026-10-12 against three independent sources. Used whenever every
// mirror is unreachable so the card never falls back to stale or zeroed numbers.
export const LEETCODE_FALLBACK = Object.freeze({
  totalSolved: 570,
  easySolved: 176,
  mediumSolved: 317,
  hardSolved: 77,
  totalQuestions: 4081,
  ranking: 162158,
});

// Public mirrors, tried in order. LeetCode's own GraphQL endpoint is not an
// option: its CORS preflight answers 405 with no Access-Control-Allow-Origin,
// so a browser fetch is blocked before the query is even sent. The URL must
// stay a bare username - appending /solved 404s on these mirrors.
const SOURCES = [
  `https://leetcode-api-faisalshohag.vercel.app/${LEETCODE_USERNAME}`,
  `https://leetcode-stats.tashif.codes/${LEETCODE_USERNAME}`,
];

const REQUIRED_FIELDS = ['totalSolved', 'easySolved', 'mediumSolved', 'hardSolved'];

/**
 * Mirrors answer HTTP 200 with null members for an unknown username, so the
 * payload has to be validated field by field rather than by `response.ok`.
 */
function normalize(data) {
  if (!data || typeof data !== 'object') return null;
  if (REQUIRED_FIELDS.some((field) => !Number.isFinite(data[field]))) return null;

  return {
    totalSolved: data.totalSolved,
    easySolved: data.easySolved,
    mediumSolved: data.mediumSolved,
    hardSolved: data.hardSolved,
    totalQuestions: Number.isFinite(data.totalQuestions) ? data.totalQuestions : null,
    ranking: Number.isFinite(data.ranking) ? data.ranking : null,
  };
}

function getStorage() {
  try {
    const storage = window.localStorage;
    const probe = '__ashfi_probe__';
    storage.setItem(probe, '1');
    storage.removeItem(probe);
    return storage;
  } catch {
    return null;
  }
}

function readCache() {
  const storage = getStorage();
  if (!storage) return null;
  try {
    const raw = storage.getItem(CACHE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    if (!Number.isFinite(parsed?.savedAt) || !parsed.stats) return null;
    return { savedAt: parsed.savedAt, stats: parsed.stats };
  } catch {
    return null;
  }
}

function writeCache(entry) {
  const storage = getStorage();
  if (!storage) return;
  try {
    storage.setItem(CACHE_KEY, JSON.stringify(entry));
  } catch {
    /* storage full or blocked - caching is best effort */
  }
}

/** Walks the mirrors in order and returns the first usable payload. */
async function requestStats(signal) {
  let lastError = new Error('every LeetCode mirror failed');

  for (const url of SOURCES) {
    try {
      const response = await fetch(url, { signal, headers: { Accept: 'application/json' } });
      if (!response.ok) {
        lastError = new Error(`${url} responded with ${response.status}`);
        continue;
      }
      const stats = normalize(await response.json());
      if (stats) return stats;
      lastError = new Error(`${url} returned an unusable payload`);
    } catch (error) {
      if (error?.name === 'AbortError') throw error;
      lastError = error;
    }
  }

  throw lastError;
}

function fallbackSnapshot() {
  return {
    stats: LEETCODE_FALLBACK,
    status: 'idle',
    isLive: false,
    lastUpdated: null,
  };
}

function initialSnapshot() {
  const cached = readCache();
  if (cached && Date.now() - cached.savedAt < CACHE_TTL_MS) {
    return {
      stats: cached.stats,
      status: 'ready',
      isLive: true,
      lastUpdated: cached.savedAt,
    };
  }

  // A visible document gets a request from the mount effect right away, so the
  // first paint is already 'loading'. A hidden one waits for the visibility
  // listener. React forbids setting that state from inside the effect itself.
  const willFetch = typeof document === 'undefined' || !document.hidden;
  return { ...fallbackSnapshot(), status: willFetch ? 'loading' : 'idle' };
}

/**
 * LeetCode statistics with a cached, mirror-tolerant lifecycle.
 * Never throws: on failure the previous data (or the verified snapshot) stays
 * in place and `status` becomes 'error'.
 */
export function useLeetCodeStats() {
  const [snapshot, setSnapshot] = useState(initialSnapshot);
  const mountedRef = useRef(true);
  const controllerRef = useRef(null);
  const inFlightRef = useRef(false);
  // Freshness clock: seeded from the cache on mount, updated on every success.
  const lastUpdatedRef = useRef(0);

  const load = useCallback(async (force) => {
    // A hidden tab must never fetch: the visibility listener resumes the work.
    if (typeof document !== 'undefined' && document.hidden) return;
    if (inFlightRef.current) return;
    if (!force && Date.now() - lastUpdatedRef.current <= CACHE_TTL_MS) return;

    inFlightRef.current = true;
    const controller = new AbortController();
    controllerRef.current = controller;

    // Status is only ever written after an await: the initial 'loading' comes
    // from the first state snapshot instead (react-hooks/set-state-in-effect).
    try {
      const stats = await requestStats(controller.signal);
      const savedAt = Date.now();
      lastUpdatedRef.current = savedAt;
      writeCache({ savedAt, stats });
      if (!mountedRef.current) return;
      setSnapshot({ stats, status: 'ready', isLive: true, lastUpdated: savedAt });
    } catch (error) {
      // Unmount aborts land here too; they are not failures worth reporting.
      if (!mountedRef.current || error?.name === 'AbortError') return;
      console.warn(`useLeetCodeStats: serving cached/fallback data (${error.message})`);
      setSnapshot((prev) => ({ ...prev, status: 'error', isLive: false }));
    } finally {
      inFlightRef.current = false;
    }
  }, []);

  useEffect(() => {
    mountedRef.current = true;

    const cached = readCache();
    lastUpdatedRef.current = cached !== null ? cached.savedAt : 0;
    const isFresh = cached !== null && Date.now() - cached.savedAt < CACHE_TTL_MS;

    // A fresh cache means no network work at all. Otherwise the request is
    // dispatched from a task instead of synchronously during the commit. The
    // timer also lets an unmount before it fires cancel the request outright.
    let timerId = 0;
    if (!isFresh) timerId = setTimeout(() => void load(false), 0);

    return () => {
      mountedRef.current = false;
      clearTimeout(timerId);
      controllerRef.current?.abort();
    };
  }, [load]);

  useEffect(() => {
    const interval = setInterval(() => void load(true), CACHE_TTL_MS);
    const onVisibilityChange = () => {
      if (!document.hidden) void load(false);
    };
    document.addEventListener('visibilitychange', onVisibilityChange);

    return () => {
      clearInterval(interval);
      document.removeEventListener('visibilitychange', onVisibilityChange);
    };
  }, [load]);

  const refresh = useCallback(() => {
    void load(true);
  }, [load]);

  return {
    stats: snapshot.stats,
    status: snapshot.status,
    isLive: snapshot.isLive,
    lastUpdated: snapshot.lastUpdated,
    refresh,
  };
}
