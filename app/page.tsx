import { Style_Script } from 'next/font/google';

const style_script = Style_Script({ weight: "400", subsets: ["latin"]});

export default function Home() {
  return (
    <section className="flex flex-col gap-24">
      <p className="w-[80vw] md:w-[60vw] lg:w-[50vw]">Born and raised in small town USA, Morgan is an American writer and poet living in France. She is currently working on her debut photo-poetry collection, focusing on the exploration of nostalgia and self-discovery.</p>
      <div className="flex flex-col gap-12">
        <h2 className={"text-2xl md:text-4xl " + style_script}>Recently published works</h2>
        <ol className="flex flex-col gap-6">
          <li className="lg:text-xl underline"><a>The Curie Review, September 2023 Issue “Home”</a></li>
          <li className="lg:text-xl underline"><a>Sage Cigarettes Magazine, September 2023</a></li>
          <li className="lg:text-xl underline"><a>Creation Magazine, Issue 03: Summer 2023</a></li>
        </ol>
      </div>
    </section>
  )
}
