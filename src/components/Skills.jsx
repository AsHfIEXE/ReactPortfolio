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
          <div className="skill-tag" style={{ border: '1px solid var(--neon-green)', color: 'var(--text-primary)', padding: '0.6rem 1.2rem' }}>Google VRP</div>
          <div className="skill-tag" style={{ border: '1px solid var(--neon-cyan)', color: 'var(--text-primary)', padding: '0.6rem 1.2rem' }}>HackerOne</div>
          <div className="skill-tag" style={{ border: '1px solid var(--neon-purple)', color: 'var(--text-primary)', padding: '0.6rem 1.2rem' }}>Intigriti</div>
          <div className="skill-tag" style={{ border: '1px solid var(--accent-warm)', color: 'var(--text-primary)', padding: '0.6rem 1.2rem' }}>LeetCode</div>
          <div className="skill-tag" style={{ border: '1px solid rgba(255,255,255,0.2)', color: 'var(--text-primary)', padding: '0.6rem 1.2rem' }}>GitHub</div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
