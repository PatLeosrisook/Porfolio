import Image from "next/image"
import Link from "next/link"
import '../CSS/Dashboard.css'
export default function DashboardLayout({children} : {
    children : React.ReactNode 
}) {
    return (
        <section id="Dashboard">
            <header>
                <Image src={'/icons/Movie.svg'} width={20} height={20} alt="Logo"/>
                <ul>
                    <li>
                        <Link href="/Dasboard/Home">
                            <Image src={'/icons/Dashboard.svg'} width={24} height={24} alt="home"/>
                        </Link>
                    </li>
                    <li>
                        <Link href="/Dashboard/Movie">
                            <Image src={'/icons/Movie-icon.svg'} width={24} height={24} alt="home"/>
                        </Link>
                    </li>
                    <li>
                        <Link href="/Dashboard/TV">
                            <Image src={'/icons/Tv-icon.svg'} width={24} height={24} alt="home"/>
                        </Link>
                    </li>
                    <li>
                        <Link href="">
                            <Image src={'/icons/Saved-icon.svg'} width={24} height={24} alt="home"/>
                        </Link>
                    </li>
                </ul>
                <div id="Profile">

                </div>
            </header>
            <section id="Content">
                <div id="SearchBox">
                    <Image src={'/icons/Search.svg'} width={20} height={20} alt="Search icon" />
                    <input name="search" placeholder="Search[] here"/>
                </div>
                {children}
            </section>
        </section>
    )
}