import { useEffect, useRef, useState } from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 0,
      quote: "Great working with Ashfi, he was very quick, very polite and went above and beyond. One of my best Fiverr experiences, will certainly use again.",
      author: "Trever Sean",
      role: "Client"
    },
    {
      id: 1,
      quote: "As a novice in coding, he gave me everything that I needed to know to move forward with my project.",
      author: "Thressa Smith",
      role: "Client"
    },
    {
      id: 2,
      quote: "Exceptional person to work with!",
      author: "Brandon Clark",
      role: "Client"
    },
    {
      id: 3,
      quote: "Project went very well. Not only was my work completed, but I was also educated on how to continue with my project on my own going forward.",
      author: "Jesica Brown",
      role: "Client"
    },
    {
      id: 4,
      quote: "Salehin Ashfi weaves intricate sci-fi narratives that challenge reality, blending deep emotions, rich world-building, and thought-provoking themes into unforgettable stories.",
      author: "Ankita Khandekar",
      role: "Reader & Reviewer"
    },
    {
      id: 5,
      quote: "Salehin is a cybersecurity genius! Highly recommend!",
      author: "Vasker",
      role: "Security Professional"
    },
    {
      id: 6,
      quote: "Innovative and skilled developer with a keen eye for security.",
      author: "Lisa Michel",
      role: "Tech Lead"
    },
    {
      id: 7,
      quote: "Both of these amazing books are truly MESMERIZING!!! It took me to another universe. Such a nice writer at a young age!!!",
      author: "Frank Danial",
      role: "Avid Reader"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const trackRef = useRef(null);

  useEffect(() => {
    if (isHovered) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    
    return () => clearInterval(interval);
  }, [isHovered, testimonials.length]);

  return (
    <section className="section">
      <div className="wrap">
        <h2 className="heading reveal">What People Say</h2>
        
        <div 
          className="testimonials reveal"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div 
            className="test-track" 
            ref={trackRef}
            style={{ 
              transform: `translateX(-${currentIndex * 100}%)`,
              width: '100%',
              display: 'flex',
              gap: '0' // removed gap to make translate -100% work perfectly
            }}
          >
            {testimonials.map((t) => (
              <div key={t.id} style={{ flex: '0 0 100%', padding: '0 1rem', display: 'flex', justifyContent: 'center' }}>
                <div className="test-card" style={{ width: '100%', maxWidth: '800px', minWidth: '0' }}>
                  <p className="test-quote">"{t.quote}"</p>
                  <div className="test-author-block">
                    <div className="test-author">{t.author}</div>
                    <div className="test-role">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', marginTop: '2rem' }}>
            {testimonials.map((_, i) => (
              <button 
                key={i}
                onClick={() => setCurrentIndex(i)}
                style={{ 
                  width: '10px', height: '10px', borderRadius: '50%', 
                  background: i === currentIndex ? 'var(--neon-green)' : 'rgba(255,255,255,0.2)',
                  border: 'none', cursor: 'none'
                }}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
