import Home from "../assets/icon-nav-home.svg"
import Bookmark from "../assets/icon-nav-bookmark.svg"
import Movie from "../assets/icon-nav-movies.svg"
import TV from "../assets/icon-nav-tv-series.svg"
import Logo from '../assets/logo.svg'
import { NavLink, Outlet } from "react-router-dom"
import SearchBar from "./searchBar"
export default function Nav() {
    return (
        <section id="ContentContainer">
            <header id="Header">
                <img src={Logo} alt="Logo" />
                <nav id="Nav">
                    <ul className="Links">
                        <li className="link">
                            <NavLink to="/Home">
                                <img src={Home} alt="" />
                            </NavLink>
                        </li>
                        <li className="link">
                            <NavLink to="Movie">
                                <img src={Movie} alt="" />
                            </NavLink>
                        </li>
                        <li className="link">
                            <NavLink to="TV">
                                <img src={TV} alt="" />
                            </NavLink>
                        </li>
                        <li className="link">
                            <NavLink to="Bookmark">
                                <img src={Bookmark} alt="" />
                            </NavLink>
                        </li>
                    </ul>
                </nav>
                <div id="UserProfile">
            
                </div>
            </header>
            <div id="Content">
                <SearchBar/>
                <Outlet />
            </div>
        </section>
    )
}