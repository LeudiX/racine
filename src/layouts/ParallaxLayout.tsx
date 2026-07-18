import { useEffect } from 'react';
import Lenis from 'lenis';
import { useHorizontalScroll } from '../hooks/useHorizontalScroll';

interface ParallaxLayoutProps {
  children: React.ReactNode;
}

export function ParallaxLayout({ children }: ParallaxLayoutProps) {
  const { containerRef, wrapperRef } = useHorizontalScroll();

  // Initialize smooth scrolling with Lenis
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Custom buttery easing
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      touchMultiplier: 2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    // The outer container pins to the viewport
    <main ref={containerRef} className="h-screen w-full overflow-hidden bg-[#0a0a0c] text-zinc-300">
      {/* The inner wrapper flexes horizontally and translates on scroll */}
      <div ref={wrapperRef} className="flex h-full w-max">
        {children}
      </div>
    </main>
  );
}