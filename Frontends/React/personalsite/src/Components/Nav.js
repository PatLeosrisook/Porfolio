import { useEffect, useState } from 'react';
import Logo from '../assets/Logo.svg'
import { BurgerClose } from "react-burger-icons";
import '../SCSS/home.css'
import { NavHashLink } from 'react-router-hash-link';
export function Nav({setTab, isTabOpen}) {
    let handleClose = () => {
        setTab(!isTabOpen)

    }
    return(
        <header>
            <NavHashLink 
                to={"/"} 
                smooth
                elementId='Landing'>
                <img src={Logo} id="logo" />
            </NavHashLink>
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