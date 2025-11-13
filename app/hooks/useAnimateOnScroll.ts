"use client";
import { useEffect, useRef } from 'react';

export function useAnimateOnScroll(animationName = 'fadeInUp', threshold = 0.3, delay = 0) {
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('animate__animated', `animate__${animationName}`);
              observer.unobserve(entry.target);
            }, delay);
          }
        });
      },
      { threshold }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [animationName, threshold, delay]);

  return elementRef;
}