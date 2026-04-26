import { useState, useEffect } from 'react';

const Footer = () => {
  const [joke, setJoke] = useState("");

  useEffect(() => {
    const jokes = [
      "No bugs were harmed in the making of this website. (They were brutally terminated.)",
      "I tried to write a joke about UDP, but I wasn't sure if you'd get it.",
      "Why do hackers prefer dark mode? Because light attracts bugs.",
      "If my code works on the first try, I assume I've broken the space-time continuum.",
      "Currently reading: 'How to exit Vim' by Anonymous.",
      "There's no place like 127.0.0.1",
      "My code is compiling. If you need me, I'll be writing my next sci-fi novel.",
      "I don't need sleep, I need coffee and root access.",
      "sudo make me a sandwich — and a CVE while you're at it.",
      "Alert: Your curiosity has been logged. No bounty for this one.",
    ];
    setJoke(jokes[Math.floor(Math.random() * jokes.length)]);
  }, []);

  const socials = [
    { label: 'GitHub', href: 'https://github.com/AsHfIEXE', icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18" aria-hidden="true"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>
    )},
    { label: 'Google VRP', href: 'https://bughunters.google.com/profile/7e8eaec9-9b36-437c-bef6-32bc9552f5d3', icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18" aria-hidden="true"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z"/><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-5h2V8h-2v7zm0 2h2v-2h-2v2z"/></svg>
    )},
    { label: 'HackerOne', href: 'https://hackerone.com/ashfi', icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18" aria-hidden="true"><path d="M7 2v13.5l3.5-3.5V9.5L14 6V2H7zm3.5 7.5v5.5L14 18.5V11l-3.5-1.5zM14 11v7.5L17.5 22V7.5L14 11z"/></svg>
    )},
    { label: 'LeetCode', href: 'https://leetcode.com/salahin0ashfi', icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18" aria-hidden="true"><path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z"/></svg>
    )},
    { label: 'Intigriti', href: 'https://app.intigriti.com/researcher/profile/ashfiexe', icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18" aria-hidden="true"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
    )},
  ];

  return (
    <footer className="footer section" itemScope itemType="https://schema.org/Person">
      <div className="wrap reveal">

        {/* Brand logo */}
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.5rem' }}>
          <svg style={{ height: '48px', width: 'auto' }} viewBox="0 0 400 72" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Salehin Ashfi logo">
            <defs>
              <linearGradient id="ashfi-grad-footer" x1="8" y1="68" x2="52" y2="4" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#00c484"/>
                <stop offset="100%" stopColor="#00ffc3"/>
              </linearGradient>
            </defs>
            <line x1="8" y1="65" x2="30" y2="10" stroke="url(#ashfi-grad-footer)" strokeWidth="3" strokeLinecap="square"/>
            <line x1="30" y1="10" x2="52" y2="65" stroke="url(#ashfi-grad-footer)" strokeWidth="3" strokeLinecap="square"/>
            <line x1="16" y1="45" x2="44" y2="45" stroke="#00e5a0" strokeWidth="1.8" strokeLinecap="square"/>
            <line x1="44" y1="45" x2="54" y2="45" stroke="#00e5a0" strokeWidth="0.7" opacity="0.45"/>
            <line x1="54" y1="45" x2="54" y2="39" stroke="#00e5a0" strokeWidth="0.7" opacity="0.45"/>
            <circle cx="54" cy="37.5" r="1.5" fill="#00e5a0" opacity="0.75"/>
            <circle cx="30" cy="10" r="2.5" fill="#04040c" stroke="#00e5a0" strokeWidth="1.2"/>
            <circle cx="30" cy="10" r="1" fill="#00e5a0"/>
            <rect x="6" y="62" width="5" height="5" fill="#04040c" stroke="#00e5a0" strokeWidth="1"/>
            <rect x="49" y="62" width="5" height="5" fill="#04040c" stroke="#00e5a0" strokeWidth="1"/>
            <line x1="74" y1="18" x2="74" y2="54" stroke="#00e5a0" strokeWidth="0.6" opacity="0.15"/>
            <text x="86" y="46" fontFamily="Orbitron,sans-serif" fontWeight="900" fontSize="30" fill="#f0eff8" letterSpacing="3">ASHFI</text>
            <text x="279" y="46" fontFamily="JetBrains Mono,monospace" fontWeight="400" fontSize="18" fill="#00e5a0" letterSpacing="1" opacity="0.82">.EXE</text>
            <text x="87" y="60" fontFamily="JetBrains Mono,monospace" fontWeight="400" fontSize="8" fill="#00e5a0" letterSpacing="3" opacity="0.4">SECURITY · CODE · WORDS</text>
          </svg>
        </div>

        {/* Tagline */}
        <div className="footer-tagline" itemProp="jobTitle">
          Cybersecurity Researcher · Developer · Sci-Fi Author<br/>
          <span style={{ opacity: 0.6 }}>Bangladesh 🇧🇩</span>
        </div>

        {/* Social links */}
        <nav className="footer-socials" aria-label="Social and platform links">
          {socials.map(s => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-link"
              aria-label={s.label}
              title={s.label}
            >
              {s.icon}
              <span>{s.label}</span>
            </a>
          ))}
        </nav>

        {/* Quote */}
        <p className="footer-quote">
          "Breaking systems ethically. Building tools relentlessly. Writing worlds obsessively."
        </p>

        {/* Divider */}
        <div className="footer-divider"></div>

        {/* Copyright */}
        <div className="footer-copy">
          © {new Date().getFullYear()} <span itemProp="name">Salehin Ashfi</span>. All rights reserved.&nbsp;&nbsp;·&nbsp;&nbsp;
          Designed & built by Salehin Ashfi.
        </div>

        {/* Easter egg joke */}
        {joke && (
          <div className="footer-joke">
            <span style={{ opacity: 0.5, marginRight: '0.5rem' }}>&gt;_</span>{joke}
          </div>
        )}
      </div>
    </footer>
  );
};

export default Footer;
