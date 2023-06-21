import { RegisterCard, SignIn } from "./RegisterCard";
import Logo from '../assets/logo.svg'
import Input from "../Components/Input";
export default function Registrations() {
    let signUpCard = (
        <RegisterCard
                PageName={"Sign up"}
                Button={
                    {
                        className: "signUp_btn",
                        text: "Create an account",

                    }
                }
                Alternative={
                    {
                        text:"Already have an account?",
                        className: "reg_signUp",
                        redirect: "Login"
                    }
                }

            >
                <Input
                    Label={"Email address"}
                    attribute={{id:"Email", class:"Email_input"}}
                    type={"email"}
                    // handleChange={handleChange}
                    // value={value}
                    Placeholder={"Email address"}
                />
                <Input
                    Label={"Password"}
                    attribute={{id:"Password", class:"Pass_input"}}
                    type={"password"}
                    // handleChange={handleChange}
                    // value={value}
                    Placeholder={"Password"}
                />
                <Input
                    Label={"Repeat password"}
                    attribute={{id:"Repeat_password", class:"RepeatPass_input"}}
                    type={"password"}
                    // handleChange={handleChange}
                    // value={value}
                    Placeholder={"Repeat password"}
                />
            </RegisterCard>    
    )
    let signInCard = (
        <RegisterCard
                PageName={"Login"}
                Button={
                    {
                        className: "login_btn",
                        text: "Login into your account",

                    }
                }
                Alternative={
                    {
                        text:"Don't have an account?",
                        className: "reg_signIn",
                        redirect: "Sign up"
                    }
                }

            >
                <Input
                    Label={"Email address"}
                    attribute={{id:"Email", class:"Email_input"}}
                    type={"email"}
                    // handleChange={handleChange}
                    // value={value}
                    Placeholder={"Email address"}
                />
                <Input
                    Label={"Password"}
                    attribute={{id:"Password", class:"Pass_input"}}
                    type={"password"}
                    // handleChange={handleChange}
                    // value={value}
                    Placeholder={"Password"}
                />
            </RegisterCard>  
    )
    return (
        <section id="Register">
            <img src={Logo} alt="Logo" />
               {signInCard}
                   
        </section>
    )
}