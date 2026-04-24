import { useEffect, useRef, useState } from 'react';

const Hero = () => {
  const canvasRef = useRef(null);
  const [glitchActive, setGlitchActive] = useState(false);
  const [typingText, setTypingText] = useState("");
  
  const roles = [
    "Cybersecurity Researcher",
    "Bug Bounty Hunter",  
    "Sci-Fi Author",
    "Ethical Hacker",
    "Full-Stack Developer",
    "Web3 Security Researcher"
  ];

  // Particle Canvas logic (Neural network effect as requested in prompt)
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;
    
    const particles = [];
    const numParticles = window.innerWidth < 768 ? 40 : 80;
    
    // Mouse tracking for particles
    let mouse = { x: null, y: null, radius: 100 };
    
    const handleMouseMove = (e) => {
      mouse.x = e.x;
      mouse.y = e.y;
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    class Particle {
      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;
        this.size = Math.random() * 1.5 + 0.5;
      }
      
      update() {
        this.x += this.vx;
        this.y += this.vy;
        
        // Bounce off edges
        if (this.x < 0 || this.x > width) this.vx = -this.vx;
        if (this.y < 0 || this.y > height) this.vy = -this.vy;
        
        // Mouse interaction (Repel effect as requested)
        if (mouse.x != null && mouse.y != null) {
          let dx = mouse.x - this.x;
          let dy = mouse.y - this.y;
          let distance = Math.sqrt(dx*dx + dy*dy);
          
          if (distance < mouse.radius) {
            const forceDirectionX = dx / distance;
            const forceDirectionY = dy / distance;
            const force = (mouse.radius - distance) / mouse.radius;
            
            this.x -= forceDirectionX * force * 2;
            this.y -= forceDirectionY * force * 2;
          }
        }
      }
      
      draw() {
        ctx.fillStyle = 'rgba(0, 255, 136, 0.6)';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }
    
    for (let i = 0; i < numParticles; i++) {
      particles.push(new Particle());
    }
    
    let animationFrameId;
    let isVisible = true;

    const observer = new IntersectionObserver(([entry]) => {
      isVisible = entry.isIntersecting;
      if (isVisible) {
        animate();
      }
    }, { threshold: 0 });
    observer.observe(canvas);

    const animate = () => {
      if (!isVisible) return; // Stop burning CPU when out of viewport

      ctx.clearRect(0, 0, width, height);
      
      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();
        
        for (let j = i; j < particles.length; j++) {
          let dx = particles[i].x - particles[j].x;
          let dy = particles[i].y - particles[j].y;
          let distance = Math.sqrt(dx*dx + dy*dy);
          
          // Draw lines between close particles
          if (distance < 120) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(0, 255, 136, ${0.15 - distance/120 * 0.15})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
      animationFrameId = requestAnimationFrame(animate);
    };
    
    animate();
    
    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
      observer.disconnect();
    };
  }, []);

  // Glitch effect loop
  useEffect(() => {
    const glitchInterval = setInterval(() => {
      setGlitchActive(true);
      setTimeout(() => setGlitchActive(false), 150);
    }, Math.random() * 2000 + 3000);
    return () => clearInterval(glitchInterval);
  }, []);

  // Typing effect loop
  useEffect(() => {
    let currentRoleIndex = 0;
    let currentCharIndex = 0;
    let isDeleting = false;
    let typingTimer;

    const type = () => {
      const currentRole = roles[currentRoleIndex];
      
      if (isDeleting) {
        setTypingText(currentRole.substring(0, currentCharIndex - 1));
        currentCharIndex--;
      } else {
        setTypingText(currentRole.substring(0, currentCharIndex + 1));
        currentCharIndex++;
      }

      let speed = isDeleting ? 30 : 60;

      if (!isDeleting && currentCharIndex === currentRole.length) {
        speed = 2000; // pause at end
        isDeleting = true;
      } else if (isDeleting && currentCharIndex === 0) {
        isDeleting = false;
        currentRoleIndex = (currentRoleIndex + 1) % roles.length;
        speed = 500; // pause before typing next
      }

      typingTimer = setTimeout(type, speed);
    };

    typingTimer = setTimeout(type, 500);
    return () => clearTimeout(typingTimer);
  }, []);

  return (
    <section id="hero" className="hero section">
      <canvas ref={canvasRef} className="particle-canvas"></canvas>
      
      <div className="wrap hero-content reveal active">
        <div className="hero-prompt">&gt; root@ashfi:~$ <span>whoami</span></div>
        
        <h1 className={`hero-title glitch ${glitchActive ? 'active' : ''}`}>
          SALEHIN ASHFI
        </h1>
        
        <div className="hero-subtitle">
          {typingText}<span className="typing-cursor"></span>
        </div>
        
        <p className="hero-tagline">
          "I break systems ethically, build tools the world hasn't asked for yet, 
          and write science fiction at 3am. All before breakfast."
        </p>
        
        <div className="hero-actions">
          <a href="#projects" className="btn btn-primary">Explore My Work ↓</a>
          <a href="#books" className="btn btn-ghost">Read My Books →</a>
        </div>
        
        <div className="hero-badges">
          <div className="hero-badge">🛡️ 120+ Vulnerability Reports</div>
          <div className="hero-badge">🏆 Google VRP #1577 Globally</div>
          <div className="hero-badge">📚 5+ Published Books</div>
          <div className="hero-badge">⚡ 3+ Years Experience</div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
