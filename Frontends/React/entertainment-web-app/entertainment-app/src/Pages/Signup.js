import Input from "../Components/Input";

export default function SignUp({handleChange, value,submitForm}) {
    return(
        <div className="register_form signup">
            <form id="Signup">
                <Input
                    handleChange={handleChange}
                    value={value}
                    Label={"Email address"}
                    Type={"email"}
                    attribute={{id:"",class:""}}
                />
                <Input
                    handleChange={handleChange}
                    value={value}
                    Label={"Password"}
                    attribute={{id:"",class:""}}
                    Type={"password"}
                />
                <Input
                    handleChange={handleChange}
                    value={value}
                    Label={"Repeat password"}
                    Type={"password"}
                    attribute={{id:"",class:""}}
                />
                <button>Create an account</button>
                <p>Already have an account? <span id="to_Login">Login</span></p>
            </form>
        </div>
    )
}