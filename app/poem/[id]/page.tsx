import { GET_POEM_BY_ID } from "@/app/graphql/queries";
import { Poem } from "@/app/types";
import client from "@/app/client";
import { redirect } from 'next/navigation'

interface PoemProps {
    params: {id: string}
}

export default async function Poem({ params }:PoemProps) {
    
    const poemId = params.id;
    
    const { data } = await client.query({
        query: GET_POEM_BY_ID,
        variables: { id: poemId },
    });

    const poem:Poem = data.poem ?? null;

    if (poem == null) {
        redirect('/404')
    }

    return (
        <section className="w-full md:w-3/4 flex flex-col gap-4 sm:flex-row">
            <div className="w-full sm:w-1/3">
                <h1 className="text-2xl mb-2">{poem.title}</h1>
                <p>published in</p>
                <a className="underline" href={poem.url ?? ""}>{poem.magazine}</a>
            </div>
            <div className="w-full sm:w-2/3 flex flex-col">
                {poem.content.text.split('\n').map((line, index) => <p key={index}>{line || '\u00A0'}</p>)}
            </div>
        </section>
    )
}