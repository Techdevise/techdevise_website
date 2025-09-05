import React, { useState, useEffect, useCallback } from 'react';

// Main App component that renders the Typewriter effect
export default function TextShuffling() {
  const sentences = [
    "Digital Marketing",
    "Web Development",
    "UI / UX Design",
    "Software Consultancy",
    // "AI And Blockchain",
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
        className="2xl:text-[5rem] 2xl:min-h-[104px]  xl:text-[4.3rem] xl:min-h-[84px] lg:text-[4.175rem] lg:min-h-[68px] md:text-[3rem] md:min-h-[42px] sm:text-[2.425rem] min-h-[34px]  text-[2.35rem]   leading-[115%] font-extrabold text-white bg-clip-text bg-gradient-to-r from-white to-pine-700 lg:mt-3 mt-10 flex lg:justify-start justify-center items-end"
      >
        {displayText} <span className="lg:w-2 w-2 inline-block 2xl:min-h-[104px] xl:min-h-[84px] lg:min-h-[68px] md:min-h-[42px] min-h-[34px] bg-pine-700 animate-blink"></span>
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