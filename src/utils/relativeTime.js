/**
 * Compact "2m ago" style formatting for cache-age readouts.
 * Returns `never` for a missing timestamp so callers can branch on it.
 */
export function formatRelative(timestamp) {
  if (!Number.isFinite(timestamp)) return 'never';

  const seconds = Math.max(0, Math.round((Date.now() - timestamp) / 1000));
  if (seconds < 45) return 'just now';

  const minutes = Math.round(seconds / 60);
  if (minutes < 60) return `${minutes}m ago`;

  const hours = Math.round(minutes / 60);
  if (hours < 24) return `${hours}h ago`;

  return `${Math.round(hours / 24)}d ago`;
}
