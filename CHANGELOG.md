# Changelog

All notable changes to this project are recorded in this file.

The format follows [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

> **Maintenance rule — read before committing.**
> Every change that lands in this repository gets an entry here **in the same
> commit**. Append to `[Unreleased]` as you work; when you cut a release, move
> those items under a new version heading with the date and add comparison
> links. Use the categories: Added, Changed, Deprecated, Removed, Fixed,
> Security. Leave out categories you didn't use.
>
> History before 2026-10-12 was not recorded. This log starts from that date.

## [Unreleased]

### Added

- **Live LeetCode statistics** via the new `src/hooks/useLeetCodeStats.js`,
  with the same cached, rate-limit-tolerant lifecycle as the GitHub data: a
  10-minute `localStorage` cache, a timer refresh, revalidation when the tab
  regains focus, and a manual refresh control.
- The LeetCode card now also reports the total problem pool and the global rank.
- The GitHub contributions card reports live public-repository and star totals.
- A shared `formatRelative` helper (`src/utils/relativeTime.js`) for the
  "synced 2m ago" readouts.

### Changed

- The live-sync readout pill is now shared by the Projects grid and the Numbers
  card (`.sync-pill`, `.sync-dot`, `.sync-refresh`) instead of being defined for
  the projects section alone.
- The LeetCode profile link uses the canonical `leetcode.com/u/<user>/` form.
- The boot sequence announces `ashfiexe` rather than `salehin_ashfi.exe`.

### Fixed

- **LeetCode statistics were stale and silently hardcoded.** The card called an
  endpoint that answers 429 (and whose error response Cloudflare caches), so the
  component fell back to numbers from an earlier era and logged a console error
  on every load. It now reads a browser-verified mirror with a second mirror as
  backup, validates the payload field by field (the mirrors answer HTTP 200 with
  null members for an unknown user, so `response.ok` alone is not a valid test),
  and falls back to figures verified against three independent sources. Reported
  304 / 91 / 161 / 52; actually 570 solved, 176 / 317 / 77.
- **Skill bars could render empty.** The fill width was driven by a reveal
  class, so any missed intersection - for example a browser restoring a scroll
  position past the skills section - left every bar at zero. The real width is
  now the default value and the grow-in is an animation layered on top, so the
  bars are correct even if the reveal never fires.
- Reveal animations no longer leave whole sections invisible when the browser
  restores a scroll position below them: content already scrolled past now
  counts as revealed.
- **The About terminal card left a large dead area.** It stretched to the prose
  column's height (~1299px) while its content needed roughly 660px. Command
  groups now spread evenly to fill the card and a prompt line with a blinking
  caret sits at the bottom.
- The About terminal styles are scoped to `.terminal-block`, so they no longer
  leak into the boot loader, which reuses the `.terminal-body` class name.
- The GitHub contribution card no longer renders the third-party
  `github-readme-stats` error image ("Something went wrong" - it now requires a
  GitHub token); it shows live totals from the existing repository data.

## [1.0.0] - 2026-10-12

### Added

- **Live GitHub star counts** on the project cards, backed by the new
  `src/hooks/useGitHubRepos.js`. It makes a single request to the GitHub REST
  API, caches the result in `localStorage` for 10 minutes, revalidates on a
  timer and when the tab regains focus, and exposes a manual refresh control.
  Star values animate to their new number when they change. The count is made
  unauthenticated and cached so regular visitors stay well inside GitHub's
  60-requests-per-hour limit; no token is embedded.
- A live/offline status readout above the projects grid (`Live · synced 2m ago`,
  `Offline · GitHub unreachable`). When the API is rate-limited or unreachable
  the section keeps rendering the last known numbers instead of failing or
  showing zeros.
- Two project cards: **Cyphisher** (Bash · PHP · Docker) and **NeuralAim**
  (C++ · ONNX · DirectML), described from their public READMEs.
- **Résumé download and viewing.** The résumé is published as a static asset at
  `public/Salehin_Ashfi_Resume.pdf` with metadata in `src/data/resume.js`, and is
  reachable from four places: the navbar popover
  (`src/components/ResumeMenu.jsx`, offering Download PDF and Open in browser),
  the mobile drawer, the hero actions, and a résumé block in the contact
  section.
- A language and repository metadata row on each project card.

### Changed

- Project cards now link to **their own repository**. All three cards previously
  pointed at the GitHub profile instead.
- The star count moved from the card header into a card footer, so long
  technology badges no longer push it onto a second line and misalign the cards.
- "View All N Repositories" now reports the live repository count rather than a
  hardcoded figure.
- Navbar: tightened link and action gaps, and buttons no longer wrap their
  labels.
- The résumé PDF contains the contact details the site already publishes.

### Fixed

- **Recognition programme cards were broken at desktop widths.** The three-column
  metric grid had no room for its labels, so `VALID / CLOSED`, `REPUTATION` and
  `RANK` rendered as a single merged string, and values wrapped inconsistently
  (`2 /` then `16`), leaving the three cards visibly misaligned. Metrics are now
  stacked label/value rows pinned to each card's bottom, and the type scale was
  raised from 0.56–0.9rem to 0.64–0.86rem.
- The Adobe "Private programme · details confidential" note is now rendered at
  full card width and is legible; it was previously 0.56rem (~9px) and wrapped
  mid-word.
- The navbar no longer clips the "Hire Me" button or overlaps "Contact" with the
  résumé control around 1024px. The bar collapses to the drawer below 1101px, a
  breakpoint derived from the measured ~969px of desktop content.
- `.nav-resume` no longer leaked into the mobile bar. The rule lived in a media
  query earlier in the stylesheet than the later `.resume-menu` rule, so equal
  specificity meant the button stayed visible.
- The offline repository fallback was corrected from 37 to the verified 33
  non-fork, non-archived repositories, so online and offline visitors see the
  same total.
- The résumé popover no longer claims `role="menu"` without implementing
  arrow-key navigation; it is now a plain disclosure containing two links.
