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
      "I don't need sleep, I need coffee and root access."
    ];
    setJoke(jokes[Math.floor(Math.random() * jokes.length)]);
  }, []);

  return (
    <footer className="footer section">
      <div className="wrap reveal">
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.5rem' }}>
          <svg style={{ height: '48px', width: 'auto' }} viewBox="0 0 400 72" fill="none" xmlns="http://www.w3.org/2000/svg">
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
        <div style={{ fontFamily: 'var(--font-ui)', fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
          Cybersecurity Researcher · Developer · Sci-Fi Author<br/>
          Bangladesh 🇧🇩
        </div>
        
        <p className="footer-quote">
          "Breaking systems ethically. Building tools relentlessly. Writing worlds obsessively."
        </p>
        
        <div className="footer-copy">
          © {new Date().getFullYear()} Salehin Ashfi. All rights reserved.<br/>
          Designed & built by Salehin Ashfi.
        </div>

        {joke && (
          <div style={{ 
            marginTop: '2.5rem', 
            fontFamily: 'var(--font-mono)', 
            fontSize: '0.75rem', 
            color: 'var(--neon-green)',
            opacity: 0.6,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '0.5rem'
          }}>
            <span style={{ opacity: 0.5 }}>&gt;_</span> {joke}
          </div>
        )}
      </div>
    </footer>
  );
};

export default Footer;
