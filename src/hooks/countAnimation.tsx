import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

interface CounterProps {
  count: number;
}

const Counter: React.FC<CounterProps> = ({ count }) => {
  const [displayCount, setDisplayCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (displayCount < count) {
        setDisplayCount(displayCount + 1);
      } else {
        clearInterval(interval);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [count, displayCount]);

  return (
    <>
      {displayCount}
    </>
  );
};


export default Counter;
