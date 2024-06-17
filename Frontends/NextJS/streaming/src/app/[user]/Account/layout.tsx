'use client';
import { ReactNode } from "react";
import Link from "next/link";
import '@/app/CSS/Dashboard.css'
import GetUser from "@/helper/getUser";
import { useState, useEffect } from "react";
import axios from "axios";
export default function AccountLayout({children} : {children : ReactNode}) {
    const [currentUser, setCurrentUser] = useState<String>("") // if user going to select
    let handleLink = (e : any, selectedLink: string) => {
        let selectedElement = document.getElementsByClassName(selectedLink)[0]
        

    }
    let getUser = async () => {
        let user = await axios.get('/api/users/me')
        console.log("user id", user.data.data.username)
        setCurrentUser(user.data.data.username)
    }
    useEffect(() => {
        getUser();
    })
    return (
        <section id="Account">
            <section id="Side_menu">
                <ul id="Setting_links">
                    <li><Link onClick={e => handleLink(e, "Profile")} href={`/${currentUser}/Account/profile_setting`} className="Profile active_subLink">Profile</Link></li>
                    <li><Link onClick={e => handleLink(e, "Account")} href={`/${currentUser}/Account/account_setting`} className="Account">Account</Link></li>
                </ul>
            </section>
            {children}
        </section>
    )
}