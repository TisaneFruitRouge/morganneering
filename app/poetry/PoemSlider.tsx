"use client"

import { useEffect, useState } from "react";
import { useSearchParams } from 'next/navigation'

import { Poem } from "../types";

type PoemWithoutContent = Omit<Poem, "content">;

interface PoemSliderProps {
    poems: PoemWithoutContent[];
}

export default function PoemSlider({poems}: PoemSliderProps) {

    const searchParams = useSearchParams();
    const page = parseInt(searchParams.get('page') ?? "1");

    const [currentPage, setCurrentPage] = useState(isNaN(page) ? 1 : Math.max(1, page));
    const [currentPoems, setCurrentPoems] = useState([
        poems[0],
        poems[1],
        poems[2],
        poems[3],
    ])

    useEffect(() => {
        let tmp = [];
        for (let i = 4*(currentPage - 1); i < Math.min(poems.length, 4 * currentPage); i++){
            tmp.push(poems[i]);
        }
        setCurrentPoems(tmp);
    }, [currentPage]);

    return (
        <div>
            <ol className="text-3xl flex flex-col gap-12">
                {currentPoems.map(poem => (
                    <li key={poem.id} className="hover:underline">
                        <a href={`/poem/${poem.id}`}>{poem.title}</a>
                    </li>
                ))}
            </ol>
            <div className="fixed bottom-16 right-16 text-3xl flex flex-col gap-2 items-end">
                {<button className={`hover:underline ${currentPage <= (Math.floor(poems.length / 4)) ? 'visible' : 'invisible'}`} onClick={() => setCurrentPage(currentPage + 1)}>next page</button>}
                {<button className={`hover:underline ${currentPage > 1 ? 'visible' : 'invisible'}`} onClick={() => setCurrentPage(currentPage - 1)}>previous page</button>}
            </div>
        </div>
    )
}