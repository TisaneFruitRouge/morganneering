"use client"

import "@/app/styles/navbar.css";
import { useState } from "react";
import { usePathname } from 'next/navigation'

export default function Navbar() {

    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname()
    const isPoemPage = pathname.includes('poem')

    return (
        <>
            <nav className="hidden fixed top-32 right-16 md:flex flex-col gap-16 text-3xl">
                {isPoemPage ? 
                    <a className="hover:underline w-32 text-center" href="/poetry">back to poetry</a> :
                    <>
                        <a className="hover:underline" href="/poetry">poerty</a>
                        <a className="hover:underline" href="/about">about</a>
                        <a className="hover:underline" href="/contact">contact</a>
                    </>
                }
            </nav>
            <div id="burger" className="fixed top-8 right-8 z-50 mr-4 flex md:hidden flex-col gap-2 hover:cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
                <span className={`w-8 h-0.5 bg-primary duration-200 ${isOpen && 'rotate-45 translate-y-2'}`}></span>
                <span className={`w-4 h-0.5 bg-primary duration-200 ${isOpen && 'opacity-0'}`}></span>
                <span className={`h-0.5 bg-primary duration-300 ${isOpen ? '-rotate-45 -translate-y-3 w-8' : 'w-2'}`}></span>
            </div>
            <div className={`fixed top-0 right-0 pt-32 z-40 h-screen w-64 bg-background duration-200 ${isOpen ? 'translate-x-0' : 'translate-x-96'} flex flex-col items-center gap-16 text-3xl p-4`}>
                {isPoemPage ? 
                    <a className="hover:underlin w-32 text-center" href="/poetry">back to poetry</a> :
                    <>
                        <a className="hover:underline" href="/poetry">poerty</a>
                        <a className="hover:underline" href="/about">about</a>
                        <a className="hover:underline" href="/contact">contact</a>
                    </>
                }
            </div>
            {
                isOpen && <div onClick={() => setIsOpen(false)} className="z-30 fixed top-0 left-0 w-screen h-screen bg-black/50"></div>
            }
        </>
    )

}