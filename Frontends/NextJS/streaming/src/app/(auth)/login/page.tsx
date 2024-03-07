import Link from "next/link";

export default function Login() {
    return (
        <>
            <h2 className="card_title">Login</h2>
            <div className="form_group">
                <input name="Email" placeholder="Email address"/>
            </div>
            <div className="form_group">
                <input name="password" type="password" placeholder="Password"/>
                <Link href="/forgot-password">forgot password</Link>
            </div>
            <button className="cta register_cta">Login to your account</button>
            <p>Don't have an account? <Link href="/signup">Sign up</Link></p>
        </>
    )
}