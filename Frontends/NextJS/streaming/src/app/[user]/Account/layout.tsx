'use client';
import { ReactNode } from "react";
import Link from "next/link";
import '@/app/CSS/Dashboard.css'
import GetUser from "@/helper/getUser";
import { useState, useEffect } from "react";
import axios from "axios";
import { usePathname } from "next/navigation";
export default function AccountLayout({children} : {children : ReactNode}) {
    const [currentUser, setCurrentUser] = useState<String>("") // if user going to select
    const pathname = usePathname()
    let handleLink = ( selectedLink: string = "none") => {
        if( pathname?.split("/")[pathname.split("/").length - 1] == "profile_setting" ) {
            selectedLink = "Profile"
            document.querySelector(`.${selectedLink}`)?.classList.add('active_subLink')
            document.querySelector(`.Account_Link`)?.classList.remove('active_subLink')
        } else if(pathname?.split("/")[pathname.split("/").length - 1] == "account_setting") {
            selectedLink = "Account_Link"
            document.querySelector(`.${selectedLink}`)?.classList.add('active_subLink')
            document.querySelector(`.Profile`)?.classList.remove('active_subLink')
        }
        
    }
    let getUser = async () => {
        //TODO:: refactor this 
        let user = await axios.get('/api/users/me')
        setCurrentUser(user.data.data.username)
    }
    useEffect(() => {
        getUser();
        handleLink()
    },[pathname])
    return (
        <section id="Account">
            <section id="Side_menu">
                <ul id="Setting_links">
                    <li>
                        <Link href={`/${currentUser}/Account/profile_setting`} className="Profile active_subLink">Profile</Link>
                    </li>
                    <li>
                        <Link href={`/${currentUser}/Account/account_setting`} className="Account_Link">Account</Link>
                    </li>
                </ul>
            </section>
            {children}
        </section>
    )
}

