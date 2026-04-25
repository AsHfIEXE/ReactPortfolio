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
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (window.scrollY > 300) {
            setShowFloatingCTA(true);
          } else {
            setShowFloatingCTA(false);
          }
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

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

    typeWriter();
  }, []);

let consoleLogged = false;

  // Easter Eggs
  useEffect(() => {
    // 1. Developer Console Message
    if (!consoleLogged) {
      console.log("%cWARNING: SYSTEM BREACH DETECTED", "color: #ff375f; font-size: 20px; font-weight: bold; font-family: monospace;");
      console.log("%cJust kidding! Welcome to the source code. \nIf you're reading this, you're either a fellow dev or hunting for bugs. \nFound a real vulnerability? Let's talk business via the Contact form. \n\n- Salehin Ashfi (Cybersecurity Researcher / Dev)", "color: #00ff88; font-size: 14px; font-family: monospace; line-height: 1.5;");
      consoleLogged = true;
    }

    // 2. Secret Keystroke Combo
    const handleKeyDown = (e) => {
      // Ignore modifier keys
      if (!e.key || e.key.length > 1) return;

      window.__cyberBuffer = (window.__cyberBuffer || "") + e.key.toLowerCase();

      if (window.__cyberBuffer.length > 40) {
        window.__cyberBuffer = window.__cyberBuffer.slice(-40);
      }

      const profanity = ['sex', 'porn', 'boobs', 'penis', 'ass', 'dick', 'fuck', 'cum', 'shit', 'motherfucker', 'bitch', 'bastard'];
      const religion = ['god', 'jesus', 'allah', 'buddha', 'hindu', 'hell', 'damn'];
      const hacker = ['bounty', 'hacker', 'admin', 'root', 'ashfi', 'ctf', 'hack'];

      const allWords = [...profanity, ...religion, ...hacker];
      const foundWord = allWords.find(w => window.__cyberBuffer.includes(w));

      if (foundWord) {
        let jokeMessage = "";
        
        if (profanity.includes(foundWord)) {
          jokeMessage = `🤨 Really? You're typing "${foundWord}" on a professional portfolio? My firewall is judging you.`;
        } else if (religion.includes(foundWord)) {
          jokeMessage = `🙏 Praying to "${foundWord}" won't help you bypass my security!`;
        } else if (['admin', 'root'].includes(foundWord)) {
          jokeMessage = `🛑 Nice try. But I didn't leave the "${foundWord}" backdoor open.`;
        } else if (foundWord === 'ashfi') {
          jokeMessage = `👋 Hey! That's me! I see you trying to OSINT the creator.`;
        } else {
          jokeMessage = `🕵️‍♂️ FLAG FOUND! CTF{h4ck_th3_pl4n3t_w1th_4shfi}\n\nYou successfully triggered the "${foundWord}" sequence. Sadly, there is no monetary bounty for this, but you have earned my absolute respect. 🛡️`;
        }

        alert(jokeMessage);
        window.__cyberBuffer = ''; // reset buffer after finding
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
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
