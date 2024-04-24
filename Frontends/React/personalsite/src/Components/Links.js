import '../SCSS/home.css'
import { useEffect, useState } from 'react';
import { Home } from '../Pages/Home';
import { NavHashLink, HashLink } from 'react-router-hash-link';
export function Links({HomeRef, AboutRef,ContactRef, setTab,isTabOpen, setNextPath,nextPath,  isLoading, setIsLoading}) {
    
    let handleClick = (name) => {
        setTab(!isTabOpen)
    }
    useEffect(() => {
        // console.log(nextPath)
        // try{
        //     if((HomeRef.current && AboutRef.current && ContactRef.current)) {
        //       if(nextPath == '/') {
        //         window.scrollTo({top: 0, behavior: "smooth"})
        //       } else if(nextPath == "/About") {
        //         if(AboutRef.current) {
        //           AboutRef.current.scrollIntoView({behavior: 'smooth'})
        //         } 
        //       } else if(nextPath=='/Contact') {
        //         if(ContactRef.current) {
        //           ContactRef.current.scrollIntoView({behavior: 'smooth'})
        //         } else {
        //           console.log(ContactRef)
        //         }
        //       } else {
        //         window.scrollTo({top: 0, behavior: "smooth"})
        //       }
        //     }
      
        //   } catch(e) {
        //     console.log("NOt load")
        //   }
        
    })
    return (
        <ul className="Links">
            <li>
                <NavHashLink  
                onClick={() => handleClick("HomeRef")}  
                className="Home-link"  
                to={"/"} 
                elementId='Landing'>Home</NavHashLink>
            </li>
            <li>
                <NavHashLink  
                smooth 
                onClick={() => handleClick("AboutRef")} 
                className="About-link" 
                to="/About"
                elementId='About'>About</NavHashLink>
            </li>
            <li>
                <NavHashLink  
                onClick={() => handleClick("Work")} 
                smooth
                to="/Work" 
                elementId='Work'>Works</NavHashLink>
            </li>
            <li>
                <NavHashLink  
                smooth 
                onClick={() => handleClick("ContactRef")} 
                className="Contact-link" 
                to="/Contact" 
                elementId='Contact'>Contact</NavHashLink>
            </li>
        </ul>
    )
}