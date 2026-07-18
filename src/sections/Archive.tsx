import { RACINE_DATA } from '../data/racineData';

export function Archive() {
  return (
    <section className="parallax-section relative flex h-screen w-screen flex-shrink-0 items-center justify-center border-r border-zinc-800 px-8 lg:px-24">
      <div className="flex h-full w-full flex-col justify-center gap-12">
        <header>
          <h2 className="text-4xl font-bold uppercase tracking-widest text-white">The Archive</h2>
          <div className="mt-2 h-px w-24 bg-zinc-600"></div>
        </header>

        {/* Horizontal Gallery Layout */}
        <div className="flex h-[60vh] w-full gap-8">
          {RACINE_DATA.placements.map((item, index) => (
            <article 
              key={item.imageId} 
              className="group relative flex h-full flex-1 cursor-pointer flex-col overflow-hidden rounded-sm bg-zinc-900 transition-all duration-500 hover:flex-[1.5]"
            >
              {/* Image Placeholder */}
              <div className="absolute inset-0 flex items-center justify-center bg-zinc-800 text-zinc-700">
                [Image: {item.imageId}]
              </div>
              
              {/* Overlay Content */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 transition-opacity group-hover:opacity-100"></div>
              <div className="absolute bottom-0 flex w-full flex-col p-6 translate-y-4 transition-transform duration-500 group-hover:translate-y-0">
                <span className="text-xs font-mono text-zinc-400">0{index + 1} // {item.context}</span>
                <h3 className="text-2xl font-bold uppercase tracking-wider text-white">{item.client}</h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}