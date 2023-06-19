import Input from "../Components/Input"
export function SignIn({submitForm, handleChange,value}) {
    return(
        <div className="register_form signin">
            <h1>Login</h1>
            <form id="SignIn" action="">
                <Input
                    Label={"Email address"}
                    attribute={{id:"Email", class:"Email_input"}}
                    type={"email"}
                    handleChange={handleChange}
                    value={value}
                />
                <Input
                    Label={"Password"}
                    attribute={{id:"Password", class:"Pass_input"}}
                    type={"password"}
                    handleChange={handleChange}
                    value={value}
                />
                <button className="reg_btn signIn_btn" onClick={submitForm}>Login into your account</button>
                <p>Don't have account? <span className="reg_nav">Sign Up</span></p>
            </form>
        </div>
    )
}