'use client';
import Link from "next/link";

export default function Login() {
    let handleChange = (e) => {
        console.log(e.target.value)
       
    }
    return (
        <>
            <h2 className="card_title">Login</h2>
            <div className="form_group">
                <input onChange={e => handleChange(e)} name="Email" placeholder="Email address"/>
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