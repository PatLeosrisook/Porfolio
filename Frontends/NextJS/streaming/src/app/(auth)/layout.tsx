'use client';
import Image from "next/image"
import Link from "next/link"
import { useState } from "react";
import {  ToastContainer } from 'react-toastify';
// import {Mosaic} from 'react-loading-indicators'
export default function RegisterLayout({children} : {
    children: React.ReactNode
}) {
    
    return (
        <section id="Registrations">
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
            <header id="Register_header">
                <Link href="/">
                    <Image src={'/icons/Logo.svg'} width={20} height={20} alt="Logo" />
                </Link>
            </header>
            <form className="Register_card">
                {children}
            </form>
        </section>
    )
}