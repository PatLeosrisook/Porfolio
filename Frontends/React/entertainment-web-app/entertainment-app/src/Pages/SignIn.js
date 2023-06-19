import Input from "../Components/Input"
export function SignIn({submitForm, handleChange,value}) {
    return(
        <div className="register_form signin">
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
                <button onClick={submitForm}>Login into your account</button>
                <p>Don't have account? <span id="to_signUp">Sign Up</span></p>
            </form>
        </div>
    )
}