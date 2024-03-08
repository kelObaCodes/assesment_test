// AnimationOnScroll.tsx
import React, { useEffect, useRef, useState, ReactNode } from 'react';

interface AnimationOnScrollProps {
  setIsInView: React.Dispatch<React.SetStateAction<boolean>>;
  children: ReactNode;
}

const AnimationOnScroll: React.FC<AnimationOnScrollProps> = ({ setIsInView, children }) => {
  const [isIntersecting, setIsIntersecting] = useState<boolean>(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setIsIntersecting(entry.isIntersecting);
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [setIsInView]);

  return <div ref={ref}>{children}</div>;
};

export default AnimationOnScroll;
