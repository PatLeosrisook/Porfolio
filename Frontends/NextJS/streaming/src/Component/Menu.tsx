"use client";
import Link from "next/link"
import Image from "next/image"
import { useSearchParams } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { faGear, faTicket, faTv, faHome, faBookmark, faSignOut} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import {useRouter} from 'next/navigation';
export default function Menu({handleOpenMenu} : {handleOpenMenu: Function}) {
    const searchParams = useSearchParams()
    const router = useRouter();
    const [currentUser, setCurrentUser] = useState<String>("") // if user going to select a link, that mean it is already toggled.
    const user = searchParams?.get('user:') //TODO:: find way to remember this 
    let handleSelect = () => {
        handleOpenMenu(false)
        
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
                        <Link onClick={handleSelect}  className="active" href={`/${currentUser}/Home`}>
                            <FontAwesomeIcon icon={faHome} />
                            <p>Home</p>
                        </Link>
                    </li>
                    <li>
                        <Link onClick={handleSelect}  href={`/${currentUser}/Movie`}>
                            <FontAwesomeIcon icon={faTicket} />
                            <p>Movies</p>
                        </Link>
                    </li>
                    <li>
                        <Link onClick={handleSelect}  href={`/${currentUser}/TV`}>
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
                        <Link onClick={handleSelect}  href={`/${currentUser}/Account/profile_setting`}>
                            <FontAwesomeIcon icon={faGear} />
                            <p>Account</p>
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