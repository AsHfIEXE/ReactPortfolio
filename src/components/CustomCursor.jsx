import { useEffect } from 'react';

const CustomCursor = () => {
  useEffect(() => {
    const supportsCustomCursor = window.matchMedia('(pointer: fine)').matches
      && !window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!supportsCustomCursor) return undefined;

    const dot = document.querySelector('.cursor-dot');
    const ring = document.querySelector('.cursor-ring');
    
    // Position tracking variables
    let mouseX = 0;
    let mouseY = 0;
    let ringX = 0;
    let ringY = 0;
    let animationFrameId;
    
    const onMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      
      // Update dot immediately
      if (dot) {
        dot.style.left = `${mouseX}px`;
        dot.style.top = `${mouseY}px`;
      }
      document.body.classList.add('custom-cursor-ready');
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
      
      animationFrameId = requestAnimationFrame(render);
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
    
    // Start loop
    animationFrameId = requestAnimationFrame(render);
    
    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
      document.body.classList.remove('cursor-hover', 'custom-cursor-ready');
      cancelAnimationFrame(animationFrameId);
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
