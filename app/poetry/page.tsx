import client from '../client';
import { GET_POEMS } from '../graphql/queries';
import { Poem } from '@/app/types';
import PoemSlider from './PoemSlider';


export default async function Poetry() {

    const { data } = await client.query({
        query: GET_POEMS
    })

    type PoemWithoutContent = Omit<Poem, "content">;

    const poems:PoemWithoutContent[] = data.poems ?? [];

    const sortPoems = (a: PoemWithoutContent, b: PoemWithoutContent) => a.title < b.title ? -1 : 1;

    const sortedPoems = [...poems].sort(sortPoems);

    return (
        <section className="mt-12">
            <PoemSlider poems={sortedPoems} />
        </section>
    )
}