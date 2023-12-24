import { useEffect, useState } from 'react';
import Logo from '../assets/Logo.svg'
import { BurgerClose } from "react-burger-icons";
export function Nav() {
    const [menuSize, setMenuSize] = useState(24)
    const [isWindowResized, setIsWindowResized] = useState(false)
    const [isClosed, setIsClosed] = useState(false)
    window.onresize = () => {
        setIsWindowResized(true)
    }
    useEffect(() => {
        let currentWidth = window.innerWidth
        if(currentWidth < 700) {
            setMenuSize(30)
        } else if(currentWidth>= 700 && currentWidth < 1024) {
            setMenuSize(40)
        } else {
            setMenuSize(50)
        }
        setIsWindowResized(false)
    },[isWindowResized])
    return(
        <header onClick={() => console.log("header")}>
            <img src={Logo} id="logo" />
            <button id="burger"
            onClick={() => setIsClosed(!isClosed)}
            style={{
                width: "50px",
                height: "50px",
                display: "grid",
                placeItems: "center",
            }}
            >
            <BurgerClose isClosed={isClosed} />
            </button>
            
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