import { useCallback, useEffect, useRef, useState } from 'react';

/**
 * Live GitHub stats for the portfolio.
 *
 * The unauthenticated GitHub API only allows 60 requests per hour per visitor
 * IP, so every response is cached in localStorage for CACHE_TTL_MS and a
 * verified snapshot is served whenever the network or the API refuses to
 * cooperate. A token is deliberately not used: any VITE_* value would be
 * embedded in the public production bundle.
 *
 * Exports are frozen: other modules are written against these names.
 */

export const GITHUB_USERNAME = 'AsHfIEXE';
export const CACHE_KEY = 'ashfi:gh-repos:v1';
export const CACHE_TTL_MS = 10 * 60 * 1000;

const REPOS_URL = `https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100&sort=pushed`;

// Public, non-fork repository count when the API cannot be reached.
// Verified 2026-10-12: 51 public repos, of which 33 are non-fork and
// non-archived. Keep this in step with what buildSnapshot() actually counts,
// otherwise rate-limited visitors see a different total from online ones.
const FALLBACK_REPO_COUNT = 33;

/** Snapshot verified 2026-10-12; keys are lowercased repository names. */
export const FALLBACK_REPOS = {
  cyphisher: {
    name: 'Cyphisher',
    stars: 7,
    forks: null,
    language: 'Shell',
    description:
      'Automated phishing simulation framework for authorized red-team engagements, with 30+ templates, a terminal UI and automated tunneling.',
    htmlUrl: 'https://github.com/AsHfIEXE/Cyphisher',
    topics: [],
    pushedAt: null,
  },
  neuralaim: {
    name: 'NeuralAim',
    stars: 4,
    forks: null,
    language: 'C++',
    description:
      'GPU-accelerated computer-vision inference runtime for Windows with DirectML and CUDA/TensorRT backends.',
    htmlUrl: 'https://github.com/AsHfIEXE/NeuralAim',
    topics: [],
    pushedAt: null,
  },
  sqlvulninjector: {
    name: 'SQLVulnInjector',
    stars: 8,
    forks: null,
    language: 'PHP',
    description: 'Interactive SQL injection lab with real SQLite execution and a CTF mode.',
    htmlUrl: 'https://github.com/AsHfIEXE/SQLVulnInjector',
    topics: [],
    pushedAt: null,
  },
  dotify: {
    name: 'Dotify',
    stars: 23,
    forks: null,
    language: 'Python',
    description: 'Command-line tool for downloading Spotify songs, podcasts, videos and lyrics.',
    htmlUrl: 'https://github.com/AsHfIEXE/Dotify',
    topics: [],
    pushedAt: null,
  },
  cybersage: {
    name: 'CyberSage',
    stars: 4,
    forks: null,
    language: 'Python',
    description:
      'Automated web security assessment suite orchestrating reconnaissance and vulnerability scanning.',
    htmlUrl: 'https://github.com/AsHfIEXE/CyberSage',
    topics: [],
    pushedAt: null,
  },
};

const FALLBACK_TOTAL_STARS = Object.values(FALLBACK_REPOS).reduce((sum, repo) => sum + repo.stars, 0);

function sumStars(repos) {
  return Object.values(repos).reduce((sum, repo) => sum + (Number.isFinite(repo?.stars) ? repo.stars : 0), 0);
}

/**
 * localStorage throws on mere property access in some privacy modes, so every
 * read/write goes through here and is wrapped in try/catch by the callers.
 */
function getStorage() {
  try {
    if (typeof window === 'undefined') return null;
    return window.localStorage;
  } catch {
    return null;
  }
}

function isRepoRecord(value) {
  if (!value || typeof value !== 'object') return false;
  return Object.values(value).some(
    (repo) =>
      repo && typeof repo === 'object' && typeof repo.name === 'string' && Number.isFinite(repo.stars),
  );
}

/** Returns `{ savedAt, repos, repoCount, totalStars }` or null when unusable. */
function readCache() {
  const storage = getStorage();
  if (!storage) return null;
  try {
    const raw = storage.getItem(CACHE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    if (!parsed || typeof parsed !== 'object') return null;
    if (!Number.isFinite(parsed.savedAt) || !isRepoRecord(parsed.repos)) return null;
    return {
      savedAt: parsed.savedAt,
      repos: parsed.repos,
      repoCount: Number.isFinite(parsed.repoCount) ? parsed.repoCount : Object.keys(parsed.repos).length,
      totalStars: Number.isFinite(parsed.totalStars) ? parsed.totalStars : sumStars(parsed.repos),
    };
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
    // Best effort: a full quota or blocked storage must never break the page.
  }
}

function normalizeRepo(item) {
  const name = item.name;
  return {
    name,
    stars: Number.isFinite(item.stargazers_count) ? item.stargazers_count : 0,
    forks: Number.isFinite(item.forks_count) ? item.forks_count : null,
    // `language` and `description` are null for some repositories, but the
    // frozen shape requires strings.
    language: item.language || 'Unknown',
    description: item.description || '',
    htmlUrl:
      typeof item.html_url === 'string' && item.html_url
        ? item.html_url
        : `https://github.com/${GITHUB_USERNAME}/${name}`,
    topics: Array.isArray(item.topics) ? item.topics.filter((topic) => typeof topic === 'string') : [],
    pushedAt: typeof item.pushed_at === 'string' ? item.pushed_at : null,
  };
}

/** Keeps public, non-fork, non-archived repositories, keyed by lowercase name. */
function buildSnapshot(items) {
  const repos = {};
  let repoCount = 0;
  let totalStars = 0;

  for (const item of items) {
    if (!item || typeof item !== 'object' || typeof item.name !== 'string' || item.name === '') continue;
    if (item.fork === true || item.archived === true) continue;
    const repo = normalizeRepo(item);
    repos[repo.name.toLowerCase()] = repo;
    repoCount += 1;
    totalStars += repo.stars;
  }

  return { repos, repoCount, totalStars };
}

async function requestRepos(signal) {
  const response = await fetch(REPOS_URL, {
    headers: { Accept: 'application/vnd.github+json' },
    signal,
  });
  if (!response.ok) throw new Error(`GitHub API responded with ${response.status}`);
  const payload = await response.json();
  if (!Array.isArray(payload)) throw new Error('GitHub API returned an unexpected payload');
  return buildSnapshot(payload);
}

function fallbackSnapshot() {
  return {
    repos: FALLBACK_REPOS,
    repoCount: FALLBACK_REPO_COUNT,
    totalStars: FALLBACK_TOTAL_STARS,
    status: 'idle',
    isLive: false,
    lastUpdated: null,
  };
}

function initialSnapshot() {
  const cached = readCache();
  if (cached && Date.now() - cached.savedAt < CACHE_TTL_MS) {
    return {
      repos: cached.repos,
      repoCount: cached.repoCount,
      totalStars: cached.totalStars,
      status: 'ready',
      isLive: true,
      lastUpdated: cached.savedAt,
    };
  }

  // A visible document gets a request from the mount effect right away, so the
  // very first paint is already 'loading' (React forbids setting that state
  // synchronously from inside the effect). A document that mounts hidden waits
  // for the visibility listener and stays 'idle' until then.
  const willFetch = typeof document === 'undefined' || !document.hidden;
  return { ...fallbackSnapshot(), status: willFetch ? 'loading' : 'idle' };
}

/**
 * Case-insensitive repository lookup that layers live data over the snapshot.
 * Returns null when the name is unknown in both.
 */
export function getRepo(repos, name) {
  if (typeof name !== 'string' || name === '') return null;
  const key = name.toLowerCase();
  const live = repos && typeof repos === 'object' ? repos[key] : undefined;
  const fallback = FALLBACK_REPOS[key];

  if (live && fallback) {
    return { ...fallback, ...live, topics: Array.isArray(live.topics) ? live.topics : fallback.topics };
  }
  return live || fallback || null;
}

/**
 * Repository stats with a cached, rate-limit-tolerant lifecycle.
 * Never throws: on failure the previous data (or the snapshot) stays in place
 * and `status` becomes 'error'.
 */
export function useGitHubRepos() {
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
      const fresh = await requestRepos(controller.signal);
      const savedAt = Date.now();
      lastUpdatedRef.current = savedAt;
      writeCache({ savedAt, ...fresh });
      if (!mountedRef.current) return;
      setSnapshot({ ...fresh, status: 'ready', isLive: true, lastUpdated: savedAt });
    } catch (error) {
      // Unmount aborts land here too; they are not failures worth reporting.
      if (!mountedRef.current || error?.name === 'AbortError') return;
      console.warn(`useGitHubRepos: serving cached/fallback data (${error.message})`);
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
    // dispatched from a task instead of synchronously during the commit:
    // react-hooks/set-state-in-effect rejects a synchronous call into any
    // function that writes state, which `load` does. The timer also lets an
    // unmount before the task fires cancel the initial request outright.
    let timerId = 0;
    if (!isFresh) timerId = setTimeout(() => void load(false), 0);

    return () => {
      mountedRef.current = false;
      clearTimeout(timerId);
      controllerRef.current?.abort();
    };
  }, [load]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      void load(false);
    }, CACHE_TTL_MS);

    const handleVisibility = () => {
      if (typeof document === 'undefined' || document.hidden) return;
      if (Date.now() - lastUpdatedRef.current <= CACHE_TTL_MS) return;
      void load(false);
    };

    if (typeof document !== 'undefined') {
      document.addEventListener('visibilitychange', handleVisibility);
    }

    return () => {
      clearInterval(intervalId);
      if (typeof document !== 'undefined') {
        document.removeEventListener('visibilitychange', handleVisibility);
      }
    };
  }, [load]);

  const refresh = useCallback(() => {
    void load(true);
  }, [load]);

  return {
    repos: snapshot.repos,
    repoCount: snapshot.repoCount,
    totalStars: snapshot.totalStars,
    status: snapshot.status,
    isLive: snapshot.isLive,
    lastUpdated: snapshot.lastUpdated,
    refresh,
  };
}
