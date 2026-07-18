import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function useHorizontalScroll() {
  const containerRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!containerRef.current || !wrapperRef.current) return;

    const sections = gsap.utils.toArray(".parallax-section");
    
    // Pin the container and move the wrapper horizontally
    gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        pin: true,
        scrub: 1, // Smooth scrubbing
        snap: 1 / (sections.length - 1), // Optional: snaps to sections
        end: () => "+=" + wrapperRef.current?.offsetWidth
      }
    });
  }, { scope: containerRef });

  return { containerRef, wrapperRef };
}