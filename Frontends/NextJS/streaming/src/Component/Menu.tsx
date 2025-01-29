"use client";
import Link from "next/link"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { faGear, faTicket, faTv, faBookmark, faSignOut} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { usePathname } from "next/navigation";
import {useRouter} from 'next/navigation';
export default function Menu({handleOpenMenu} : 
    {handleOpenMenu: Function}) {
            // Access the previous route from the Redux store
            const router = useRouter();
            const pathname = usePathname();
            let isActive = (href) => pathname === href
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
            })
            return (
                <section id="Menu"> 
                    <ul>            
                            <li>
                                <Link onClick={e=>handleSelect(e)} className={isActive(`/${currentUser}/Movie`) ? 'active' : ''}  href={`/${currentUser}/Movie`}>
                                    <FontAwesomeIcon icon={faTicket} />
                                    <p className="Movie">Movies</p>
                                </Link>
                            </li>
                            <li>
                                <Link onClick={e=>handleSelect(e)} className={isActive(`/${currentUser}/TV`) ? 'active' : ''} href={`/${currentUser}/TV`}>
                                    <FontAwesomeIcon icon={faTv} />
                                    <p className="TV">TV Shows</p>
                                </Link>
                            </li>
                            <li>
                                <Link onClick={e=>handleSelect(e)} className={isActive(`/${currentUser}/watchlist`) ? 'active' : ''} href={`/${currentUser}/watchlist`}>
                                    <FontAwesomeIcon icon={faBookmark} />
                                    <p className="watchlist">Watchlist</p>
                                </Link>
                            </li>
                            <li>
                                <Link onClick={e=>handleSelect(e)} className={isActive(`/${currentUser}/Account/profile_setting`) ? 'active' : ''} href={`/${currentUser}/Account/profile_setting`}>
                                    <FontAwesomeIcon icon={faGear} />
                                    <p className="Account" >Account</p>
                                </Link>
                            </li>
                            <li>
                                <Link onClick={e=>handleSelect(e)} className={isActive(`/${currentUser}/LoadingMock`) ? 'active' : ''} href={`/${currentUser}/LoadingMock`}>
                                    <FontAwesomeIcon icon={faGear} />
                                    <p className="LoadMock" >LoadMock</p>
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