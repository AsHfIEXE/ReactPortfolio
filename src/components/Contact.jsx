import { useState } from 'react';

const Contact = () => {
  const [formState, setFormState] = useState('idle'); // idle, submitting, success
  const [isSelectOpen, setIsSelectOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('');

  const services = [
    "Web Application Pentesting",
    "API Security Testing",
    "Web3 / Smart Contract Audit",
    "Source Code Review",
    "Red Teaming / Adversary Simulation",
    "Bug Bounty Collaboration",
    "Full-Stack Development",
    "Book / Writing Consultation",
    "Other"
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormState('submitting');

    // Extract form data
    const formData = new FormData(e.target);
    
    // Securely loaded from .env file so it is not exposed in GitHub source code
    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;
    if (!accessKey) {
      console.error("Missing VITE_WEB3FORMS_ACCESS_KEY in .env file");
    }
    formData.append("access_key", accessKey);
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setFormState('success');
      } else {
        console.error("Error submitting form", data);
        setFormState('idle');
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Network error:", error);
      setFormState('idle');
      alert("Network error. Please try again later.");
    }
  };

  return (
    <section id="contact" className="section">
      <div className="wrap">
        <h2 className="heading reveal">Let's Connect</h2>

        <div className="contact-container">
          <div className="contact-info reveal">
            <h3>Available for:</h3>
            <div className="contact-list">
              <div><span>✓</span> Penetration Testing & Security Audits</div>
              <div><span>✓</span> Bug Bounty Collaborations</div>
              <div><span>✓</span> Web3 / Smart Contract Auditing</div>
              <div><span>✓</span> Full-Stack Development Projects</div>
              <div><span>✓</span> Speaking / Writing Consultations</div>
            </div>

            <div style={{ marginBottom: '2rem', fontFamily: 'var(--font-ui)', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
              <strong>Email:</strong> <a href="mailto:salahin0ashfi@gmail.com" style={{ color: 'var(--neon-green)' }}>salahin0ashfi@gmail.com</a><br /><br />
              Response Time: ~1 hour average<br />
              Rate: $40/hour<br />
              Rating: ⭐ 5.0/5.0
            </div>

            <div className="social-grid">
              <a href="https://github.com/AsHfIEXE" className="social-link" title="GitHub" style={{ color: '#fff' }} target="_blank" rel="noopener noreferrer">
                <svg viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
              </a>
              <a href="https://bd.linkedin.com/in/salehin-ashfi" className="social-link" title="LinkedIn" style={{ color: '#0077b5' }} target="_blank" rel="noopener noreferrer">
                <svg viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
              </a>
              <a href="https://x.com/ItzAshfi" className="social-link" title="Twitter" style={{ color: '#1da1f2' }} target="_blank" rel="noopener noreferrer">
                <svg viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" /></svg>
              </a>
              <a href="https://hackerone.com/ashfiexe" className="social-link" title="HackerOne" style={{ color: '#fff' }} target="_blank" rel="noopener noreferrer">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M11.96 0C5.353 0 0 5.354 0 11.962s5.353 11.96 11.96 11.96 11.962-5.353 11.962-11.96S18.568 0 11.96 0zm4.815 16.745l-2.485-2.486-2.486 2.486-1.758-1.758 2.486-2.485-2.486-2.486 1.758-1.758 2.486 2.486 2.485-2.486 1.758 1.758-2.486 2.486 2.486 2.485-1.758 1.758zM8.32 15.688H5.834V8.235H8.32v7.453z" /></svg>
              </a>
              <a href="https://books2read.com/ap/n9QBAw/Salehin-Ashfi" className="social-link" title="Books2Read" style={{ color: '#a855f7' }} target="_blank" rel="noopener noreferrer">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M19 2H9c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h10c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2zM9 18V4h10l.002 14H9z" /><path d="M5 6v14c0 1.103.897 2 2 2h12v-2H7V6H5z" /><rect x="11" y="6" width="6" height="2" /><rect x="11" y="10" width="6" height="2" /></svg>
              </a>
            </div>
          </div>

          <div className="reveal" style={{ animationDelay: '0.2s' }}>
            {formState === 'success' ? (
              <div className="glass-card" style={{ padding: '3rem', textAlign: 'center', borderColor: 'var(--neon-green)' }}>
                <h3 style={{ fontFamily: 'var(--font-display)', color: 'var(--neon-green)', marginBottom: '1rem' }}>Message Sent!</h3>
                <p style={{ color: 'var(--text-secondary)' }}>I'll reply within the hour. 🛡️</p>
              </div>
            ) : (
              <form className="contact-form glass-card" style={{ padding: '2rem' }} onSubmit={handleSubmit}>
                <input type="text" name="name" className="form-input" placeholder="Your Name" required />
                <input type="email" name="email" className="form-input" placeholder="Your Email" required />
                
                <div className="custom-select-container" style={{ position: 'relative' }}>
                  <div 
                    className={`form-input custom-select-trigger ${isSelectOpen ? 'open' : ''}`}
                    onClick={() => setIsSelectOpen(!isSelectOpen)}
                    style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer' }}
                  >
                    <span style={{ color: selectedService ? '#fff' : 'rgba(255, 255, 255, 0.6)' }}>
                      {selectedService || 'Select Service Needed'}
                    </span>
                    <svg width="12" height="8" viewBox="0 0 12 8" fill="none" style={{ transform: isSelectOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s ease' }}>
                      <path d="M1 1.5L6 6.5L11 1.5" stroke="var(--neon-green)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  
                  <div className={`custom-select-dropdown ${isSelectOpen ? 'show' : ''}`}>
                    {services.map(service => (
                      <div 
                        key={service} 
                        className={`custom-select-option ${selectedService === service ? 'selected' : ''}`}
                        onClick={() => {
                          setSelectedService(service);
                          setIsSelectOpen(false);
                        }}
                      >
                        {service}
                      </div>
                    ))}
                  </div>
                </div>
                <input type="hidden" name="service" value={selectedService} required />

                <textarea name="message" className="form-textarea" placeholder="Tell me about your project..." required></textarea>
                <button type="submit" className={`btn btn-primary ${formState === 'submitting' ? 'glitch active' : ''}`} disabled={formState === 'submitting'}>
                  {formState === 'submitting' ? 'Sending...' : 'Send Message →'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
