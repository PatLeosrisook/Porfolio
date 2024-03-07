import Link from "next/link";

export default function SignUp() {
    return(
        <>
            <h2>Create account</h2>
            <div className="form_group">
                <input name="Email" type="email" placeholder="Email address"/>
            </div>
            <div className="form_group">
                <input name="Password" type="Password" placeholder="Password"/>
            </div>
            <div className="form_group">
                <input name="Confirm Password" type="Password" placeholder="Confirm Password"/>
            </div>
            <button className="cta register_cta">Create an account</button>
            <p>Already have an accout? <Link href="/login">Login</Link></p>
        </>
    )
}