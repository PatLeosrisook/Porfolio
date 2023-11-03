import Logo from '../assets/Logo.svg'
export function Nav() {
    return(
        <header>
            <img src={Logo} id="logo" />
            <div className="icon-wrap">
                <img src="" id="hamburger"/>
            </div>
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