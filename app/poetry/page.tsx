import client from '../client';
import { GET_POEMS } from '../graphql/queries';
import { Poem } from '@/app/types';
import PoemSlider from './PoemSlider';


export default async function Poetry() {

    const { data } = await client.query({
        query: GET_POEMS
    })

    const poems:Poem[] = data.poems ?? [];

    return (
        <section className="mt-12">
            <PoemSlider poems={poems} />
        </section>
    )
}