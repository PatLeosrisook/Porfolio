'use client';
import Image from "next/image"
import Link from "next/link"
import { useState } from "react";
export default function RegisterLayout({children} : {
    children: React.ReactNode
}) {
    const[value, setValue] = useState({
        Email:"",
        Password:"",
    })
    return (
        <section id="Registrations">
            <header id="Register_header">
                <Link href="/">
                    <Image src={'/icons/Movie.svg'} width={20} height={20} alt="Logo" />
                </Link>
            </header>
            <form className="Register_card">
                {children}
            </form>
        </section>
    )
}