import { ParallaxLayout } from './layouts/ParallaxLayout';
import { Hero } from './sections/Hero';
import { Archive } from './sections/Archive';

function App() {
  return (
    <ParallaxLayout>
      <Hero />
      <Archive />

      {/* Temporary placeholders for the next sections to ensure the scroll length is correct */}
      <section className="parallax-section flex h-screen w-screen flex-shrink-0 items-center justify-center border-r border-zinc-800">
        <h2 className="text-4xl text-zinc-500">The Armory (Coming Next)</h2>
      </section>
      <section className="parallax-section flex h-screen w-screen flex-shrink-0 items-center justify-center">
        <h2 className="text-4xl text-zinc-500">The Network (Coming Next)</h2>
      </section>
    </ParallaxLayout>
  );
}

export default App;