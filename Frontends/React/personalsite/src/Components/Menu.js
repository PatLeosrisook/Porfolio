import { useEffect } from "react";
import { Links } from "./Links";

export function Menu({HomeRef, AboutRef,ContactRef, isTabOpoen}) {
    // let handleOpenTab = () => {
    //     let app = document.querySelector(".App")
    //     let Menu = document.querySelector("#Menu")
    //     if(isTabOpoen) {
    //         app.classList.add("moveApp")
    //     }
    // }
    useEffect(() => {

    })
    return(
        <section id="Menu">
            <Links HomeRef={HomeRef} AboutRef={AboutRef} ContactRef={ContactRef}  />
        </section>
    )
}