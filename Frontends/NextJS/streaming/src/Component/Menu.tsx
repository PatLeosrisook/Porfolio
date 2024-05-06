"use client";
import Link from "next/link"
import Image from "next/image"
import { useSearchParams } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPerson, faTicket, faTv, faHome, faBookmark} from "@fortawesome/free-solid-svg-icons";
export default function Menu() {
    const searchParams = useSearchParams()
    const user = searchParams?.get('user:') //TODO:: find way to remember this 
    return (
        <section id="Menu"> 
              <ul>
                    <li>
                        <Link className="active" href={`/${user}/Home`}>
                            <FontAwesomeIcon icon={faHome} />
                            <p>Home</p>
                        </Link>
                    </li>
                    <li>
                        <Link href={`/${user}/Movie`}>
                            <FontAwesomeIcon icon={faTicket} />
                            <p>Movies</p>
                        </Link>
                    </li>
                    <li>
                        <Link href={`/${user}/TV`}>
                            <FontAwesomeIcon icon={faTv} />
                            <p>TVs</p>
                        </Link>
                    </li>
                    <li>
                        <Link href="">
                            <FontAwesomeIcon icon={faBookmark} />
                            <p>Saved</p>
                        </Link>
                    </li>
                    <li>
                        <Link href="">
                            <FontAwesomeIcon icon={faPerson} />
                            <p>Profile</p>
                        </Link>
                    </li>
                </ul>
        </section>
    )
}