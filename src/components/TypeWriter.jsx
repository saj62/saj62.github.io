import React, { useState, useEffect } from "react";

const Typewriter = () => {
  const words = [
    " Computer Science Major",
    "n AR/VR Researcher",
    "n Artist",
    " Full Stack Developer",
    " Software Engineer"
  ];
  const [currentWord, setCurrentWord] = useState("");
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  // Static line that stays while the word changes
  const staticLine = "I'm a";

  useEffect(() => {
    const type = () => {
      let current = words[index];
      if (isDeleting) {
        setCurrentWord(current.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);

        if (charIndex === 0) {
          setIsDeleting(false);
          setIndex((prevIndex) => (prevIndex + 1) % words.length); // Move to the next word
        }
      } else {
        setCurrentWord(current.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);

        if (charIndex === current.length) {
          setIsDeleting(true);
        }
      }
    };

    const timer = setTimeout(type, 150); // 150ms delay for typing speed

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, index, words]);

  return (
    <div>
      <span id="typewriter">{staticLine}{currentWord}</span>
    </div>
  );
};

export default Typewriter;
