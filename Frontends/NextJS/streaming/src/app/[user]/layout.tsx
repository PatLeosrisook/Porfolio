'use client';
import Image from "next/image"
import Link from "next/link"
import '../CSS/Dashboard.css'
import { createContext } from "react";
import { Spiral as Hamburger } from 'hamburger-react'
import Menu from "@/Component/Menu";
import { useEffect, useState } from "react";
import { getUser } from "@/lib/getUser";
import userContext from '@/helper/userContext'
export default function DashboardLayout({children} : {
    children : React.ReactNode 
}) {
    // let userContext = createContext("")
    const[currentUser, setCurrentUser] = useState("")
    const [isToggled, setIsTogged] = useState(false)
    let handleOpenMenu = (toggled : Boolean) => {
        setIsTogged(!isToggled)
    }
    let loggedInUser = async() => {
        let user = await getUser();
        setCurrentUser(user.currentUser)
    }
   useEffect(() => {
    let menu = document.querySelector("#Menu")
    if(isToggled) {
        menu?.classList.add('openMenu')

    } else {
        menu?.classList.remove('openMenu')
    }
    loggedInUser();
   })
    return (
        <section id="Dashboard">
            <Menu handleOpenMenu={handleOpenMenu} />
            <header>
                <Image src={'/icons/Logo.svg'} width={20} height={20} alt="Logo"/>
                <Hamburger color="white" toggle={setIsTogged} toggled={isToggled}  onToggle={handleOpenMenu} />
            </header>
            <section id="Content">
                <userContext.Provider value={currentUser}>
                    {children}
                </userContext.Provider>
            </section>
        </section>
    )
}