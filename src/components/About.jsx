import { useEffect, useState, useRef } from 'react';

const AnimatedCounter = ({ end, duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const counterRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const [entry] = entries;
      if (entry.isIntersecting && !hasAnimated) {
        setHasAnimated(true);
        let startTimestamp = null;
        
        const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);
        
        const step = (timestamp) => {
          if (!startTimestamp) startTimestamp = timestamp;
          const progress = Math.min((timestamp - startTimestamp) / duration, 1);
          const currentCount = Math.floor(easeOutCubic(progress) * end);
          
          setCount(currentCount);
          
          if (progress < 1) {
            window.requestAnimationFrame(step);
          } else {
            setCount(end);
          }
        };
        
        window.requestAnimationFrame(step);
      }
    }, { threshold: 0.1 });

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => observer.disconnect();
  }, [end, duration, hasAnimated]);

  return <span ref={counterRef}>{count}</span>;
};

const About = () => {
  return (
    <section id="about" className="section">
      <div className="wrap">
        <h2 className="heading reveal">The Story</h2>
        
        <div className="story-container">
          <div className="terminal-block reveal">
            <div className="terminal-header">
              <div className="term-dot r"></div>
              <div className="term-dot y"></div>
              <div className="term-dot g"></div>
            </div>
            <div className="terminal-body">
              <div className="term-cmd">whoami</div>
              <div className="term-out">Salehin Ashfi</div>
              
              <div className="term-cmd">cat location.txt</div>
              <div className="term-out">Chandpur, Bangladesh 🇧🇩</div>
              
              <div className="term-cmd">cat background.txt</div>
              <div className="term-out">Self-taught from age 15</div>
              <div className="term-out">Chose the hardest path and never looked back</div>
              
              <div className="term-cmd">cat specializations.txt</div>
              <div className="term-out">Ethical Hacking & Penetration Testing</div>
              <div className="term-out">Bug Bounty Hunting (Google VRP, HackerOne, etc.)</div>
              <div className="term-out">Web3 & Blockchain Security</div>
              <div className="term-out">Smart Contract Auditing</div>
              <div className="term-out">Full-Stack Development</div>
              <div className="term-out">Sci-Fi & Literary Fiction Writing</div>
              
              <div className="term-cmd">cat philosophy.txt</div>
              <div className="term-out">"A self-taught writer, hacker, and relentless creator.</div>
              <div className="term-out"> I write books, break systems ethically, build tools,</div>
              <div className="term-out"> and turn sleepless nights into cyber innovations."</div>
            </div>
          </div>
          
          <div className="prose-section reveal" style={{ animationDelay: '0.2s' }}>
            <p>
              I started this journey at 15 — not because someone showed me a path, but because I was curious about how systems break. That curiosity didn't stay surface-level for long. It turned into late nights, constant experimentation, and a mindset that questions everything — how systems behave, where logic fails, and how small oversights evolve into critical vulnerabilities. Cybersecurity wasn't a career decision; it was an obsession that shaped the way I think.
            </p>
            <p>
              The beginning wasn't smooth. My early bug reports were ignored or closed as "won't fix." But each rejection forced me deeper — beyond symptoms, into root causes. Over time, persistence turned into precision, eventually earning me a place on the Google Bug Hunters leaderboard (#1577 globally). Since then, I've worked across web applications, APIs, and emerging technologies like blockchain protocols and smart contracts — continuously refining my approach to reconnaissance, vulnerability discovery, and responsible disclosure.
            </p>
            <p>
              But breaking systems is only part of the story. I also build — tools, workflows, and ideas. From developing Python-based automation systems to creating cybersecurity-focused tools and AI-driven applications, my focus is on designing systems that are not only functional, but resilient by design.
            </p>
            <p>
              And beyond systems, there's another layer that drives everything I do. I write — not as a side activity, but as a form of exploration. My work spans science fiction focused on time manipulation, digital consciousness, and the evolving boundary between human and machine. Five books published. Thousands of readers. All before turning 20.
            </p>
            <p>
              Alongside that, I write music. Music has always been a constant — something I return to every day. I listen almost continuously, not just for enjoyment, but because it sharpens my thinking. It allows me to slow down, reflect, and explore ideas more deeply. That introspective space shapes both my writing and how I approach complex systems.
            </p>
            <p className="story-closing">
              Cybersecurity teaches me how systems break. Development teaches me how to build them better. Writing and music help me understand the meaning behind both. I operate at the intersection of logic and introspection — where curiosity becomes discipline, failure becomes insight, and ideas evolve into systems. <em>And I'm still building.</em>
            </p>
          </div>
        </div>

        <div className="counters reveal">
          <div className="counter-item">
            <div className="counter-val"><AnimatedCounter end={120} />+</div>
            <div className="counter-label">Vulnerability Reports</div>
          </div>
          <div className="counter-item">
            <div className="counter-val"><AnimatedCounter end={5} />+</div>
            <div className="counter-label">Published Books</div>
          </div>
          <div className="counter-item">
            <div className="counter-val"><AnimatedCounter end={50} />+</div>
            <div className="counter-label">Security Audits</div>
          </div>
          <div className="counter-item">
            <div className="counter-val"><AnimatedCounter end={100} />+</div>
            <div className="counter-label">Projects</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
