import { ReactNode } from "react";

export default function AccountLayout({children} : {children : ReactNode}) {
    return (
        <section id="Account">
            <section id="Side_menu">
            
            </section>
            {children}
        </section>
    )
}