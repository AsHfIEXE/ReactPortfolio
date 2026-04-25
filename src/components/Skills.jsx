const Skills = () => {
  return (
    <section id="skills" className="section">
      <div className="wrap">
        <h2 className="heading reveal">Skills & Expertise</h2>
        
        <div className="skills-grid">
          {/* Category 1 */}
          <div className="glass-card skill-category cat-cyber reveal">
            <div className="skill-header">
              <span className="skill-icon">🛡️</span>
              <h3 className="skill-title">Cybersecurity</h3>
            </div>
            <div className="skill-list">
              {['Penetration Testing', 'Bug Bounty Hunting', 'Web & API Security', 'OSINT & Reconnaissance', 'Reverse Engineering', 'Smart Contract Auditing', 'Blockchain Security', 'Web3 Vulnerability Research', 'SQL Injection', 'XSS', 'CSRF', 'Authentication Bypass', 'Logic Flaws'].map(skill => (
                <span key={skill} className="skill-tag">{skill}</span>
              ))}
            </div>
          </div>

          {/* Category 2 */}
          <div className="glass-card skill-category cat-web3 reveal" style={{ animationDelay: '0.1s' }}>
            <div className="skill-header">
              <span className="skill-icon">⛓️</span>
              <h3 className="skill-title">Web3 & Blockchain</h3>
            </div>
            <div className="skill-list">
              {['Smart Contract Security', 'DeFi Protocol Auditing', 'Access Control Vulnerabilities', 'Economic Attack Vectors', 'Reentrancy Bugs', 'Flash Loan Attacks', 'On-chain Data Analysis', 'EVM Internals'].map(skill => (
                <span key={skill} className="skill-tag">{skill}</span>
              ))}
            </div>
          </div>

          {/* Category 3 */}
          <div className="glass-card skill-category cat-dev reveal" style={{ animationDelay: '0.2s' }}>
            <div className="skill-header">
              <span className="skill-icon">💻</span>
              <h3 className="skill-title">Development</h3>
            </div>
            <div className="skill-list">
              {['Python (Advanced)', 'JavaScript', 'Java', 'PHP', 'Bash', 'C++', 'React', 'Node.js', 'Flask', 'Full-Stack Web Development', 'REST API Development', 'Web Automation', 'Scraping', 'AI/ML Integration'].map(skill => (
                <span key={skill} className="skill-tag">{skill}</span>
              ))}
            </div>
          </div>

          {/* Category 4 */}
          <div className="glass-card skill-category cat-write reveal" style={{ animationDelay: '0.3s' }}>
            <div className="skill-header">
              <span className="skill-icon">✍️</span>
              <h3 className="skill-title">Writing</h3>
            </div>
            <div className="skill-list">
              {['Sci-Fi World-Building', 'Thriller Plotting', 'Character Development', 'Narrative Architecture', 'Non-Fiction Reflective Writing', 'Literary Fiction', 'Self-Publishing', 'ISBN Management'].map(skill => (
                <span key={skill} className="skill-tag">{skill}</span>
              ))}
            </div>
          </div>
        </div>

        <div className="platform-badges reveal" style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
          <a href="https://bughunters.google.com/profile/7e8eaec9-9b36-437c-bef6-32bc9552f5d3" target="_blank" rel="noopener noreferrer" className="skill-tag platform-btn" style={{ '--btn-color': 'var(--neon-green)' }}>Google VRP</a>
          <a href="https://hackerone.com/ashfi" target="_blank" rel="noopener noreferrer" className="skill-tag platform-btn" style={{ '--btn-color': 'var(--neon-cyan)' }}>HackerOne</a>
          <a href="https://hackenproof.com/hackers/ashfiexe" target="_blank" rel="noopener noreferrer" className="skill-tag platform-btn" style={{ '--btn-color': '#fff' }}>HackenProof</a>
          <a href="https://app.intigriti.com/researcher/profile/ashfiexe" target="_blank" rel="noopener noreferrer" className="skill-tag platform-btn" style={{ '--btn-color': 'var(--neon-purple)' }}>Intigriti</a>
          <a href="https://leetcode.com/salahin0ashfi" target="_blank" rel="noopener noreferrer" className="skill-tag platform-btn" style={{ '--btn-color': 'var(--accent-warm)' }}>LeetCode</a>
          <a href="https://github.com/AsHfIEXE" target="_blank" rel="noopener noreferrer" className="skill-tag platform-btn" style={{ '--btn-color': 'rgba(255,255,255,0.6)' }}>GitHub</a>
        </div>
      </div>
    </section>
  );
};

export default Skills;
