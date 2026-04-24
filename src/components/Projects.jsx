const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "SQLVulnInjector",
      badge: "PHP · Security · CTF",
      stars: 7,
      desc: "Interactive SQL injection lab with real SQLite execution. 6 attack scenarios, CTF flags, glassmorphic UI. Zero config — pure PHP. Built for learning the art of injection.",
      link: "https://github.com/AsHfIEXE",
      color: "var(--neon-green)"
    },
    {
      id: 2,
      title: "Dotify",
      badge: "Python · CLI · Media",
      stars: 6,
      desc: "The ultimate command-line tool for downloading anything from Spotify — songs, podcasts, videos, and lyrics — to build your permanent offline library.",
      link: "https://github.com/AsHfIEXE",
      color: "#1db954"
    },
    {
      id: 3,
      title: "CyberSage",
      badge: "Python · Flask · Security",
      stars: 2,
      desc: "A Flask web app that automates and streamlines web security assessments and penetration testing workflows — from recon to reporting.",
      link: "https://github.com/AsHfIEXE",
      color: "var(--neon-cyan)"
    }
  ];

  return (
    <section id="projects" className="section">
      <div className="wrap">
        <h2 className="heading reveal">Notable Projects</h2>
        
        <div className="projects-grid">
          {projects.map((proj, i) => (
            <div key={proj.id} className="glass-card project-card reveal" style={{ animationDelay: `${i * 0.1}s`, borderTop: `2px solid ${proj.color}` }}>
              <div className="project-header">
                <span className="project-badge" style={{ color: proj.color }}>{proj.badge}</span>
                <span className="project-stars">⭐ {proj.stars}</span>
              </div>
              <h3 className="project-title">{proj.title}</h3>
              <p className="project-desc">{proj.desc}</p>
              <a href={proj.link} target="_blank" rel="noopener noreferrer" className="btn btn-ghost" style={{ alignSelf: 'flex-start' }}>
                View Source →
              </a>
            </div>
          ))}
        </div>
        
        <div style={{ textAlign: 'center', marginTop: '3rem' }} className="reveal">
          <a href="https://github.com/AsHfIEXE" target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
            View All 37+ Repositories →
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
