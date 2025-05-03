import React, { useState, useEffect } from 'react';

const ChangingWordText = () => {
  const words = ['startup’s pitch', 'Investor’s scout', 'leaders connect', 'VCs Fund',];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 5000); // Change every 5 seconds (you can set it to 2 * 60 * 1000 for 2 minutes)

    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <div className="text-center p-4">
      <p className="text-lg">
       A curated, high-voltage day right in the middle of India’s startup capital where 
      <span className="video-btn-text uppercase mx-2">{words[currentWordIndex]}</span>
      </p>
    </div>
  );
};

export default ChangingWordText;
