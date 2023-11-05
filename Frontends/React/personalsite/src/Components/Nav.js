import { useEffect, useState } from 'react';
import Logo from '../assets/Logo.svg'
import UseAnimation from "react-useanimations";
import menu2 from 'react-useanimations/lib/menu2'
export function Nav() {
    const [menuSize, setMenuSize] = useState(24)
    const [isWindowResized, setIsWindowResized] = useState(false)
    window.onresize = () => {
        setIsWindowResized(true)
    }
    useEffect(() => {
        let currentWidth = window.innerWidth
        if(currentWidth < 700) {
            setMenuSize(24)
        } else if(currentWidth>= 700 && currentWidth < 1024) {
            setMenuSize(40)
        } else {
            setMenuSize(50)
        }
        setIsWindowResized(false)
    },[isWindowResized])
    return(
        <header>
            <img src={Logo} id="logo" />
            <UseAnimation animation={menu2} size={menuSize} strokeColor={"white"} />
            <nav id="Links">
                <ul className="Links">
                    <li><a href="">Home</a></li>
                    <li><a href="">About</a></li>
                    <li><a href="">Works</a></li>
                    <li><a href="">Contact</a></li>
                </ul>
            </nav>
        </header>
    )
}