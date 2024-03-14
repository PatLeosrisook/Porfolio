import '../SCSS/home.css'
import { NavLink, useLocation } from "react-router-dom";
import { useEffect, useState } from 'react';
import { Home } from '../Pages/Home';
export function Links({HomeRef, AboutRef,ContactRef, setTab,isTabOpen, setNextPath, isLoading, setIsLoading}) {
    
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
        // var loading = setInterval(() => {
        //   console.log(HomeRef, AboutRef, ContactRef)
        // }, 1000)
        // try {
        //     if(HomeRef.current && AboutRef.current && ContactRef.current) {
        //       setIsLoading(false)
        //       clearInterval(loading)
        //     }
            
        // }catch (e) {
        //     console.log("Still laoding ")
        // }
        // console.log("Updated", HomeRef, AboutRef, ContactRef)
        
        
    }, [HomeRef, AboutRef, ContactRef])
    return (
        <ul className="Links">
            <li><NavLink onClick={() => handleClick("homeRef")}  className="Home-link"  to="/">Home</NavLink></li>
            <li><NavLink onClick={() => handleClick("aboutRef")} className="About-link" to="/About">About</NavLink></li>
            <li><NavLink onClick={() => handleClick("Work")} to="/Work">Works</NavLink></li>
            <li><NavLink onClick={() => handleClick("contactRef")} className="Contact-link" to="/Contact">Contact</NavLink></li>
        </ul>
    )
}