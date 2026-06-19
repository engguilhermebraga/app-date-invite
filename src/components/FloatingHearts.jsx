
import React, { useEffect, useState } from 'react';

const FloatingHearts = () => {
  const [hearts, setHearts] = useState([]);

  useEffect(() => {
    const generatedHearts = Array.from({ length: 22 }).map((_, index) => ({
      id: index,
      left: Math.random() * 100,
      animationDuration: 7 + Math.random() * 10,
      animationDelay: Math.random() * 6,
      size: 1 + Math.random() * 1.6,
      opacity: 0.16 + Math.random() * 0.22,
      rotate: Math.random() * 360,
    }));

    setHearts(generatedHearts);
  }, []);

  return (
    <div className="floating-hearts">
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className="floating-heart"
          style={{
            left: `${heart.left}%`,
            bottom: '-12%',
            fontSize: `${heart.size}rem`,
            opacity: heart.opacity,
            animationDuration: `${heart.animationDuration}s`,
            animationDelay: `${heart.animationDelay}s`,
            transform: `rotate(${heart.rotate}deg)`,
          }}
        >
          🖤
        </div>
      ))}
    </div>
  );
};

export default FloatingHearts;
