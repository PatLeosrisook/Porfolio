'use client';
import { ReactNode } from "react";
import Link from "next/link";
import '@/app/CSS/Dashboard.css'
import GetUser from "@/helper/getUser";
import { useState, useEffect } from "react";
import axios from "axios";
export default function AccountLayout({children} : {children : ReactNode}) {
    const [currentUser, setCurrentUser] = useState<String>("") // if user going to select

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
                    <li><Link href={`/${currentUser}/Account/profile_setting`} className="active_subLink">Profile</Link></li>
                    <li><Link href={`/${currentUser}/Account/account_setting`}>Account</Link></li>
                </ul>
            </section>
            {children}
        </section>
    )
}