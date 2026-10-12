import { useEffect, useState } from 'react';
import { RefreshCw } from 'lucide-react';
import {
  LEETCODE_PROFILE_URL,
  useLeetCodeStats,
} from '../hooks/useLeetCodeStats';
import { GITHUB_USERNAME, useGitHubRepos } from '../hooks/useGitHubRepos';
import { formatRelative } from '../utils/relativeTime';

const DynamicStats = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { stats: lcData, status, isLive, lastUpdated, refresh } = useLeetCodeStats();
  const { repoCount, totalStars, status: ghStatus } = useGitHubRepos();
  const [, tick] = useState(0);

  useEffect(() => {
    // Trigger animation slightly after mount
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  // Keeps the "synced 3m ago" label honest.
  useEffect(() => {
    if (!lastUpdated) return undefined;
    const id = setInterval(() => tick((n) => n + 1), 30000);
    return () => clearInterval(id);
  }, [lastUpdated]);

  const isLoading = status === 'loading' || (!lastUpdated && status !== 'error');
  let syncLabel = 'Syncing LeetCode data…';
  let syncState = 'is-loading';
  if (status === 'error') {
    syncLabel = lastUpdated
      ? `Offline · counts from ${formatRelative(lastUpdated)}`
      : 'Offline · LeetCode unreachable';
    syncState = 'is-offline';
  } else if (!isLoading) {
    syncLabel = `${isLive ? 'Live' : 'Cached'} · synced ${formatRelative(lastUpdated)}`;
    syncState = 'is-live';
  }

  // Precise SVG Math for perfect rings
  const rEasy = 46;
  const rMed = 39;
  const rHard = 32;

  const circEasy = 2 * Math.PI * rEasy;
  const circMed = 2 * Math.PI * rMed;
  const circHard = 2 * Math.PI * rHard;

  const offEasy = isVisible ? circEasy - (circEasy * Math.min(lcData.easySolved / 200, 1)) : circEasy;
  const offMed = isVisible ? circMed - (circMed * Math.min(lcData.mediumSolved / 400, 1)) : circMed;
  const offHard = isVisible ? circHard - (circHard * Math.min(lcData.hardSolved / 150, 1)) : circHard;

  return (
    <section id="stats" className="section">
      <div className="wrap">
        <h2 className="heading reveal">The Numbers</h2>

        <div className="stats-container reveal">

          {/* LeetCode Perfect Rings */}
          <div className="glass-card stat-box premium-card">
            <div className="stat-header">
              <img src="https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png" alt="LC" style={{ width: 24, height: 24, filter: 'invert(1)' }} />
              <h3>LeetCode Stats</h3>
              <p className={`sync-pill ${syncState}`}>
                <span className="sync-dot" aria-hidden="true" />
                <span className="sync-label">{syncLabel}</span>
                <button
                  type="button"
                  className="sync-refresh"
                  onClick={refresh}
                  disabled={status === 'loading'}
                  aria-label="Refresh LeetCode statistics"
                  title="Refresh LeetCode statistics"
                >
                  <RefreshCw size={13} strokeWidth={2.4} aria-hidden="true" />
                </button>
              </p>
              <a href={LEETCODE_PROFILE_URL} target="_blank" rel="noopener noreferrer" className="stat-link">View Profile ↗</a>
            </div>

            <div className="lc-perfect-layout">
              <div className="lc-ring-wrapper">
                <svg viewBox="0 0 100 100" className="lc-svg">
                  {/* Background tracks */}
                  <circle cx="50" cy="50" r={rEasy} className="lc-track" />
                  <circle cx="50" cy="50" r={rMed} className="lc-track" />
                  <circle cx="50" cy="50" r={rHard} className="lc-track" />

                  {/* Animated Rings */}
                  <circle cx="50" cy="50" r={rEasy} className="lc-ring-easy" strokeDasharray={circEasy} strokeDashoffset={offEasy} />
                  <circle cx="50" cy="50" r={rMed} className="lc-ring-med" strokeDasharray={circMed} strokeDashoffset={offMed} />
                  <circle cx="50" cy="50" r={rHard} className="lc-ring-hard" strokeDasharray={circHard} strokeDashoffset={offHard} />
                </svg>
                <div className="lc-center-text">
                  <span className="lc-big">{lcData.totalSolved}</span>
                  <span className="lc-small">Solved</span>
                </div>
              </div>

              <div className="lc-legend">
                <div className="lc-legend-item">
                  <div className="lc-dot" style={{ backgroundColor: '#00b8a3', boxShadow: '0 0 8px #00b8a3' }}></div>
                  <span className="lc-label">Easy</span>
                  <span className="lc-val" style={{ color: '#00b8a3' }}>{lcData.easySolved}</span>
                </div>
                <div className="lc-legend-item">
                  <div className="lc-dot" style={{ backgroundColor: '#ffc01e', boxShadow: '0 0 8px #ffc01e' }}></div>
                  <span className="lc-label">Medium</span>
                  <span className="lc-val" style={{ color: '#ffc01e' }}>{lcData.mediumSolved}</span>
                </div>
                <div className="lc-legend-item">
                  <div className="lc-dot" style={{ backgroundColor: '#ff375f', boxShadow: '0 0 8px #ff375f' }}></div>
                  <span className="lc-label">Hard</span>
                  <span className="lc-val" style={{ color: '#ff375f' }}>{lcData.hardSolved}</span>
                </div>

                <dl className="lc-meta">
                  {Number.isFinite(lcData.totalQuestions) && (
                    <div>
                      <dt>Problem pool</dt>
                      <dd>{lcData.totalQuestions.toLocaleString()}</dd>
                    </div>
                  )}
                  {Number.isFinite(lcData.ranking) && (
                    <div>
                      <dt>Global rank</dt>
                      <dd>#{lcData.ranking.toLocaleString()}</dd>
                    </div>
                  )}
                </dl>
              </div>
            </div>
          </div>

          {/* GitHub Auto-Scaling Graph */}
          <div className="glass-card stat-box premium-card">
            <div className="stat-header">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
              <h3>GitHub Contributions</h3>
              <a href={`https://github.com/${GITHUB_USERNAME}`} target="_blank" rel="noopener noreferrer" className="stat-link">View GitHub ↗</a>
            </div>

            <div className="gh-perfect-container" style={{ width: '100%', overflowX: 'auto', paddingBottom: '10px' }}>
              <img
                src="https://ghchart.rshah.org/00d4ff/AsHfIEXE"
                alt="GitHub contributions graph"
                className="gh-perfect-img"
                style={{ minWidth: '700px', width: '100%', height: 'auto' }}
                loading="lazy"
              />
            </div>

            {/* github-readme-stats needs a GitHub token now and renders a
                "Something went wrong" card without one, so this reads the same
                live repository data the Projects grid uses. */}
            <dl className="gh-live-strip">
              <div>
                <dt>Public repositories</dt>
                <dd>{ghStatus === 'error' ? `${repoCount}+` : repoCount}</dd>
              </div>
              <div>
                <dt>Stars earned</dt>
                <dd>{totalStars}</dd>
              </div>
            </dl>
          </div>

        </div>
      </div>
    </section>
  );
};

export default DynamicStats;
