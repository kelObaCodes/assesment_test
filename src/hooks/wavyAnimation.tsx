import React, { useEffect } from 'react';

const Wavy: React.FC<{ text: string }> = ({ text }) => {
  useEffect(() => {
    const delay = 200;
    const h1 = document.getElementById('animated');

    if (h1) {
      h1.innerHTML = text
        .split('')
        .map(letter => `<span>${letter}</span>`)
        .join('');

      Array.from(h1.children).forEach((span, index) => {
        setTimeout(() => {
          (span as HTMLElement).classList.add('wavy');
        }, index * 60 + delay);
      });
    }
  }, [text]);

  return (
    <div id="animated">
      {text.split('').map((letter, index) => (
        <span key={index}>{letter}</span>
      ))}
    </div>
  );
};

export default Wavy;
