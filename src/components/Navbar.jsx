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
    const handleScroll = () => {
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
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="nav-container">
          <a href="#hero" className="nav-logo" onClick={() => setIsOpen(false)}>
            <span className="logo-bracket">&lt;/&gt;</span> ASHFI<span className="logo-blink">_</span>
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
              <span style={{ marginRight: '6px' }}>⚡</span> Hire Me
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
            ⚡ Initiate Contact
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
