import { useEffect } from 'react';

const CustomCursor = () => {
  useEffect(() => {
    const dot = document.querySelector('.cursor-dot');
    const ring = document.querySelector('.cursor-ring');
    
    // Position tracking variables
    let mouseX = 0;
    let mouseY = 0;
    let ringX = 0;
    let ringY = 0;
    
    const onMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      
      // Update dot immediately
      if (dot) {
        dot.style.left = `${mouseX}px`;
        dot.style.top = `${mouseY}px`;
      }
    };
    
    // Animation loop for the ring (lerp)
    const render = () => {
      // Lerp logic
      ringX += (mouseX - ringX) * 0.15;
      ringY += (mouseY - ringY) * 0.15;
      
      if (ring) {
        ring.style.left = `${ringX}px`;
        ring.style.top = `${ringY}px`;
      }
      
      requestAnimationFrame(render);
    };
    
    // Add hover states for interactive elements
    const handleMouseOver = (e) => {
      if (e.target.closest('a') || e.target.closest('button') || e.target.closest('input') || e.target.closest('textarea')) {
        document.body.classList.add('cursor-hover');
      }
    };
    
    const handleMouseOut = (e) => {
      if (e.target.closest('a') || e.target.closest('button') || e.target.closest('input') || e.target.closest('textarea')) {
        document.body.classList.remove('cursor-hover');
      }
    };

    window.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);
    
    // Mobile Touch Pulse Alternative
    const handleTouchStart = (e) => {
      const touch = e.touches[0];
      const pulse = document.createElement('div');
      pulse.className = 'touch-pulse';
      pulse.style.left = `${touch.clientX}px`;
      pulse.style.top = `${touch.clientY}px`;
      
      document.body.appendChild(pulse);
      
      setTimeout(() => {
        pulse.remove();
      }, 600);
    };
    
    window.addEventListener('touchstart', handleTouchStart, { passive: true });

    // Start loop
    requestAnimationFrame(render);
    
    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
      window.removeEventListener('touchstart', handleTouchStart);
    };
  }, []);

  return (
    <>
      <div className="cursor-dot"></div>
      <div className="cursor-ring"></div>
    </>
  );
};

export default CustomCursor;
