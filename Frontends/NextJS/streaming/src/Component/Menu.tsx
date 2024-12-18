"use client";
import Link from "next/link"
import Image from "next/image"
import { useSearchParams } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { faGear, faTicket, faTv, faHome, faBookmark, faSignOut} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { usePathname } from "next/navigation";
import {useSelector} from 'react-redux'

import {useRouter} from 'next/navigation';
export default function Menu({handleOpenMenu, currentPage, setCurrentPage, setPreviousSelectedPage, previousPage} : 
    {handleOpenMenu: Function, 
        currentPage: String,  
        setCurrentPage: Function, 
        setPreviousSelectedPage: Function, 
        previousPage: String}) {
            // Access the previous route from the Redux store


    const router = useRouter();
    const currentPath = usePathname();
    const [currentUser , setCurrentUser] = useState<String>("") // if user going to select a link, that mean it is already toggled.
    let handleSelect = (e : Event) => {
        handleOpenMenu(false)
        let page = e.target.textContent
        // setPreviousSelectedPage(currentPage) // store what was the last page so we can remove the active style
        setCurrentPage(page)
    }
    let logout = async () => {
        handleOpenMenu(false)
        await axios.get('/api/users/logout')
        router.push('/')
    }
    
    let getUser = async () => {
        let user = await axios.get('/api/users/me')
        setCurrentUser(user.data.data.username)
    }
    useEffect(() => {
        getUser();
        let path = currentPath?.split("/")[currentPath.split("/").length - 1]
        console.log("Menu run", currentPath, "current page: "  , path, "prev route", previousPage, currentPath?.split("/"))
        console.log(document.referrer)
        // if(currentPath?.split("/").length > 3) {
        //     console.log("Account")
        //     path = currentPath?.split("/")[3]
        // }
        document.querySelector(`.${path}`)?.classList.add('active')

        // document.querySelector(`.${previousPage}`)?.classList.remove('active')
        if(previousPage !== path) {
            console.log("NOT", previousPage, path)
            setPreviousSelectedPage(path)
        }
    })
    return (
        <section id="Menu"> 
              <ul>
                  
                    <li>
                        <Link onClick={e=>handleSelect(e)}  href={`/${currentUser}/Movie`}>
                            <FontAwesomeIcon icon={faTicket} />
                            <p className="Movie">Movies</p>
                        </Link>
                    </li>
                    <li>
                        <Link onClick={e=>handleSelect(e)}   href={`/${currentUser}/TV`}>
                            <FontAwesomeIcon icon={faTv} />
                            <p className="TV">TV Shows</p>
                        </Link>
                    </li>
                    <li>
                        <Link onClick={e=>handleSelect(e)}  href={`/${currentUser}/watchlist`}>
                            <FontAwesomeIcon icon={faBookmark} />
                            <p className="watchlist">Watchlist</p>
                        </Link>
                    </li>
                    <li>
                        <Link onClick={e=>handleSelect(e)}  href={`/${currentUser}/Account/profile_setting`}>
                            <FontAwesomeIcon icon={faGear} />
                            <p className="Account" >Account</p>
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