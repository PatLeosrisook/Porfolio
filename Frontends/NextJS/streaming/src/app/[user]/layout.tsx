'use client';
import Image from "next/image"
import Link from "next/link"
import '../CSS/Dashboard.css'
import { createContext } from "react";
import { Spiral as Hamburger } from 'hamburger-react'
import Menu from "@/Component/Menu";
import { useEffect, useState } from "react";
import { useUser } from "@/helper/userContext";
import  {UserProvider} from '@/helper/userContext'
export default function DashboardLayout({children} : {
    children : React.ReactNode 
}) {
    const [previousSelectedPage, setPreviousSelectedPage] = useState("")
    const[currentPage, setCurrentPage] = useState("Movie")
    const { currentUser, currentEmail } = useUser();
    const [isToggled, setIsTogged] = useState(false)
    let handleOpenMenu = (toggled : Boolean) => {
        setIsTogged(!isToggled)
    }
    let toggleMenu = () => {
        let menu = document.querySelector("#Menu")
    
        if(isToggled) {
            menu?.classList.add('openMenu')

        } else {
            menu?.classList.remove('openMenu')
        }
    }
    let changeActiveLink = () => {
        
    }
   useEffect(() => {
    toggleMenu()
   })
    return (
    <UserProvider >
        <section id="Dashboard">
            <Menu handleOpenMenu={handleOpenMenu} currentPage={currentPage} setCurrentPage={setCurrentPage} setPreviousSelectedPage={setPreviousSelectedPage} />
            <header>
                <Image src={'/icons/Logo.svg'} width={20} height={20} alt="Logo"/>
                <Hamburger color="white" toggle={setIsTogged} toggled={isToggled}  onToggle={handleOpenMenu} />
            </header>
            <section id="Content">
                    {children}
            </section>
        </section>
    </UserProvider>
    )
}