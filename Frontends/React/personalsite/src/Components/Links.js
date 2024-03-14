import '../SCSS/home.css'
import { NavLink, useLocation } from "react-router-dom";
import { useEffect, useState } from 'react';
export function Links({HomeRef, AboutRef,ContactRef, setTab,isTabOpen, setNextPath, nextPath}) {
    
    let handleClick = (name) => {
        try {  
            switch(name) {
                case "homeRef":         
                    setNextPath("/")

                    
                    break;
                    case 'aboutRef' :
                        setNextPath("/About")
                        // AboutRef.current.scrollIntoView({behavior: 'smooth'})
                        break;
                    case "contactRef":
                        // ContactRef.current.scrollIntoView({behavior: 'smooth'})
                        setNextPath("/Contact")
                     
                    break;
                case "Work": 
                    setNextPath("/Work")
                    // window.scrollTo({top: 0, behavior: "smooth"})
                    break;
            }
        } catch(e) {
            
        }
        setTab(!isTabOpen)
    }
    useEffect(() => {
        try{
            // console.log("Currentttt" ,HomeRef.current && AboutRef.current && ContactRef.current, HomeRef,AboutRef, ContactRef)
        } catch(e) {
            console.log(e.message)
        }
        if(nextPath == "/") {
            
            
        } else if (nextPath == "/About") {
   
            
        } else if(nextPath == "/Contact") {
            
        } else {
            // window.scrollTo({top: 0, behavior: "smooth"})
        }
        
    })
    return (
        <ul className="Links">
            <li><NavLink onClick={() => handleClick("homeRef")}  className="Home-link"  to="/">Home</NavLink></li>
            <li><NavLink onClick={() => handleClick("aboutRef")} className="About-link" to="/About">About</NavLink></li>
            <li><NavLink onClick={() => handleClick("Work")} to="/Work">Works</NavLink></li>
            <li><NavLink onClick={() => handleClick("contactRef")} className="Contact-link" to="/Contact">Contact</NavLink></li>
        </ul>
    )
}