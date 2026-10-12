import { useEffect, useState } from 'react';
import { BrandBranch, BrandBrackets, BrandSync } from './BrandIcons';
import RepoActivity from './RepoActivity';
import {
  LEETCODE_PROFILE_URL,
  useLeetCodeStats,
} from '../hooks/useLeetCodeStats';
import { GITHUB_USERNAME, useGitHubRepos } from '../hooks/useGitHubRepos';
import { formatRelative } from '../utils/relativeTime';

const DynamicStats = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { stats: lcData, status, isLive, lastUpdated, refresh } = useLeetCodeStats();
  const { repos, repoCount, totalStars, status: ghStatus } = useGitHubRepos();
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
              {/* House mark rather than a hotlinked third-party logo; the card
                  title already names LeetCode. */}
              <BrandBrackets size={22} className="stat-icon" />
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
                  <BrandSync size={14} />
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
              <BrandBranch size={22} className="stat-icon" />
              <h3>GitHub Activity</h3>
              <a href={`https://github.com/${GITHUB_USERNAME}`} target="_blank" rel="noopener noreferrer" className="stat-link">View GitHub ↗</a>
            </div>

            {/* The contribution heatmap used to be a hotlinked third-party
                image, which broke outright when that service started requiring
                a token. This is drawn from the repository data we fetch. */}
            <RepoActivity repos={repos} />

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
