import { SignIn } from "./SignIn";
import Logo from '../assets/logo.svg'
export default function Registrations() {
    return (
        <section id="Register">
            <img src={Logo} alt="Logo" />
            <SignIn/>            
        </section>
    )
}