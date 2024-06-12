import { ReactNode } from "react";
import '@/app/CSS/Dashboard.css'
export default function AccountLayout({children} : {children : ReactNode}) {
    return (
        <section id="Account">
            <section id="Side_menu">
                <ul id="Setting_links">
                    <li><a href="" className="active_subLink">Profile</a></li>
                    <li><a href="">Account</a></li>
                </ul>
            </section>
            {children}
        </section>
    )
}