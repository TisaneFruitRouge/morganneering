
import { Style_Script } from 'next/font/google';

const style_script = Style_Script({ weight: "400", subsets: ["latin"]});

export default function Contact() {
    return (
        <section className="flex flex-col gap-24">
            <div className="flex flex-col gap-8">
                <p>For readings, events, & inquiries, please contact</p>
                <a className="underline" href="mailto:morganneering@gmail.com">morganneering@gmail.com</a>
            </div>
            <div className="flex flex-col gap-8">
                <h2 className={"text-2xl md:text-4xl " + style_script}>Socials</h2>
                <ol className="flex flex-col gap-6">
                    <li className='underline'><a target='_blank' href='https://www.instagram.com/mneering/'>instagram @mneering</a></li>
                </ol>
            </div>
        </section>
    )
}