import React, { useState, useEffect, useRef } from 'react';

const AutoCounter = ({  sectionRef, maxValue, speed = 50 }) => {
    const [count, setCount] = useState(0);
    const [startCounting, setStartCounting] = useState(false); 

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setStartCounting(true);
                }
            },
            {
                threshold: 0.5,
            }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    useEffect(() => {
        if (!startCounting || count >= maxValue) return;

        const interval = setInterval(() => {
            setCount(prev => {
                if (prev >= maxValue - 1) {
                    clearInterval(interval);
                    return maxValue;
                }
                return prev + 1;
            });
        }, speed); // Speed in ms

        return () => clearInterval(interval);
    }, [startCounting, count, maxValue, speed]);

    return (

        <h3 ref={sectionRef} className="w-full lg:pb-[1.75rem] pb-[1.25rem] lg:pt-[2.9375rem] pt-[1.75rem] font-bold 2xl:text-[4rem] xl:text-[3rem] text-[2rem] text-center">{count}+</h3>

    );
};


export default AutoCounter;
