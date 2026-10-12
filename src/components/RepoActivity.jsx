import { useMemo } from 'react';

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

/**
 * Twelve-month push activity, computed from the repository data we already
 * fetch. Rendered as markup rather than an <img> so nothing here can be broken
 * by a third-party service going down or demanding a token.
 */
const RepoActivity = ({ repos, months: windowSize = 12 }) => {
  const buckets = useMemo(() => {
    const now = new Date();
    const list = [];

    for (let offset = windowSize - 1; offset >= 0; offset -= 1) {
      const date = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth() - offset, 1));
      list.push({
        key: `${date.getUTCFullYear()}-${date.getUTCMonth()}`,
        year: date.getUTCFullYear(),
        month: date.getUTCMonth(),
        count: 0,
      });
    }

    const indexByKey = new Map(list.map((entry, i) => [entry.key, i]));

    for (const repo of Object.values(repos || {})) {
      if (!repo?.pushedAt) continue;
      const pushed = new Date(repo.pushedAt);
      if (Number.isNaN(pushed.getTime())) continue;
      const i = indexByKey.get(`${pushed.getUTCFullYear()}-${pushed.getUTCMonth()}`);
      if (i !== undefined) list[i].count += 1;
    }

    return list;
  }, [repos, windowSize]);

  const peak = buckets.reduce((max, entry) => Math.max(max, entry.count), 0);
  const total = buckets.reduce((sum, entry) => sum + entry.count, 0);

  return (
    <figure className="repo-activity">
      <figcaption className="repo-activity-caption">
        <span className="repo-activity-title">Repository activity</span>
        <span className="repo-activity-meta">
          {total === 0
            ? 'no pushes recorded in this window'
            : `${total} ${total === 1 ? 'push' : 'pushes'} across ${buckets.filter((b) => b.count > 0).length} months`}
        </span>      </figcaption>

      <div
        className="repo-activity-chart"
        role="img"
        aria-label={
          total === 0
            ? 'No repository activity recorded in the last twelve months'
            : `Repository pushes per month over the last twelve months, peaking at ${peak}`
        }
      >
        {buckets.map((entry) => {
          const height = peak === 0 ? 0 : Math.max(entry.count / peak, entry.count > 0 ? 0.12 : 0);
          return (
            <div
              className="repo-activity-col"
              key={entry.key}
              title={`${MONTHS[entry.month]} ${entry.year}: ${entry.count} ${entry.count === 1 ? 'push' : 'pushes'}`}
            >
              <div className="repo-activity-track">
                <div
                  className={`repo-activity-bar${entry.count === 0 ? ' is-empty' : ''}`}
                  style={{ height: `${Math.round(height * 100)}%` }}
                  title={`${MONTHS[entry.month]} ${entry.year}: ${entry.count} ${entry.count === 1 ? 'push' : 'pushes'}`}
                />
              </div>
              <span className="repo-activity-label">{MONTHS[entry.month]}</span>
            </div>
          );
        })}
      </div>
    </figure>
  );
};

export default RepoActivity;
