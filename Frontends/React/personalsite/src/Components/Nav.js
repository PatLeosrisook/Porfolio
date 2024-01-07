import { useEffect, useState } from 'react';
import Logo from '../assets/Logo.svg'
import { BurgerClose } from "react-burger-icons";
import { Links } from './Links';
export function Nav() {
    const [menuSize, setMenuSize] = useState(24)
    const [isWindowResized, setIsWindowResized] = useState(false)
    const [isClosed, setIsClosed] = useState(false)
    window.onresize = () => {
        setIsWindowResized(true)
    }
    useEffect(() => {
        let currentWidth = window.innerWidth
        if(currentWidth < 700) {
            setMenuSize(30)
        } else if(currentWidth>= 700 && currentWidth < 1024) {
            setMenuSize(40)
        } else {
            setMenuSize(50)
        }
        setIsWindowResized(false)
    },[isWindowResized])
    let handleClose = () => {
        setIsClosed(!isClosed)

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
        console.log("isClosed" , isClosed)
        handleMenu()
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
            <BurgerClose isClosed={isClosed} />
            </button>
            
            <nav id="Desktop_Links">
                <Links/>
            </nav>
        </header>
    )
}