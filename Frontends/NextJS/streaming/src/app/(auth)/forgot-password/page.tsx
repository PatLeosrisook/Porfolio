import Link from "next/link";

export default function ForgotPassword() {
    return (
        <>
            <h2>Forgot password</h2>
            <input type="email" placeholder="Email address"/>
            <button className="cta register_cta">Send reset email</button>
            <p>Go back to <Link href="/login">Login</Link></p>
        </>
    )
}