import { useState, useEffect } from "react"
import {useNavigate} from 'react-router'
import {MockLogin} from "../helper/MockAuthentication"
export default function Login() {
    let navigate = useNavigate();
    const [loginData, setLoginData] = useState({
        username: "",
        password: "",
    })
    const [errorMessage, setErrorMessage] = useState({
        usernameError : "",
        passwordError: "",
        credientialsError:""
    })
    function validateLogin() {
        
        if(loginData.username.length == 0) {
            setErrorMessage(prev => ({
                ...prev,
                usernameError: "Please enter your username"
            }))
        }
        if(loginData.password.length == 0) {
            setErrorMessage(prev => ({
                ...prev,
                passwordError: "Please enter your password."
            }))
        }
        

    }
    function handleLogin(e) {
        e.preventDefault();
        validateLogin();
        MockLogin(loginData.username, loginData.password).then(response => {
            navigate('/', { state: { user: response.data.email } }); // sent email so we can retrieve it afterward.
            localStorage.setItem(response.data.email, JSON.stringify(response.data))
            localStorage.setItem('isLoggedIn', 'true'); //remember that you are logged in
        }).catch(error => {
            console.log(error)
        })
    }
    function handleInputChange(e) {
        let name = e.target.name
        setLoginData(prev => ({
            ...prev, 
            [name] : e.target.value
        }))
    }
    function navigateToSignup() {
        navigate('/auth/signup')
    }
    return(
        <section id="Login" className="registration">
            <section className="wrapper">
                <h1>เข้าสู่ระบบ</h1>
                <form>
                    <div className="form_group">
                        <label for="username">บัญชีพนักงาน</label>
                        <input onChange={e=>handleInputChange(e)} name="username" />
                        {(errorMessage.usernameError.length > 0) ? <p>{errorMessage.usernameError}</p> : ""}
                    </div>
                    <div className="form_group">
                        <label for="password">รหัสผ่าน</label>
                        <input onChange={e=>handleInputChange(e)} name="password" type="password" />
                    </div>
                    <p onClick={navigateToSignup}>No account? Sign up here!</p>
                    <button onClick={e=>handleLogin(e)} type="submit">ค้นหา</button>
                </form>
            </section>
        </section>
    )
}