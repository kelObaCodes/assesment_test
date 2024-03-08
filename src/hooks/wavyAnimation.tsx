import React, { useEffect, useRef } from 'react';

const Wavy: React.FC<{ text: string, className?: string }> = ({ text, className }) => {
  const containerRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const delay = 200;
    const container = containerRef.current;

    if (container) {
      container.innerHTML = text
        .split('')
        .map((letter, index) => `<span key=${index}>${letter}</span>`)
        .join('');

      Array.from(container.children).forEach((span, index) => {
        setTimeout(() => {
          (span as HTMLElement).classList.add('wavy');
        }, index * 60 + delay);
      });
    }
  }, [text]);

  return (
    <span 
    className={className}
    ref={containerRef} />
  );
};

export default Wavy;
