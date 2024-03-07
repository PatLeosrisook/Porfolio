import Image from "next/image";
// import styles from "./page.module.css";
import logo from '../../public/Movie.svg';
import './CSS/style.css'
export default function Home() {
  return (
    <main>
      <header>
        <Image src={`/icons/Movie.svg`} width={20} height={20} alt="Background image" />
        <p>Login</p>
      </header>
      <article id="Heading">
        <h1>Stream me</h1>
        <p>Free streaming service. Watch anywhere and watch anything you want.</p>
        <button id="register_cta" className="cta">Register</button>
      </article>
    </main>
  );
}
