"use client";
import Link from "next/link"
import Image from "next/image"
import { useSearchParams } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { faGear, faTicket, faTv, faHome, faBookmark, faSignOut} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { usePathname } from "next/navigation";
import {useDispatch, useSelector} from 'react-redux'
import { setPrevRoute } from "@/store/routeSlice";
import {useRouter} from 'next/navigation';
export default function Menu({handleOpenMenu, currentPage, setCurrentPage, setPreviousSelectedPage} : 
    {handleOpenMenu: Function, 
        currentPage: String,  
        setCurrentPage: Function, 
        setPreviousSelectedPage: Function}) {
            // Access the previous route from the Redux store
            const dispatch = useDispatch();
            const prevRoute = useSelector((state) => state.route.prevRoute);
            const router = useRouter();
            const pathname = usePathname();
            const currentPath = usePathname();
            const [previousPath, setPreviousPath] = useState<string | null>(null);
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
                //TODO: TEST TRACK ROUTE
                console.log("Path name", previousPath)
                // Update previous route whenever the current route changes
                const handleRouteChange = () => {
                    setPreviousPath(currentPath); // Store the current path as previous before it changes
                };
                
                handleRouteChange(); // Update previous path when the component mounts
                if(currentPath !== previousPath) {
                    let prevPath = previousPath.split("/")
                    let curPath = currentPath.split("/")
                    if(prevPath.length > 3) {
                        //account paht which is like /user/Account/profile_setting
                        document.querySelector(`.${prevPath[3]}`)?.classList.remove('active')
                    } else {
                        document.querySelector(`.${prevPath[prevPath.length - 1]}`)?.classList.remove('active')
                    }
                    if(curPath.length > 3) {
                        document.querySelector(`.${curPath[3]}`)?.classList.add('active')
                        
                    } else {
                        document.querySelector(`.${curPath[curPath.length - 1]}`)?.classList.add('active')

                    }
                }
            },[currentPath])
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