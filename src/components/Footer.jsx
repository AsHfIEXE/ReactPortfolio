const Footer = () => {
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
      </div>
    </footer>
  );
};

export default Footer;
