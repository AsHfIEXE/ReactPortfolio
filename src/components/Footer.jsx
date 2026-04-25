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
        <h2 className="footer-name">SALEHIN ASHFI</h2>
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
