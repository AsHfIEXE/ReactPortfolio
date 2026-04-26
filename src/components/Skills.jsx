const Skills = () => {
  return (
    <section id="skills" className="section">
      <div className="wrap">
        <h2 className="heading reveal">Skills & Expertise</h2>
        
        <div className="skills-grid">
          {/* Category 1: Cybersecurity */}
          <div className="glass-card skill-category cat-cyber reveal">
            <div className="skill-header">
              <span className="skill-icon">🛡️</span>
              <h3 className="skill-title">Cybersecurity</h3>
            </div>
            <div className="skill-list">
              {[
                { name: 'Penetration Testing', percent: 95 },
                { name: 'Web App Security', percent: 92 },
                { name: 'Smart Contract Sec', percent: 88 },
                { name: 'OSINT & Recon', percent: 96 },
                { name: 'Reverse Engineering', percent: 82 },
                { name: 'CTF', percent: 90 }
              ].map(skill => (
                <div key={skill.name} className="skill-bar-wrap">
                  <div className="skill-bar-header">
                    <span>{skill.name}</span>
                  </div>
                  <div className="skill-bar-bg">
                    <div className="skill-bar-fill" style={{ '--percent': `${skill.percent}%` }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Category 2: Web3 & Blockchain */}
          <div className="glass-card skill-category cat-web3 reveal" style={{ animationDelay: '0.1s' }}>
            <div className="skill-header">
              <span className="skill-icon">⛓️</span>
              <h3 className="skill-title">Web3 & Blockchain</h3>
            </div>
            <div className="skill-list">
              {[
                { name: 'Smart Contract Audits', percent: 94 },
                { name: 'DeFi Protocol Sec', percent: 85 },
                { name: 'Access Control Bugs', percent: 90 },
                { name: 'Flash Loan Attacks', percent: 78 },
                { name: 'EVM Internals', percent: 82 }
              ].map(skill => (
                <div key={skill.name} className="skill-bar-wrap">
                  <div className="skill-bar-header">
                    <span>{skill.name}</span>
                  </div>
                  <div className="skill-bar-bg">
                    <div className="skill-bar-fill" style={{ '--percent': `${skill.percent}%` }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Category 3: Development */}
          <div className="glass-card skill-category cat-dev reveal" style={{ animationDelay: '0.2s' }}>
            <div className="skill-header">
              <span className="skill-icon">💻</span>
              <h3 className="skill-title">Development</h3>
            </div>
            <div className="skill-list">
              {[
                { name: 'Python', percent: 96 },
                { name: 'JavaScript', percent: 88 },
                { name: 'React/Next.js', percent: 85 },
                { name: 'Full Stack', percent: 80 },
                { name: 'Bash/Automation', percent: 92 },
                { name: 'PHP', percent: 80 },
                { name: 'Java', percent: 75 },
                { name: 'C++', percent: 70 },
                { name: 'Rust', percent: 65 }
              ].map(skill => (
                <div key={skill.name} className="skill-bar-wrap">
                  <div className="skill-bar-header">
                    <span>{skill.name}</span>
                  </div>
                  <div className="skill-bar-bg">
                    <div className="skill-bar-fill" style={{ '--percent': `${skill.percent}%` }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Category 4: Writing */}
          <div className="glass-card skill-category cat-write reveal" style={{ animationDelay: '0.3s' }}>
            <div className="skill-header">
              <span className="skill-icon">✍️</span>
              <h3 className="skill-title">Writing</h3>
            </div>
            <div className="skill-list">
              {[
                { name: 'Sci-Fi Thriller', percent: 95 },
                { name: 'World Building', percent: 92 },
                { name: 'Character Dev', percent: 88 },
                { name: 'Narrative Design', percent: 85 },
                { name: 'Non-Fiction', percent: 80 }
              ].map(skill => (
                <div key={skill.name} className="skill-bar-wrap">
                  <div className="skill-bar-header">
                    <span>{skill.name}</span>
                  </div>
                  <div className="skill-bar-bg">
                    <div className="skill-bar-fill" style={{ '--percent': `${skill.percent}%` }}></div>
                  </div>
                </div>
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
