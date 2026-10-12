import {
  Award,
  BadgeCheck,
  ExternalLink,
  Flag,
  ShieldCheck,
  Trophy,
  Users,
} from 'lucide-react';

const programmes = [
  {
    name: 'SKALE Network',
    validClosed: '0 / 4',
    reputation: '22',
    rank: '5',
    icon: ShieldCheck,
    accent: 'mint',
  },
  {
    name: 'Vercel Open Source',
    validClosed: '2 / 16',
    reputation: '4',
    rank: '—',
    icon: BadgeCheck,
    accent: 'cyan',
  },
  {
    name: 'Adobe',
    note: 'Private programme · details confidential',
    validClosed: '1 / 1',
    reputation: '2',
    rank: '—',
    icon: Award,
    accent: 'violet',
  },
];

const ProgrammeCard = ({ programme }) => {
  const Icon = programme.icon;

  return (
    <article className={`programme-card programme-card--${programme.accent}`}>
      <div className="programme-title-row">
        <span className="programme-icon" aria-hidden="true">
          <Icon size={18} strokeWidth={1.8} />
        </span>
        <div className="programme-name">
          <h3>{programme.name}</h3>
        </div>
      </div>
      {programme.note && <p className="programme-note">{programme.note}</p>}
      <dl className="programme-metrics">
        <div>
          <dt>Valid / closed</dt>
          <dd>{programme.validClosed}</dd>
        </div>
        <div>
          <dt>Reputation</dt>
          <dd>{programme.reputation}</dd>
        </div>
        <div>
          <dt>Rank</dt>
          <dd>{programme.rank}</dd>
        </div>
      </dl>
    </article>
  );
};

const BugBounty = () => {
  return (
    <section id="recognition" className="section recognition-section" aria-labelledby="recognition-heading">
      <div className="wrap">
        <div className="recognition-heading reveal">
          <div>
            <p className="section-kicker">
              <ShieldCheck size={16} strokeWidth={2} aria-hidden="true" />
              Evidence of practice
            </p>
            <h2 id="recognition-heading" className="heading">Research, recognition, and results.</h2>
          </div>
          <p className="recognition-intro">
            A record of responsible disclosure and hands-on CTF work—presented with the details that matter.
          </p>
        </div>

        <div className="recognition-summary reveal" aria-label="Recognition highlights">
          <div className="proof-stat">
            <span className="proof-stat-value">3</span>
            <span className="proof-stat-label">thanks received</span>
          </div>
          <div className="proof-stat">
            <span className="proof-stat-value">3</span>
            <span className="proof-stat-label">programmes represented</span>
          </div>
          <div className="proof-stat proof-stat--rank">
            <span className="proof-stat-value">53 <small>/ 545</small></span>
            <span className="proof-stat-label">BDSec CTF team standing</span>
          </div>
        </div>

        <div className="recognition-grid">
          <article className="research-panel glass-card reveal">
            <div className="panel-header">
              <div>
                <p className="panel-eyebrow">Responsible disclosure</p>
                <h3>Thank-you ledger</h3>
              </div>
              <span className="thanks-pill">
                <BadgeCheck size={16} strokeWidth={2} aria-hidden="true" />
                3 received
              </span>
            </div>
            <p className="panel-copy">
              Recognition across security programmes for carefully documented research and coordinated reporting.
            </p>
            <div className="programme-grid">
              {programmes.map((programme) => (
                <ProgrammeCard key={programme.name} programme={programme} />
              ))}
            </div>
            <div className="google-proof">
              <div>
                <span className="google-proof-label">Also recognized by Google VRP</span>
                <p>4 accepted vulnerabilities · #1577 globally · 120+ reports submitted</p>
              </div>
              <a
                href="https://bughunters.google.com/profile/7e8eaec9-9b36-437c-bef6-32bc9552f5d3"
                target="_blank"
                rel="noreferrer"
              >
                Profile <ExternalLink size={14} strokeWidth={2} aria-hidden="true" />
              </a>
            </div>
          </article>

          <article className="ctf-card glass-card reveal">
            <div className="ctf-card-glow" aria-hidden="true" />
            <div className="ctf-icon" aria-hidden="true">
              <Trophy size={24} strokeWidth={1.7} />
            </div>
            <p className="panel-eyebrow">Certificate of participation</p>
            <h3>BDSec CTF 2026</h3>
            <p className="ctf-description">
              International Capture The Flag Competition, organized by Knight Squad.
            </p>

            <div className="ctf-ranking" aria-label="Final team standing 53 out of 545 teams">
              <span>53</span>
              <div>
                <strong>/ 545</strong>
                <small>teams</small>
              </div>
            </div>
            <p className="ctf-standing">Final team standing</p>

            <dl className="ctf-details">
              <div>
                <dt><Users size={15} aria-hidden="true" /> Team</dt>
                <dd>ashfiexe</dd>
              </div>
              <div>
                <dt><Flag size={15} aria-hidden="true" /> Event date</dt>
                <dd>20 July 2026</dd>
              </div>
            </dl>

            <a
              className="certificate-link"
              href="/certificates/bdsec-ctf-2026-certificate.pdf"
              target="_blank"
              rel="noreferrer"
            >
              View certificate
              <ExternalLink size={16} strokeWidth={2} aria-hidden="true" />
            </a>
          </article>
        </div>
      </div>
    </section>
  );
};

export default BugBounty;
