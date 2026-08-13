import { useState, useEffect } from "react";

export function useRotatingtext (words, interval = 3000) {
  const [ currentIndex, setCurrentIndex ] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % words.length);
    }, interval);

    return () => clearInterval(timer);
  }, [words.length, interval]);

  return words[currentIndex];
};