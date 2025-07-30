import React, { useState, useEffect, useCallback } from 'react';

// Main App component that renders the Typewriter effect
export default function TextShuffling() {
  const sentences = [
    "Digital Marketing",
    "Web Development",
    "UI / UX Design",
    "Software Consultancy",
  ];

  const [currentSentenceIndex, setCurrentSentenceIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150); // Speed for typing characters
  const [deletingSpeed, setDeletingSpeed] = useState(70); // Speed for deleting characters
  const [pauseDelay, setPauseDelay] = useState(1500); // Delay after typing/deleting before next action

  // useCallback to memoize the type effect function
  const typeEffect = useCallback(() => {
    const fullSentence = sentences[currentSentenceIndex];

    if (isDeleting) {
      // Deleting phase
      if (displayText.length > 0) {
        // Remove one character
        setDisplayText(prev => fullSentence.substring(0, prev.length - 1));
      } else {
        // Finished deleting, switch to typing next sentence
        setIsDeleting(false);
        setCurrentSentenceIndex(prev => (prev + 1) % sentences.length); // Loop through sentences
      }
    } else {
      // Typing phase
      if (displayText.length < fullSentence.length) {
        // Add one character
        setDisplayText(prev => fullSentence.substring(0, prev.length + 1));
      } else {
        // Finished typing, pause, then switch to deleting
        setTimeout(() => setIsDeleting(true), pauseDelay);
      }
    }
  }, [currentSentenceIndex, displayText, isDeleting, sentences, pauseDelay]);

  // useEffect to control the typing/deleting animation with a timer
  useEffect(() => {
    const timer = setTimeout(typeEffect, isDeleting ? deletingSpeed : typingSpeed);
    return () => clearTimeout(timer); // Cleanup timeout on component unmount or re-render
  }, [displayText, isDeleting, typeEffect, typingSpeed, deletingSpeed]);

  return (
    <>
      <h1
        data-aos="fade-up"
        data-aos-delay="800"
        className="2xl:text-[5.6rem] xl:text-[4.8rem] lg:text-[4.175rem] md:text-[3rem] sm:text-[2.425rem]  text-[2.35rem]  leading-[115%] 2xl:min-h-[6rem] xl:min-h-[5rem] lg:min-h-[4.375rem] md:min-h-[3.125rem] sm:min-h-[2.625rem] min-h-[2.55rem] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-pine-700 lg:mt-3 mt-10 flex lg:justify-start justify-center items-end"
      >
        {displayText} <span className="lg:w-4 w-2 inline-block 2xl:min-h-[6rem] xl:min-h-[5rem] lg:min-h-[4.375rem] md:min-h-[3.125rem] sm:min-h-[2.625rem] min-h-[2.55rem] bg-pine-700 animate-blink"></span>
      </h1>

      {/* Tailwind CSS keyframes for blinking cursor */}
      <style>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        .animate-blink {
          animation: blink 0.8s infinite step-start;
        }
      `}</style>
    </>

  );
}
