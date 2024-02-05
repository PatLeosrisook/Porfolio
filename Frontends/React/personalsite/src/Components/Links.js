import '../SCSS/home.css'
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from 'react';
export function Links({HomeRef, AboutRef,ContactRef, handleOpenTab}) {
    const {pathname} = useLocation()
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
   
    useEffect(() => {
        
    })
    return (
        <ul className="Links">
            <li><Link onClick={() => handleClick("homeRef")}  className="active Home-link" to="">Home</Link></li>
            <li><Link onClick={() => handleClick("aboutRef")} className="About-link" to="#About">About</Link></li>
            <li><Link onClick={() => handleClick("Work")} to="/Work">Works</Link></li>
            <li><Link onClick={() => handleClick("contactRef")} className="Contact-link" to="#Contactx">Contact</Link></li>
        </ul>
    )
}