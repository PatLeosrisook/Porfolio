'use client';
import Image from "next/image"
import Link from "next/link"
import '../CSS/Dashboard.css'
import { useRouter } from "next/router"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBurger } from "@fortawesome/free-solid-svg-icons";
import { Spiral as Hamburger } from 'hamburger-react'
import Menu from "@/Component/Menu";
import { useEffect, useState } from "react";
export default function DashboardLayout({children} : {
    children : React.ReactNode 
}) {
    const [isToggled, setIsTogged] = useState(false)
    let handleOpenMenu = (toggled : Boolean) => {
        let menu = document.querySelector("#Menu")
        console.log("Menu is", isToggled)
        if(isToggled) {
            menu?.classList.add('openMenu')

        } else {
            menu?.classList.remove('openMenu')
        }
    }
   
    return (
        <section id="Dashboard">
            <Menu handleOpenMenu={handleOpenMenu} />
            <header>
                <Image src={'/icons/Logo.svg'} width={20} height={20} alt="Logo"/>
                {/* <ul>
                    <li>
                        <Link href={`/${user}/Home`}>
                            <Image src={'/icons/Dashboard.svg'} width={24} height={24} alt="home"/>
                        </Link>
                    </li>
                    <li>
                        <Link href={`/${user}/Movie`}>
                            <Image src={'/icons/Movie-icon.svg'} width={24} height={24} alt="home"/>
                        </Link>
                    </li>
                    <li>
                        <Link href={`/${user}/TV`}>
                            <Image src={'/icons/Tv-icon.svg'} width={24} height={24} alt="home"/>
                        </Link>
                    </li>
                    <li>
                        <Link href="">
                            <Image src={'/icons/Saved-icon.svg'} width={24} height={24} alt="home"/>
                        </Link>
                    </li>
                </ul> */}
                <Hamburger color="white" toggle={setIsTogged} toggled={isToggled}   />
            </header>
            <section id="Content">
                
                {children}
            </section>
        </section>
    )
}