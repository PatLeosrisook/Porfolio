import Image from "next/image"
import Link from "next/link"
import '../CSS/Dashboard.css'
export default function DashBoardLayout({children} : {
    children: React.ReactNode
}) {
    return(
        <section id="Dashboard">
            <header >
                <Image src={"/icons/Movie.svg"} height={24} width={24} alt="Logo" />
                <ul>
                    <li>
                        <Link href="">
                            <Image src={'/icons/Dashboard.svg'} width={20} height={20} alt="Home icon"/>
                        </Link>
                    </li>
                    <li>
                        <Link href="">
                            <Image src={'/icons/Movie-icon.svg'} width={20} height={20} alt="Home icon"/>
                        </Link>    
                    </li>
                    <li>
                        <Link href="">
                            <Image src={'/icons/Tv-icon.svg'} width={20} height={20} alt="Home icon"/>
                        </Link>
                    </li>
                    <li>
                        <Link href="">
                            <Image src={'/icons/Saved-icon.svg'} width={20} height={20} alt="Home icon"/>
                        </Link>
                    </li>
                </ul>
                <div id="Profile">

                </div>
            </header>
            <section id="Content">
                <div id="SearchBox">
                    <Image src={'/icons/Search.svg'} width={24} height={24} alt="Search icon"/>
                    <input name="search" placeholder="Search for [item in here]" />
                </div>
                {children}
            </section>
        </section>
    )
}