"use client";
import Link from "next/link"
import Image from "next/image"
import { useSearchParams } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { faGear, faTicket, faTv, faHome, faBookmark, faSignOut} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { useUser } from "@/helper/userContext";
import {useRouter} from 'next/navigation';
export default function Menu({handleOpenMenu, currentPage, setCurrentPage, setPreviousSelectedPage} : {handleOpenMenu: Function, currentPage: String,  setCurrentPage: Function, setPreviousSelectedPage: Function}) {
    const router = useRouter();
    
    const [currentUser , setCurrentUser] = useState<String>("") // if user going to select a link, that mean it is already toggled.
    let handleSelect = (e : Event) => {
        handleOpenMenu(false)
        let page = e.target.textContent
        setPreviousSelectedPage(currentPage) // store what was the last page so we can remove the active style
        setCurrentPage(page)
    }
    let logout = async () => {
        handleOpenMenu(false)
        await axios.get('/api/users/logout')
        router.push('/')
    }
    
    let getUser = async () => {
        let user = await axios.get('/api/users/me')
        console.log("user id", user.data.data.username)
        setCurrentUser(user.data.data.username)
    }
    useEffect(() => {
        getUser();
    })
    return (
        <section id="Menu"> 
              <ul>
                  
                    <li>
                        <Link onClick={e=>handleSelect(e)}  href={`/${currentUser}/Movie`}>
                            <FontAwesomeIcon icon={faTicket} />
                            <p className="active">Movies</p>
                        </Link>
                    </li>
                    <li>
                        <Link onClick={e=>handleSelect(e)}   href={`/${currentUser}/TV`}>
                            <FontAwesomeIcon icon={faTv} />
                            <p>TV Shows</p>
                        </Link>
                    </li>
                    <li>
                        <Link onClick={e=>handleSelect(e)}  href={`/${currentUser}/watchlist`}>
                            <FontAwesomeIcon icon={faBookmark} />
                            <p>Watchlist</p>
                        </Link>
                    </li>
                    <li>
                        <Link onClick={e=>handleSelect(e)}  href={`/${currentUser}/Account/profile_setting`}>
                            <FontAwesomeIcon icon={faGear} />
                            <p >Account</p>
                        </Link>
                    </li>
                    <li>
                        <Link onClick={logout}  href="">
                            <FontAwesomeIcon icon={faSignOut} />
                            <p>logout</p>
                        </Link>
                    </li>
                </ul>
        </section>
    )
}