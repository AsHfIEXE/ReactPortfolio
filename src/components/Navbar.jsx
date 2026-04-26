import { useState, useEffect } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const navLinks = [
    { name: 'Home', href: '#hero', id: 'hero' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'Books', href: '#books', id: 'books' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Stats', href: '#stats', id: 'stats' },
    { name: 'Contact', href: '#contact', id: 'contact' }
  ];

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 50);

          // Simple active section detection
          const sections = navLinks.map(link => document.getElementById(link.id)).filter(Boolean);
          let current = '';
          
          for (const section of sections) {
            const sectionTop = section.offsetTop;
            if (window.scrollY >= sectionTop - 150) {
              current = section.getAttribute('id');
            }
          }
          if (current) setActiveSection(current);
          
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="nav-container">
          <a href="#hero" className="nav-logo" onClick={() => setIsOpen(false)} style={{ display: 'flex', alignItems: 'center' }}>
            <svg style={{ height: '40px', width: 'auto' }} viewBox="0 0 400 72" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="ashfi-grad" x1="8" y1="68" x2="52" y2="4" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#00c484"/>
                  <stop offset="100%" stopColor="#00ffc3"/>
                </linearGradient>
              </defs>
              <line x1="8" y1="65" x2="30" y2="10" stroke="url(#ashfi-grad)" strokeWidth="3" strokeLinecap="square"/>
              <line x1="30" y1="10" x2="52" y2="65" stroke="url(#ashfi-grad)" strokeWidth="3" strokeLinecap="square"/>
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
          </a>
          
          <div className="nav-links">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className={`nav-link ${activeSection === link.id ? 'active' : ''}`}
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="nav-actions">
            <a href="#contact" className="btn btn-primary nav-hire-btn" style={{ padding: '10px 20px', fontSize: '0.9rem' }}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: '16px', height: '16px', marginRight: '6px' }}>
                <line x1="22" y1="2" x2="11" y2="13"></line>
                <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
              </svg>
              Hire Me
            </a>
            <button className={`mobile-toggle ${isOpen ? 'active' : ''}`} onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Menu">
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Overlay */}
      <div className={`mobile-backdrop ${isOpen ? 'open' : ''}`} onClick={() => setIsOpen(false)}></div>
      <div className={`mobile-drawer ${isOpen ? 'open' : ''}`}>
        <div className="mobile-drawer-inner">
          <div className="mobile-header">
            <span className="logo-bracket">&lt;/&gt;</span> SYSTEM_MENU
          </div>
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className={`mobile-link ${activeSection === link.id ? 'active' : ''}`} 
              onClick={() => setIsOpen(false)}
            >
              <span className="mobile-link-prefix">&gt;</span> {link.name}
            </a>
          ))}
          <a href="#contact" className="btn btn-primary" style={{ marginTop: '2rem', width: '100%' }} onClick={() => setIsOpen(false)}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: '20px', height: '20px', marginRight: '8px' }}>
              <line x1="22" y1="2" x2="11" y2="13"></line>
              <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
            </svg>
            Initiate Contact
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
