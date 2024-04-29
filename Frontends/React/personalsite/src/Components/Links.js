import '../SCSS/home.css'
import { useEffect } from 'react';
import { NavHashLink} from 'react-router-hash-link';
export function Links({ setTab,isTabOpen}) {
    
    let handleClick = () => {
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
                smooth
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