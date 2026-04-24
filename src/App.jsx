import { useState, useEffect } from 'react';
import CustomCursor from './components/CustomCursor';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import BugBounty from './components/BugBounty';
import Books from './components/Books';
import Projects from './components/Projects';
import DynamicStats from './components/DynamicStats';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

function App() {
  const [loading, setLoading] = useState(true);
  const [loadText, setLoadText] = useState("");
  const [showFloatingCTA, setShowFloatingCTA] = useState(false);

  useEffect(() => {
    // Scroll observer for reveal animations
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.15 });

    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach(el => observer.observe(el));

    // Scroll listener for CTA
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowFloatingCTA(true);
      } else {
        setShowFloatingCTA(false);
      }
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      revealElements.forEach(el => observer.unobserve(el));
      window.removeEventListener('scroll', handleScroll);
    };
  }, [loading]); // Re-run when loading finishes

  useEffect(() => {
    // Terminal boot sequence
    const sequence = [
      "> Initializing secure connection...",
      "> Loading profile: salehin_ashfi.exe",
      "> Decrypting assets... [████████████] 100%",
      "> ACCESS GRANTED. Welcome."
    ];
    
    let currentLine = 0;
    let currentChar = 0;
    let currentText = "";

    const typeWriter = () => {
      if (currentLine < sequence.length) {
        if (currentChar < sequence[currentLine].length) {
          currentText += sequence[currentLine].charAt(currentChar);
          setLoadText(currentText);
          currentChar++;
          setTimeout(typeWriter, 20); // typing speed
        } else {
          currentText += "\n";
          currentLine++;
          currentChar = 0;
          setTimeout(typeWriter, 400); // pause between lines
        }
      } else {
        setTimeout(() => setLoading(false), 500); // fade out
      }
    };

    setTimeout(typeWriter, 300);
  }, []);

  return (
    <>
      <div className={`terminal-loader ${!loading ? 'hidden' : ''}`}>
        <div className="terminal-window">
          <div className="terminal-header">
            <span className="dot red"></span>
            <span className="dot yellow"></span>
            <span className="dot green"></span>
          </div>
          <div className="terminal-body">
            <pre>
              {loadText}
              <span className="cursor-blink">█</span>
            </pre>
          </div>
        </div>
      </div>

      <CustomCursor />
      <div className="noise-overlay"></div>
      <div className="scanlines"></div>
      
      {!loading && (
        <>
          <Navbar />
          <main>
            <Hero />
            <About />
            <Skills />
            <BugBounty />
            <Books />
            <Projects />
            <DynamicStats />
            <Testimonials />
            <Contact />
          </main>
          <Footer />

          <a 
            href="https://www.fiverr.com/salehinashfi" 
            target="_blank" 
            rel="noopener noreferrer"
            className={`floating-cta btn btn-primary ${showFloatingCTA ? 'visible' : ''}`}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: '18px', height: '18px', marginRight: '6px' }}>
              <line x1="22" y1="2" x2="11" y2="13"></line>
              <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
            </svg>
            Hire Me
          </a>
        </>
      )}
    </>
  );
}

export default App;
