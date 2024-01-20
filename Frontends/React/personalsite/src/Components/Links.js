import '../SCSS/home.css'
import { Link } from "react-router-dom";
import { useEffect } from 'react';
export function Links({HomeRef, AboutRef,ContactRef}) {
    let handleClick = (name) => {
        console.log(name, AboutRef.current)
        switch(name) {
            case "homeRef":
                HomeRef.current.scrollIntoView()
                break;
            case 'aboutRef' :
                AboutRef.current.scrollIntoView({behavior: 'smooth'})
                break;
            case "contactRef":
                ContactRef.current.scrollIntoView({behavior: 'smooth'})
                break;
            
        }
    }

    useEffect(() => {
        console.log("link", HomeRef, AboutRef, ContactRef)
    })
    return (
        <ul className="Links">
            <li><Link onClick={() => handleClick("homeRef")}  className="active" to="">Home</Link></li>
            <li><Link onClick={() => handleClick("aboutRef")} to="#About">About</Link></li>
            <li><Link to="">Works</Link></li>
            <li><Link onClick={() => handleClick("contactRef")} to="#Contactx">Contact</Link></li>
        </ul>
    )
}