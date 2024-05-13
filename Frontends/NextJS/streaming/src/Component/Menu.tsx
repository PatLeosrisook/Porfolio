"use client";
import Link from "next/link"
import Image from "next/image"
import { useSearchParams } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { faPerson, faTicket, faTv, faHome, faBookmark} from "@fortawesome/free-solid-svg-icons";
export default function Menu({handleOpenMenu} : {handleOpenMenu: Function}) {
    const searchParams = useSearchParams()
    const [isToggled, setIsToggled] = useState<Boolean>(true) // if user going to select a link, that mean it is already toggled.
    const user = searchParams?.get('user:') //TODO:: find way to remember this 
    let handleSelect = () => {
        // setIsToggled(!isToggled)
        handleOpenMenu(false)
        
    }
    useEffect(() => {
    },[isToggled])
    return (
        <section id="Menu"> 
              <ul>
                    <li>
                        <Link onClick={handleSelect}  className="active" href={`/${user}/Home`}>
                            <FontAwesomeIcon icon={faHome} />
                            <p>Home</p>
                        </Link>
                    </li>
                    <li>
                        <Link onClick={handleSelect}  href={`/${user}/Movie`}>
                            <FontAwesomeIcon icon={faTicket} />
                            <p>Movies</p>
                        </Link>
                    </li>
                    <li>
                        <Link onClick={handleSelect}  href={`/${user}/TV`}>
                            <FontAwesomeIcon icon={faTv} />
                            <p>TVs</p>
                        </Link>
                    </li>
                    <li>
                        <Link onClick={handleSelect}  href="">
                            <FontAwesomeIcon icon={faBookmark} />
                            <p>Saved</p>
                        </Link>
                    </li>
                    <li>
                        <Link onClick={handleSelect}  href="">
                            <FontAwesomeIcon icon={faPerson} />
                            <p>Profile</p>
                        </Link>
                    </li>
                </ul>
        </section>
    )
}