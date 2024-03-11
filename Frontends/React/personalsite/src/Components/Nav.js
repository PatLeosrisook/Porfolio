import { useEffect, useState } from 'react';
import Logo from '../assets/Logo.svg'
import { BurgerClose } from "react-burger-icons";
import { Links } from './Links';
import '../SCSS/home.css'
export function Nav({setTab, isTabOpen}) {
    const [menuSize, setMenuSize] = useState(24)
    const [isWindowResized, setIsWindowResized] = useState(false)
    const [isClosed, setIsClosed] = useState(false)
    window.onresize = () => {
        setIsWindowResized(true)
    }
  
    let handleClose = () => {
        setTab(!isTabOpen)

    }
    let handleMenu = () => {
        let page = document.querySelector("#Home")
        let header = document.querySelector("header")
        if(isClosed == false ) {
            // true == close
            page.classList.remove("open_menu")
            header.classList.remove("open_menu")
        } else {
            page.classList.add("open_menu")
            header.classList.add("open_menu")

        }
    }
    useEffect(() => {
        // handleMenu()
    })
    return(
        <header onClick={() => console.log("header")}>
            <img src={Logo} id="logo" />
            <button id="burger"
            onClick={handleClose }
            style={{
                width: "50px",
                height: "50px",
                display: "grid",
                placeItems: "center",
            }}
            >
            <BurgerClose isClosed={isTabOpen} />
            </button>
            
        </header>
    )
}