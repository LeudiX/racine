import { RACINE_DATA } from '../data/racineData';

export function Hero() {
    return (
        <section className="parallax-section relative flex h-screen w-screen flex-shrink-0 flex-col items-center justify-center border-r border-zinc-800 px-8 lg:px-24">
            {/* Background Parallax Layer Placeholder */}
            <div className="absolute inset-0 z-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle, #333 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>

            {/* Foreground Content */}
            <div className="z-10 flex w-full max-w-5xl flex-col items-start gap-6">
                <h1 className="text-6xl font-black uppercase tracking-tighter text-white md:text-8xl lg:text-[10rem]">
                    {RACINE_DATA.brand.name}
                </h1>
                <p className="max-w-2xl text-lg font-light leading-relaxed tracking-wide text-zinc-400 md:text-xl">
                    {RACINE_DATA.brand.tagline}
                </p>
                <p className="max-w-3xl text-sm font-medium uppercase tracking-widest text-zinc-500">
                    {RACINE_DATA.brand.description}
                </p>
            </div>
        </section>
    );
}