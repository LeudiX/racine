import { useRef, useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Volume2, VolumeX } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { RACINE_DATA } from '../data/racineData';

gsap.registerPlugin(ScrollTrigger);

export function StudioShowcase() {
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  // 1. Responsive Viewport Listener
  useEffect(() => {
    const handleResize = () => {
      // 768px perfectly matches Tailwind's 'md' breakpoint
      setIsMobile(window.innerWidth < 768);
    };

    // Run once on mount to get initial screen size
    handleResize();

    // Listen for orientation changes or window resizing
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [])

  // 2. Native Intersection Observer for Video Play/Pause
  useEffect(() => {
    // Ensure both refs are attached before observing
    if (!sectionRef.current || !videoRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Element has entered the viewport
            videoRef.current?.play().catch((error) => {
              console.log("Browser autoplay policy prevented playback:", error);
            });
          } else {
            // Element has left the viewport
            videoRef.current?.pause();
          }
        });
      },
      {
        root: null, // Watches the main browser viewport
        threshold: 0.4, // Triggers when exactly 40% of the section is visible
      }
    );

    observer.observe(sectionRef.current);

    // Clean up the observer when the component unmounts
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
      observer.disconnect();
    };
  }, []); // Empty dependency array ensures this only binds once on mount

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  return (
    // Note the added overflow-y-auto for the vertical overflow fix!
    <section
      ref={sectionRef}
      className="parallax-section relative flex h-screen w-screen flex-shrink-0 flex-col justify-center overflow-y-auto overflow-x-hidden border-r border-zinc-800 px-8 py-24 lg:flex-row lg:items-center lg:px-24 lg:py-0"
    >
      <div className="flex h-full w-full flex-col gap-12 lg:flex-row lg:items-center lg:gap-16">

        {/* Text Content Block */}
        <div className="flex w-full flex-col justify-center lg:w-1/3">
          <h2 className="text-4xl font-bold uppercase tracking-widest text-white md:text-5xl">
            {RACINE_DATA.showcase.title}
          </h2>
          <div className="my-6 h-px w-24 bg-zinc-600"></div>
          <p className="text-base font-light leading-relaxed text-zinc-400 md:text-lg">
            {RACINE_DATA.showcase.description}
          </p>
        </div>

        {/* Swiper Video Frame Block */}
        <div className="w-full lg:w-2/3">
          <div className="aspect-video w-full overflow-hidden rounded-sm bg-zinc-900 shadow-2xl">
            <Swiper className="h-full w-full">
              {RACINE_DATA.showcase.media.map((item) => (
                <SwiperSlide key={item.id} className="relative h-full w-full">
                  <video
                    ref={videoRef}
                    // Dynamically inject the correct asset based on the breakpoint
                    src={isMobile ? item.urlMobile : item.urlDesktop}
                    className="h-full w-full object-cover"
                    loop
                    playsInline
                    muted={isMuted}
                  />

                  {/* Custom Volume Controller */}
                  <button
                    onClick={toggleMute}
                    className="absolute cursor-pointer bottom-4 right-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-black/60 text-white backdrop-blur-md transition-colors hover:bg-zinc-800"
                    aria-label="Toggle Volume"
                  >
                    {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
                  </button>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

      </div>
    </section>
  );
}