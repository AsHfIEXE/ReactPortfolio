import React from 'react';
import { ShieldAlert, Bug, TerminalSquare, Search } from 'lucide-react';

const Security = () => {
  const tools = [
    {
      name: "CyberSage-2.0",
      description: "Advanced Security Scanning / Vulnerability Intelligence Platform with real-time dashboard and multi-phase scanning engine.",
      icon: <Search size={24} color="var(--accent-cyan)" />
    },
    {
      name: "SQLVulnInjector",
      description: "Interactive SQL injection lab with real SQLite execution and multiple attack scenarios for educational purposes.",
      icon: <TerminalSquare size={24} color="var(--accent-purple)" />
    }
  ];

  return (
    <section id="security" className="scroll-animate">
      <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', textAlign: 'center' }}>
        Bug Bounty & <span className="text-gradient">Security Research</span>
      </h2>
      <p style={{ textAlign: 'center', color: 'var(--text-secondary)', maxWidth: '800px', margin: '0 auto 4rem', fontSize: '1.1rem' }}>
        Security researcher with confirmed acknowledgments on HackerOne (SKALE Network, reputation 22) and Huntr (x/imagegen unbounded memory allocation).
        Author of public PoC for Joblib deserialization RCE in ML models, with responsible disclosure through a bug bounty program.
        Creator of open-source security tools including CyberSage-2.0 and SQLVulnInjector. Successfully identified vulnerabilities in Google VRP, Meta, Microsoft Bug Bounty, Web3 platforms, and Smart Contracts.
      </p>

      <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
        {tools.map((tool, idx) => (
          <div key={idx} className="glass glow-card" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div style={{ background: 'rgba(255,255,255,0.03)', padding: '15px', borderRadius: '12px', width: 'fit-content' }}>
              {tool.icon}
            </div>
            <h3 style={{ fontSize: '1.3rem', color: '#fff' }}>{tool.name}</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', flexGrow: 1 }}>{tool.description}</p>
          </div>
        ))}
      </div>

      <div style={{ marginTop: '3rem', textAlign: 'center' }}>
        <div className="glass" style={{ display: 'inline-flex', alignItems: 'center', gap: '15px', padding: '15px 30px' }}>
          <Bug size={24} color="var(--accent-purple)" />
          <span style={{ fontWeight: 600 }}>50+ Security Audits Completed</span>
        </div>
      </div>
    </section>
  );
};

export default Security;
