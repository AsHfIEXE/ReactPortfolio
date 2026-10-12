import { useEffect, useRef, useState } from 'react';
import { RefreshCw, Star } from 'lucide-react';
import { GITHUB_USERNAME, getRepo, useGitHubRepos } from '../hooks/useGitHubRepos';
import { formatRelative } from '../utils/relativeTime';

const PROJECTS = [
  {
    id: 'sqlvulinjector',
    title: 'SQLVulnInjector',
    repo: 'SQLVulnInjector',
    badge: 'PHP · Security · CTF',
    desc: 'Interactive SQL injection lab with real SQLite execution. 6 attack scenarios, CTF flags, glassmorphic UI. Zero config — pure PHP. Built for learning the art of injection.',
    color: 'var(--neon-green)',
  },
  {
    id: 'dotify',
    title: 'Dotify',
    repo: 'Dotify',
    badge: 'Python · CLI · Media',
    desc: 'The ultimate command-line tool for downloading anything from Spotify — songs, podcasts, videos, and lyrics — to build your permanent offline library.',
    color: '#1db954',
  },
  {
    id: 'cybersage',
    title: 'CyberSage',
    repo: 'CyberSage',
    badge: 'Python · Flask · Security',
    desc: 'A Flask web app that automates and streamlines web security assessments and penetration testing workflows — from recon to reporting.',
    color: 'var(--neon-cyan)',
  },
  {
    id: 'cyphisher',
    title: 'Cyphisher',
    repo: 'Cyphisher',
    badge: 'Bash · PHP · Docker',
    desc: 'Red-team social-engineering simulator with 30+ templates and a rebuilt terminal interface. Auto-allocates free ports, recovers from crashed tunnels, and reaps zombie processes on exit.',
    color: 'var(--accent-warm)',
  },
  {
    id: 'neuralaim',
    title: 'NeuralAim',
    repo: 'NeuralAim',
    badge: 'C++ · ONNX · DirectML',
    desc: 'Real-time GPU vision-inference runtime for Windows, with DirectML and CUDA/TensorRT backends, ONNX model loading, and a toggleable ImGui overlay.',
    color: 'var(--neon-purple)',
  },
];

const LANGUAGE_COLORS = {
  PHP: '#4f5d95',
  Python: '#3572a5',
  Shell: '#89e051',
  'C++': '#f34b7d',
  JavaScript: '#f1e05a',
  TypeScript: '#3178c6',
};

const SKELETON = { className: 'project-stars project-stars--skeleton' };

const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/**
 * Counts up when a star value changes, so an automatic refresh is visible
 * instead of silently swapping the number.
 */
const AnimatedCount = ({ value }) => {
  const [display, setDisplay] = useState(value);
  const shownRef = useRef(value);

  useEffect(() => {
    const from = shownRef.current;

    if (from === value || prefersReducedMotion()) {
      shownRef.current = value;
      setDisplay(value);
      return undefined;
    }

    const start = performance.now();
    const duration = 650;
    let frame = 0;

    const step = (now) => {
      const progress = Math.min(1, (now - start) / duration);
      const eased = 1 - (1 - progress) ** 3;
      setDisplay(Math.round(from + (value - from) * eased));
      if (progress < 1) {
        frame = requestAnimationFrame(step);
      } else {
        shownRef.current = value;
      }
    };

    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [value]);

  return <>{display}</>;
};

const StarCount = ({ stars, isLive, isPending }) => {
  if (isPending) {
    return <span {...SKELETON} aria-hidden="true" />;
  }

  const known = typeof stars === 'number' && Number.isFinite(stars);

  return (
    <span
      className={`project-stars${isLive ? ' is-live' : ''}${known ? '' : ' is-unknown'}`}
      title={
        known
          ? `${stars} ${stars === 1 ? 'star' : 'stars'} on GitHub`
          : 'Star count unavailable — refresh when back online'
      }
      aria-label={known ? `${stars} GitHub stars` : 'Star count unavailable'}
    >
      <Star size={13} strokeWidth={2.2} aria-hidden="true" />
      <span className="project-stars-value">{known ? <AnimatedCount value={stars} /> : '—'}</span>
      {isLive && known && <span className="project-stars-pulse" aria-hidden="true" />}
    </span>
  );
};

const Projects = () => {
  const { repos, repoCount, status, isLive, lastUpdated, refresh } = useGitHubRepos();
  const [, tick] = useState(0);

  // Keeps the "synced 3m ago" label honest without re-rendering the whole tree.
  useEffect(() => {
    if (!lastUpdated) return undefined;
    const id = setInterval(() => tick((n) => n + 1), 30000);
    return () => clearInterval(id);
  }, [lastUpdated]);

  const isLoading = status === 'loading' || (!lastUpdated && status !== 'error');

  let syncLabel = 'Syncing repository data…';
  let syncState = 'is-loading';

  if (status === 'error') {
    syncLabel = lastUpdated
      ? `Offline · counts from ${formatRelative(lastUpdated)}`
      : 'Offline · GitHub unreachable';
    syncState = 'is-offline';
  } else if (!isLoading) {
    syncLabel = `${isLive ? 'Live' : 'Cached'} · synced ${formatRelative(lastUpdated)}`;
    syncState = 'is-live';
  }

  return (
    <section id="projects" className="section">
      <div className="wrap">
        <div className="projects-header reveal">
          <h2 className="heading">Notable Projects</h2>
          <p className={`sync-pill ${syncState}`}>
            <span className="sync-dot" aria-hidden="true" />
            <span className="sync-label">{syncLabel}</span>
            <button
              type="button"
              className="sync-refresh"
              onClick={refresh}
              disabled={status === 'loading'}
              aria-label="Refresh repository statistics"
              title="Refresh repository statistics"
            >
              <RefreshCw size={13} strokeWidth={2.4} aria-hidden="true" />
            </button>
          </p>
        </div>

        <div className="projects-grid">
          {PROJECTS.map((project, index) => {
            const live = getRepo(repos, project.repo);
            const stars = typeof live?.stars === 'number' ? live.stars : null;
            const language = live?.language ?? null;
            const sourceUrl = live?.htmlUrl ?? `https://github.com/${GITHUB_USERNAME}/${project.repo}`;
            const starPending = stars === null && status !== 'error';

            return (
              <article
                key={project.id}
                className="glass-card project-card reveal"
                style={{ animationDelay: `${index * 0.1}s`, borderTop: `2px solid ${project.color}` }}
              >
                <div className="project-header">
                  <span className="project-badge" style={{ color: project.color }}>
                    {project.badge}
                  </span>
                </div>

                <h3 className="project-title">{project.title}</h3>

                <p className="project-meta">
                  {language && (
                    <span className="project-lang">
                      <span
                        className="project-lang-dot"
                        style={{ background: LANGUAGE_COLORS[language] ?? 'var(--text-muted)' }}
                        aria-hidden="true"
                      />
                      {language}
                    </span>
                  )}
                  <a
                    className="project-repo"
                    href={sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {GITHUB_USERNAME}/{project.repo}
                  </a>
                </p>

                <p className="project-desc">{project.desc}</p>

                <div className="project-footer">
                  <a
                    href={sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-ghost project-link"
                  >
                    View Source →
                  </a>
                  <StarCount stars={stars} isLive={isLive} isPending={starPending} />
                </div>
              </article>
            );
          })}
        </div>

        <div className="projects-cta reveal">
          <a
            href={`https://github.com/${GITHUB_USERNAME}?tab=repositories`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-ghost"
          >
            View All {repoCount}+ Repositories →
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
