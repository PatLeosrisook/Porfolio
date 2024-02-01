import '../SCSS/home.css'
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from 'react';
export function Links({HomeRef, AboutRef,ContactRef, handleOpenTab}) {
    let location = useLocation()
    const {pathname} = location
    let handleClick = (name) => {
        try {
            
            switch(name) {
                case "homeRef":
                    HomeRef.current.scrollIntoView({behavior: 'smooth'})
                    break;
                case 'aboutRef' :
                    AboutRef.current.scrollIntoView({behavior: 'smooth'})
                    break;
                case "contactRef":
                    ContactRef.current.scrollIntoView({behavior: 'smooth'})
                    break;
                
            }
        } catch(e) {
            console.log("erro ", e.message)
        }
    }
    window.onscroll = (e) => {
        if(pathname == "/") {
            //TODO:: fixed the bug
            let HomeY = document.querySelector("#Landing").getBoundingClientRect().y
            let AboutY = document.querySelector("#About").getBoundingClientRect().y
            let ContactY = document.querySelector("#Contact").getBoundingClientRect().y
            let Home = document.querySelector(".Home-link").classList
            let About = document.querySelector(".About-link").classList
            let Contact = document.querySelector(".Contact-link").classList
            // console.log(window.scrollY, HomeY, AboutY, ContactY)
            if(HomeY <= 0 && HomeY > -500) {
                Home.add("active")
            } else {
                Home.remove("active")
                
            }
            if(AboutY < 500 && AboutY > -500) {
                About.add("active")
            } else {
                About.remove("active")
                
            }
            if(ContactY < 500 && ContactY >= 0) {
                Contact.add("active")
            }  else {
                Contact.remove("active")
                
            }
        }
        
    }
    useEffect(() => {
        
    })
    return (
        <ul className="Links">
            <li><Link onClick={() => handleClick("homeRef")}  className="active Home-link" to="">Home</Link></li>
            <li><Link onClick={() => handleClick("aboutRef")} className="About-link" to="#About">About</Link></li>
            <li><Link to="/Work">Works</Link></li>
            <li><Link onClick={() => handleClick("contactRef")} className="Contact-link" to="#Contactx">Contact</Link></li>
        </ul>
    )
}