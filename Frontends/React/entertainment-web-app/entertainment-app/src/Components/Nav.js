import Home from "../assets/icon-nav-home.svg"
import Bookmark from "../assets/icon-nav-bookmark.svg"
import Movie from "../assets/icon-nav-movies.svg"
import TV from "../assets/icon-nav-tv-series.svg"
import Logo from '../assets/logo.svg'
export default function Nav() {
    return (
        <header id="Header">
            <img src={Logo} alt="Logo" />
            <nav id="Nav">
                <ul className="Links">
                    <li className="link">
                        <a>
                            <img src={Home} alt="" />
                        </a>
                    </li>
                    <li className="link">
                        <a>
                            <img src={Movie} alt="" />
                        </a>
                    </li>
                    <li className="link">
                        <a>
                            <img src={TV} alt="" />
                        </a>
                    </li>
                    <li className="link">
                        <a>
                            <img src={Bookmark} alt="" />
                        </a>
                    </li>
                </ul>
            </nav>
            <div id="UserProfile">
                
            </div>
        </header>
    )
}