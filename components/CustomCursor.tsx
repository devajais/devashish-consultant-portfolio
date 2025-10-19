import React, { useEffect, useRef } from 'react';

const CustomCursor: React.FC = () => {
  const dotRef = useRef<HTMLDivElement>(null);
  const outlineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      if (dotRef.current) {
        dotRef.current.style.left = `${clientX}px`;
        dotRef.current.style.top = `${clientY}px`;
      }
      if (outlineRef.current) {
        outlineRef.current.animate({
          left: `${clientX}px`,
          top: `${clientY}px`,
        }, { duration: 500, fill: 'forwards' });
      }
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('a, button, [data-cursor-hover]')) {
        outlineRef.current?.classList.add('hovered');
      }
    };
    
    const handleMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
       if (target.closest('a, button, [data-cursor-hover]')) {
        outlineRef.current?.classList.remove('hovered');
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
    };
  }, []);

  return (
    <div className="custom-cursor">
      <div ref={dotRef} className="cursor-dot"></div>
      <div ref={outlineRef} className="cursor-outline"></div>
    </div>
  );
};

export default CustomCursor;
