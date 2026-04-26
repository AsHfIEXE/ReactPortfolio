const Skills = () => {
  return (
    <section id="skills" className="section">
      <div className="wrap">
        <h2 className="heading reveal">Skills & Expertise</h2>
        
        <div className="skills-grid">
          {/* Category 1: Cybersecurity & Security Engineering */}
          <div className="glass-card skill-category cat-cyber reveal">
            <div className="skill-header">
              <span className="skill-icon">
                <svg width="40" height="40" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <filter id="glow-green">
                      <feGaussianBlur stdDeviation="1.5" result="blur"></feGaussianBlur>
                      <feMerge><feMergeNode in="blur"></feMergeNode><feMergeNode in="SourceGraphic"></feMergeNode></feMerge>
                    </filter>
                  </defs>
                  <path d="M36 6 L62 17 L62 38 Q62 56 36 66 Q10 56 10 38 L10 17 Z" fill="none" stroke="#00e5a0" strokeWidth="1.5" strokeLinejoin="round" opacity="0.25"></path>
                  <path d="M36 10 L57 19.5 L57 38 Q57 52 36 61 Q15 52 15 38 L15 19.5 Z" fill="rgba(0,229,160,0.05)" stroke="#00e5a0" strokeWidth="1" strokeLinejoin="round" opacity="0.5"></path>
                  <rect x="29" y="33" width="14" height="11" rx="2" fill="none" stroke="#00e5a0" strokeWidth="1.2" filter="url(#glow-green)"></rect>
                  <path d="M31 33 L31 29 Q31 25 36 25 Q41 25 41 29 L41 33" fill="none" stroke="#00e5a0" strokeWidth="1.2" strokeLinecap="round"></path>
                  <circle cx="36" cy="38.5" r="1.5" fill="#00e5a0" opacity="0.8"></circle>
                  <line x1="10" y1="26" x2="4" y2="26" stroke="#00e5a0" strokeWidth="0.8" opacity="0.4"></line>
                  <circle cx="3" cy="26" r="1.2" fill="#00e5a0" opacity="0.6"></circle>
                  <line x1="10" y1="34" x2="4" y2="34" stroke="#00e5a0" strokeWidth="0.8" opacity="0.3"></line>
                  <line x1="4" y1="34" x2="4" y2="38" stroke="#00e5a0" strokeWidth="0.8" opacity="0.3"></line>
                  <circle cx="4" cy="39" r="1" fill="#00e5a0" opacity="0.4"></circle>
                  <line x1="62" y1="26" x2="68" y2="26" stroke="#00e5a0" strokeWidth="0.8" opacity="0.4"></line>
                  <circle cx="69" cy="26" r="1.2" fill="#00e5a0" opacity="0.6"></circle>
                  <line x1="62" y1="34" x2="68" y2="34" stroke="#00e5a0" strokeWidth="0.8" opacity="0.3"></line>
                  <line x1="68" y1="34" x2="68" y2="38" stroke="#00e5a0" strokeWidth="0.8" opacity="0.3"></line>
                  <circle cx="68" cy="39" r="1" fill="#00e5a0" opacity="0.4"></circle>
                  <line x1="19" y1="38" x2="53" y2="38" stroke="#00e5a0" strokeWidth="0.5" strokeDasharray="2 3" opacity="0.35"></line>
                  <path d="M19 16 L14 16 L14 21" fill="none" stroke="#00e5a0" strokeWidth="0.8" strokeLinecap="round" opacity="0.5"></path>
                  <path d="M53 16 L58 16 L58 21" fill="none" stroke="#00e5a0" strokeWidth="0.8" strokeLinecap="round" opacity="0.5"></path>
                </svg>
              </span>
              <h3 className="skill-title">Cybersecurity & Security Engineering</h3>
            </div>
            <div className="skill-list">
              {[
                { name: 'Web App Security Testing (OWASP)', percent: 93 },
                { name: 'Vulnerability Discovery & Analysis', percent: 91 },
                { name: 'Recon & Attack Surface Mapping', percent: 96 },
                { name: 'API Security Testing', percent: 88 },
                { name: 'Security Reporting & Risk Assessment', percent: 85 },
                { name: 'Automation for Security Scanning', percent: 90 },
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
              <span className="skill-icon">
                <svg width="40" height="40" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <filter id="glow-purple">
                      <feGaussianBlur stdDeviation="1.5" result="blur"></feGaussianBlur>
                      <feMerge><feMergeNode in="blur"></feMergeNode><feMergeNode in="SourceGraphic"></feMergeNode></feMerge>
                    </filter>
                  </defs>
                  <polygon points="36,20 47,26.5 47,39.5 36,46 25,39.5 25,26.5" fill="rgba(185,128,255,0.08)" stroke="#b980ff" strokeWidth="1.4" filter="url(#glow-purple)"></polygon>
                  <polygon points="36,27 40.5,29.6 40.5,34.9 36,37.5 31.5,34.9 31.5,29.6" fill="rgba(185,128,255,0.2)" stroke="#b980ff" strokeWidth="0.8" opacity="0.7"></polygon>
                  <circle cx="36" cy="33" r="2.5" fill="#b980ff" opacity="0.9"></circle>
                  <line x1="36" y1="20" x2="36" y2="10" stroke="#b980ff" strokeWidth="1" opacity="0.5"></line>
                  <polygon points="36,4 40,7 40,13 36,16 32,13 32,7" fill="rgba(185,128,255,0.12)" stroke="#b980ff" strokeWidth="0.9" opacity="0.7"></polygon>
                  <line x1="47" y1="39.5" x2="55" y2="44" stroke="#b980ff" strokeWidth="1" opacity="0.5"></line>
                  <polygon points="60,44 64,47 64,53 60,56 56,53 56,47" fill="rgba(185,128,255,0.12)" stroke="#b980ff" strokeWidth="0.9" opacity="0.7"></polygon>
                  <line x1="25" y1="39.5" x2="17" y2="44" stroke="#b980ff" strokeWidth="1" opacity="0.5"></line>
                  <polygon points="12,44 16,47 16,53 12,56 8,53 8,47" fill="rgba(185,128,255,0.12)" stroke="#b980ff" strokeWidth="0.9" opacity="0.7"></polygon>
                  <polygon points="36,15 52,24 52,42 36,51 20,42 20,24" fill="none" stroke="#b980ff" strokeWidth="0.5" strokeDasharray="3 4" opacity="0.2"></polygon>
                  <circle cx="36" cy="10" r="1.5" fill="#b980ff" opacity="0.6"></circle>
                  <circle cx="55" cy="44" r="1.5" fill="#b980ff" opacity="0.6"></circle>
                  <circle cx="17" cy="44" r="1.5" fill="#b980ff" opacity="0.6"></circle>
                </svg>
              </span>
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
              <span className="skill-icon">
                <svg width="40" height="40" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <filter id="glow-amber">
                      <feGaussianBlur stdDeviation="1.5" result="blur"></feGaussianBlur>
                      <feMerge><feMergeNode in="blur"></feMergeNode><feMergeNode in="SourceGraphic"></feMergeNode></feMerge>
                    </filter>
                  </defs>
                  <rect x="8" y="12" width="56" height="48" rx="6" fill="rgba(255,179,71,0.04)" stroke="#ffb347" strokeWidth="1.2" opacity="0.6"></rect>
                  <line x1="8" y1="24" x2="64" y2="24" stroke="#ffb347" strokeWidth="0.8" opacity="0.3"></line>
                  <circle cx="16" cy="18" r="2" fill="#ffb347" opacity="0.5"></circle>
                  <circle cx="23" cy="18" r="2" fill="#ffb347" opacity="0.3"></circle>
                  <circle cx="30" cy="18" r="2" fill="#ffb347" opacity="0.2"></circle>
                  <path d="M20 36 L14 40 L20 44" stroke="#ffb347" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" filter="url(#glow-amber)"></path>
                  <path d="M52 36 L58 40 L52 44" stroke="#ffb347" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" filter="url(#glow-amber)"></path>
                  <line x1="40" y1="33" x2="32" y2="47" stroke="#ffb347" strokeWidth="1.5" strokeLinecap="round" opacity="0.8"></line>
                  <line x1="14" y1="52" x2="26" y2="52" stroke="#ffb347" strokeWidth="1.2" strokeLinecap="round" opacity="0.35"></line>
                  <rect x="27" y="49.5" width="4" height="5" rx="0.5" fill="#ffb347" opacity="0.7"></rect>
                  <circle cx="57" cy="18" r="0.8" fill="#ffb347" opacity="0.4"></circle>
                </svg>
              </span>
              <h3 className="skill-title">Development</h3>
            </div>
            <div className="skill-list">
              {[
                { name: 'Backend Dev (Python, Flask)', percent: 92 },
                { name: 'REST API Design & Integration', percent: 88 },
                { name: 'Automation & Scripting', percent: 94 },
                { name: 'System Design & Architecture', percent: 82 },
                { name: 'Firebase & Real-time Systems', percent: 79 },
                { name: 'CLI Tool Development', percent: 90 },
                { name: 'AI/ML Integration', percent: 76 },
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
              <span className="skill-icon">
                <svg width="40" height="40" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <filter id="glow-pink">
                      <feGaussianBlur stdDeviation="1.5" result="blur"></feGaussianBlur>
                      <feMerge><feMergeNode in="blur"></feMergeNode><feMergeNode in="SourceGraphic"></feMergeNode></feMerge>
                    </filter>
                  </defs>
                  <path d="M8 52 L8 22 Q8 18 12 18 Q24 18 36 24 Q48 18 60 18 Q64 18 64 22 L64 52 Q60 52 48 48 Q42 46 36 46 Q30 46 24 48 Q12 52 8 52 Z" fill="rgba(255,107,157,0.05)" stroke="#ff6b9d" strokeWidth="1.2" strokeLinejoin="round" opacity="0.6"></path>
                  <line x1="36" y1="24" x2="36" y2="46" stroke="#ff6b9d" strokeWidth="1" opacity="0.4"></line>
                  <line x1="14" y1="30" x2="32" y2="28" stroke="#ff6b9d" strokeWidth="0.9" strokeLinecap="round" opacity="0.45"></line>
                  <line x1="14" y1="35" x2="32" y2="33" stroke="#ff6b9d" strokeWidth="0.9" strokeLinecap="round" opacity="0.35"></line>
                  <line x1="14" y1="40" x2="28" y2="38.5" stroke="#ff6b9d" strokeWidth="0.9" strokeLinecap="round" opacity="0.25"></line>
                  <line x1="58" y1="30" x2="40" y2="28" stroke="#ff6b9d" strokeWidth="0.9" strokeLinecap="round" opacity="0.45"></line>
                  <line x1="58" y1="35" x2="40" y2="33" stroke="#ff6b9d" strokeWidth="0.9" strokeLinecap="round" opacity="0.35"></line>
                  <line x1="58" y1="40" x2="44" y2="38.5" stroke="#ff6b9d" strokeWidth="0.9" strokeLinecap="round" opacity="0.25"></line>
                  <path d="M50 8 L58 16 L52 22 L38 20 Z" fill="rgba(255,107,157,0.15)" stroke="#ff6b9d" strokeWidth="1.2" strokeLinejoin="round" filter="url(#glow-pink)"></path>
                  <path d="M50 8 L46 4 L40 10 L44 14 Z" fill="rgba(255,107,157,0.25)" stroke="#ff6b9d" strokeWidth="1" strokeLinejoin="round"></path>
                  <line x1="52" y1="22" x2="48" y2="26" stroke="#ff6b9d" strokeWidth="1.5" strokeLinecap="round" filter="url(#glow-pink)"></line>
                  <circle cx="47" cy="27.5" r="1.5" fill="#ff6b9d" opacity="0.85"></circle>
                  <path d="M47 29 Q46.5 32 47 34" stroke="#ff6b9d" strokeWidth="0.8" strokeLinecap="round" opacity="0.4"></path>
                </svg>
              </span>
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

          {/* Category 5: Analytical & Problem-Solving — spans full width */}
          <div className="glass-card skill-category cat-analytical reveal skill-analytical-full" style={{ animationDelay: '0.4s' }}>
            <div className="skill-header">
              <span className="skill-icon">
                {/* Brain / neural network icon — cyan theme */}
                <svg width="40" height="40" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <filter id="glow-cyan">
                      <feGaussianBlur stdDeviation="1.5" result="blur"></feGaussianBlur>
                      <feMerge><feMergeNode in="blur"></feMergeNode><feMergeNode in="SourceGraphic"></feMergeNode></feMerge>
                    </filter>
                  </defs>
                  {/* Outer brain outline (simplified left + right hemispheres) */}
                  <path d="M36 62 Q20 60 14 50 Q6 40 10 28 Q14 16 24 13 Q30 11 36 14" fill="none" stroke="#00c8ff" strokeWidth="1.3" strokeLinecap="round" opacity="0.6"></path>
                  <path d="M36 62 Q52 60 58 50 Q66 40 62 28 Q58 16 48 13 Q42 11 36 14" fill="none" stroke="#00c8ff" strokeWidth="1.3" strokeLinecap="round" opacity="0.6"></path>
                  {/* Spine / center divider */}
                  <line x1="36" y1="14" x2="36" y2="62" stroke="#00c8ff" strokeWidth="0.8" strokeDasharray="2 3" opacity="0.3"></line>
                  {/* Neural node connections */}
                  <circle cx="22" cy="28" r="2.5" fill="#00c8ff" opacity="0.8" filter="url(#glow-cyan)"></circle>
                  <circle cx="18" cy="42" r="2" fill="#00c8ff" opacity="0.6"></circle>
                  <circle cx="30" cy="22" r="2" fill="#00c8ff" opacity="0.7"></circle>
                  <circle cx="36" cy="36" r="3" fill="#00c8ff" opacity="0.9" filter="url(#glow-cyan)"></circle>
                  <circle cx="42" cy="22" r="2" fill="#00c8ff" opacity="0.7"></circle>
                  <circle cx="50" cy="28" r="2.5" fill="#00c8ff" opacity="0.8" filter="url(#glow-cyan)"></circle>
                  <circle cx="54" cy="42" r="2" fill="#00c8ff" opacity="0.6"></circle>
                  <circle cx="28" cy="50" r="1.8" fill="#00c8ff" opacity="0.5"></circle>
                  <circle cx="44" cy="50" r="1.8" fill="#00c8ff" opacity="0.5"></circle>
                  {/* Synaptic connections */}
                  <line x1="22" y1="28" x2="30" y2="22" stroke="#00c8ff" strokeWidth="0.8" opacity="0.4"></line>
                  <line x1="30" y1="22" x2="36" y2="36" stroke="#00c8ff" strokeWidth="0.8" opacity="0.4"></line>
                  <line x1="22" y1="28" x2="36" y2="36" stroke="#00c8ff" strokeWidth="0.8" opacity="0.3"></line>
                  <line x1="22" y1="28" x2="18" y2="42" stroke="#00c8ff" strokeWidth="0.8" opacity="0.35"></line>
                  <line x1="18" y1="42" x2="28" y2="50" stroke="#00c8ff" strokeWidth="0.8" opacity="0.3"></line>
                  <line x1="42" y1="22" x2="50" y2="28" stroke="#00c8ff" strokeWidth="0.8" opacity="0.4"></line>
                  <line x1="50" y1="28" x2="36" y2="36" stroke="#00c8ff" strokeWidth="0.8" opacity="0.4"></line>
                  <line x1="50" y1="28" x2="54" y2="42" stroke="#00c8ff" strokeWidth="0.8" opacity="0.35"></line>
                  <line x1="54" y1="42" x2="44" y2="50" stroke="#00c8ff" strokeWidth="0.8" opacity="0.3"></line>
                  <line x1="28" y1="50" x2="36" y2="36" stroke="#00c8ff" strokeWidth="0.8" opacity="0.3"></line>
                  <line x1="44" y1="50" x2="36" y2="36" stroke="#00c8ff" strokeWidth="0.8" opacity="0.3"></line>
                </svg>
              </span>
              <h3 className="skill-title">Analytical & Problem-Solving</h3>
            </div>
            <div className="skill-list skill-list-horizontal">
              {[
                { name: 'System-Level Thinking & Decomposition', percent: 93 },
                { name: 'Debugging Complex Systems', percent: 90 },
                { name: 'Performance & Logic Optimization', percent: 87 },
                { name: 'Reverse Engineering (Basic–Intermediate)', percent: 82 },
                { name: 'Research-Driven Development', percent: 91 },
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
