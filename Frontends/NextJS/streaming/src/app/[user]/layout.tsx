'use client';
import Image from "next/image"
import '../CSS/Dashboard.css'
import { Spiral as Hamburger } from 'hamburger-react'
import Menu from "@/Component/Menu";
import { useEffect, useState } from "react";
import  {UserProvider} from '@/helper/userContext'

export default function DashboardLayout({children} : {
    children : React.ReactNode 
}) {

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
   
   useEffect(() => {
    
    toggleMenu()
   },[isToggled])
    return (
    <UserProvider >
        <section id="Dashboard">
            <Menu 
            handleOpenMenu={handleOpenMenu} 
            />
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