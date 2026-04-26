const BugBounty = () => {
  return (
    <section className="section">
      <div className="wrap">
        <div className="glass-card bounty-card reveal">
          <div className="bounty-content">
            <h2 className="bounty-title glitch">GOOGLE VRP ACCEPTED</h2>
            
            <div className="bounty-stats">
              <strong>4th Accepted Vulnerability</strong> by Google's Vulnerability Reward Program<br/>
              <strong>Global Rank:</strong> #1577 on Google Bug Hunters Leaderboard<br/>
              <strong>120+ Reports Submitted</strong> across Google VRP, HackerOne, Intigriti, HackenProof<br/>
              <strong>Successful findings in:</strong> Web Applications · Blockchain Protocols · Smart Contracts · Web3 Assets
            </div>
            
            <div className="bounty-quote">
              "Persistence matters in security research. Every report — accepted, rejected, 
              or marked 'Won't Fix' — was part of the learning process."<br/>
              <span style={{color: 'var(--neon-green)', marginTop: '8px', display: 'block'}}>— Salehin Ashfi</span>
            </div>
            
            <a href="https://bughunters.google.com/profile/7e8eaec9-9b36-437c-bef6-32bc9552f5d3" 
               target="_blank" 
               rel="noopener noreferrer" 
               className="btn btn-ghost" 
               style={{ marginTop: '1.5rem', display: 'inline-block' }}>
              View Google VRP Profile →
            </a>
          </div>
          
          <div className="bounty-radar">
            <svg viewBox="-20 -5 140 110" className="w-full h-full" overflow="visible">
              {/* Radar background grid */}
              <polygon points="50,5 90,27 90,73 50,95 10,73 10,27" fill="rgba(0,255,136,0.05)" stroke="rgba(0,255,136,0.2)" strokeWidth="0.5"/>
              <polygon points="50,20 76.5,35 76.5,65 50,80 23.5,65 23.5,35" fill="none" stroke="rgba(0,255,136,0.2)" strokeWidth="0.5"/>
              <polygon points="50,35 63,42.5 63,57.5 50,65 37,57.5 37,42.5" fill="none" stroke="rgba(0,255,136,0.2)" strokeWidth="0.5"/>
              
              {/* Axes */}
              <line x1="50" y1="50" x2="50" y2="5" stroke="rgba(0,255,136,0.2)" strokeWidth="0.5"/>
              <line x1="50" y1="50" x2="90" y2="27" stroke="rgba(0,255,136,0.2)" strokeWidth="0.5"/>
              <line x1="50" y1="50" x2="90" y2="73" stroke="rgba(0,255,136,0.2)" strokeWidth="0.5"/>
              <line x1="50" y1="50" x2="50" y2="95" stroke="rgba(0,255,136,0.2)" strokeWidth="0.5"/>
              <line x1="50" y1="50" x2="10" y2="73" stroke="rgba(0,255,136,0.2)" strokeWidth="0.5"/>
              <line x1="50" y1="50" x2="10" y2="27" stroke="rgba(0,255,136,0.2)" strokeWidth="0.5"/>
              
              {/* Data Polygon */}
              <polygon 
                points="50,15 85,32 75,65 50,85 20,70 15,35" 
                fill="rgba(0,255,136,0.2)" 
                stroke="var(--neon-green)" 
                strokeWidth="1.5"
              >
                <animate attributeName="points" 
                  values="50,15 85,32 75,65 50,85 20,70 15,35; 50,25 75,25 80,60 50,75 25,65 20,40; 50,15 85,32 75,65 50,85 20,70 15,35" 
                  dur="10s" 
                  repeatCount="indefinite"
                />
              </polygon>

              {/* Labels */}
              <text x="50" y="3" fill="var(--text-secondary)" fontSize="3" textAnchor="middle">Web Sec</text>
              <text x="92" y="27" fill="var(--text-secondary)" fontSize="3">API Sec</text>
              <text x="92" y="75" fill="var(--text-secondary)" fontSize="3">Blockchain</text>
              <text x="50" y="99" fill="var(--text-secondary)" fontSize="3" textAnchor="middle">Smart Contracts</text>
              <text x="8" y="75" fill="var(--text-secondary)" fontSize="3" textAnchor="end">Reverse Eng</text>
              <text x="8" y="27" fill="var(--text-secondary)" fontSize="3" textAnchor="end">OSINT</text>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BugBounty;
