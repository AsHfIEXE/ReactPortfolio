import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Books', href: '#books' },
    { name: 'Projects', href: '#projects' },
    { name: 'Stats', href: '#stats' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <nav className="navbar">
      <div className="wrap nav-container">
        <a href="#hero" className="nav-logo">
          <span>&lt;/&gt;</span> ASHFI
        </a>
        
        <div className="nav-links">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="nav-link">
              {link.name}
            </a>
          ))}
          <a href="#contact" className="btn btn-primary" style={{ padding: '8px 16px', fontSize: '0.8rem' }}>
            Hire Me
          </a>
        </div>

        {/* Mobile menu could be implemented here */}
      </div>
    </nav>
  );
};

export default Navbar;
