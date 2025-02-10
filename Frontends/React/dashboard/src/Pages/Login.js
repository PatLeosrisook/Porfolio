import { useState, useEffect } from "react"
import {useNavigate} from 'react-router'
import {MockLogin} from "../helper/MockAuthentication"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEyeSlash, faEye} from "@fortawesome/free-solid-svg-icons"
export default function Login() {
    let navigate = useNavigate();
    const [loginData, setLoginData] = useState({
        username: "",
        password: "",
    })
    const [isPasswordVisible, setIsPasswordVisible] = useState(false)
    const [errorMessage, setErrorMessage] = useState("")
    const [isFocused, setIsFocus] = useState(false)
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
            setErrorMessage(error.error)
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
    //Function to highlight password input
    function inputFocus() {
        setIsFocus(true)
    }
    function inputBlur() {
        setIsFocus(false)
    }
    
    function handleTogglePassword() {
        setIsPasswordVisible(!isPasswordVisible)
    }
    return(
        <section id="Login" className="registration">
            <section className="wrapper">
                <h1>เข้าสู่ระบบ</h1>
                <form>
                    <div className="form_group">
                        <label for="username">บัญชีพนักงาน</label>
                        <input onChange={e=>handleInputChange(e)} name="username" />
                        
                    </div>
                    <div  className={`form_group password`}>
                        <label for="password">รหัสผ่าน</label>
                        <div className={`password-wrap ${(isFocused) ? 'form-highlight' : '' }`}>
                            <input onChange={e => handleInputChange(e)} onFocus={inputFocus} onBlur={inputBlur} name="password" type={(isPasswordVisible) ? 'text': 'password'} />
                            <FontAwesomeIcon onClick={handleTogglePassword} icon={(isPasswordVisible) ? faEye: faEyeSlash} />
                        </div>
                        {(errorMessage.length > 0) ? <p className="error-message">{errorMessage}</p> : ""}
                    </div>
                    <p onClick={navigateToSignup}>No account? Sign up here!</p>
                    <button onClick={e=>handleLogin(e)} type="submit">ค้นหา</button>
                </form>
            </section>
        </section>
    )
}