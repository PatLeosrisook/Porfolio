import '../SCSS/home.css'
import { NavLink, useLocation } from "react-router-dom";
import { useEffect, useState } from 'react';
export function Links({HomeRef, AboutRef,ContactRef, handleOpenTab}) {
    let handleClick = (name) => {

        try {  
            switch(name) {
                case "homeRef":
                    
                    HomeRef.current.scrollIntoView({behavior: 'smooth'})
                    window.scrollTo({top: 0, behavior: "smooth"})
                    
                    break;
                case 'aboutRef' :
                    AboutRef.current.scrollIntoView({behavior: 'smooth'})
                    break;
                case "contactRef":
                    ContactRef.current.scrollIntoView({behavior: 'smooth'})
                    break;
                case "Work": 
                    window.scrollTo({top: 0, behavior: "smooth"})
                    break;
            }
        } catch(e) {
            console.log("erro ", e.message)
        }
    }
    return (
        <ul className="Links">
            <li><NavLink onClick={() => handleClick("homeRef")}  className="Home-link" to="/">Home</NavLink></li>
            <li><NavLink onClick={() => handleClick("aboutRef")} className="About-link" to="/About">About</NavLink></li>
            <li><NavLink onClick={() => handleClick("Work")} to="/Work">Works</NavLink></li>
            <li><NavLink onClick={() => handleClick("contactRef")} className="Contact-link" to="/Contact">Contact</NavLink></li>
        </ul>
    )
}