import Image from "next/image";
import styles from "./page.module.css";
import logo from '../../public/Movie.svg'
export default function Home() {
  return (
    <main className={styles.main}>
      <header>
        <img src={logo} alt="Logo"/>
        <p>Login</p>
      </header>
      <article>
        <h1>Stream me</h1>
        <p>Free streaming service. Watch anywhere and watch anything you want.</p>
        <button id="CTA" className="register_cta">Register</button>
      </article>
    </main>
  );
}
