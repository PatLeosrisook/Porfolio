'use client';
import Image from "next/image";
// import styles from "./page.module.css";
import logo from '../../public/Movie.svg';
import './CSS/style.css'
import Link from "next/link";
import { useRouter } from "next/navigation";
export default function Home() {
  let router = useRouter()
  let handleNavigate = () => {
    router.push('/signup')
  }
  return (
    <main>
      <header>
        <Image src={`/icons/Logo.svg`} width={20} height={20} alt="Background image" />
        <Link href="/login">Login</Link>
      </header>
      <article id="Heading">
        <h1>Stream me</h1>
        <p>Free streaming service. Watch anywhere and watch anything you want.</p>
        <button onClick={handleNavigate} id="register_cta" className="button-style">Register</button>
      </article>
    </main>
  );
}
