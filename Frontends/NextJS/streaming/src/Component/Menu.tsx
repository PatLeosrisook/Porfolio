"use client";
import Link from "next/link"
import Image from "next/image"
import { useSearchParams } from "next/navigation";
export default function Menu() {
    const searchParams = useSearchParams()
    const user = searchParams?.get('user:') //TODO:: find way to remember this 
    return (
        <section id="Menu"> 
              <ul>
                    <li>
                        <Link href={`/${user}/Home`}>
                            <Image src={'/icons/Dashboard.svg'} width={24} height={24} alt="home"/>
                            <p>Home</p>
                        </Link>
                    </li>
                    <li>
                        <Link href={`/${user}/Movie`}>
                            <Image src={'/icons/Movie-icon.svg'} width={24} height={24} alt="home"/>
                            <p>Movies</p>
                        </Link>
                    </li>
                    <li>
                        <Link href={`/${user}/TV`}>
                            <Image src={'/icons/Tv-icon.svg'} width={24} height={24} alt="home"/>
                            <p>TVs</p>
                        </Link>
                    </li>
                    <li>
                        <Link href="">
                            <Image src={'/icons/Saved-icon.svg'} width={24} height={24} alt="home"/>
                            <p>Saved</p>
                        </Link>
                    </li>
                    <li>
                        <Link href="">
                            <Image src={'/icons/Saved-icon.svg'} width={24} height={24} alt="home"/>
                            <p>Profile</p>
                        </Link>
                    </li>
                </ul>
        </section>
    )
}