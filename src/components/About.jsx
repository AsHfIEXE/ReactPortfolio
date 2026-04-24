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
              I started this journey at 15 — not because someone told me to, but because I was curious about how things break. Cybersecurity wasn't a career choice; it was an obsession that grew into expertise.
            </p>
            <p>
              From submitting my first bug report to earning my place on Google's Bug Hunters leaderboard (#1577 globally), every rejection, every 'won't fix', every sleepless night hunting for vulnerabilities across web apps, blockchain protocols, and smart contracts taught me something new.
            </p>
            <p>
              But hacking isn't everything I am. When I step away from terminals and vulnerability reports, I write science fiction — stories about time manipulation, digital consciousness, and the blurry line between human and machine. Five books published. Thousands of readers. All before I turned 20.
            </p>
            <p>
              I live at the intersection of breaking things and building them — and I wouldn't have it any other way.
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
