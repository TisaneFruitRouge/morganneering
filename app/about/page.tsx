import Image from 'next/image';

export default function About() {
    return (
        <div className="flex flex-col gap-8">
            <div className="w-[80vw] md:w-[60vw] lg:w-[50vw] flex flex-col gap-1">
                <p>
                    Morgan Neering is a writer and poet from North Carolina, who now lives and writes in France.
                </p>
                <p>
                    Her work has been published in a variety of literary magazines, such as Ink in Thirds, Yellow Arrow Journal, and Carolina Muse, among others. Her poetry seeks to explore themes of nostalgia and self-discovery, as well as the fleeting nature of time. She is currently working on her debut photo-poetry collection, which dives deeper into a profound exploration of these themes.
                </p>
            </div>
            <div className="relative">
                <div className="absolute top-0 left-0 w-64 h-64 bg-black/10 rounded-md translate-x-1 translate-y-1"></div>
                <Image 
                    className="absolute top-0 left-0 rounded-md hover:-translate-x-1 hover:-translate-y-1 duration-200"
                    src="/morgan.jpg" 
                    alt="Morgan NEERING" 
                    width={256} 
                    height={256}
                />
            </div>
        </div>
    )
}