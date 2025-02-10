import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEyeSlash, faEye, faXmark, faCheck } from "@fortawesome/free-solid-svg-icons"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router"
import { MockSignup } from "../helper/MockAuthentication";
export default function Signup() {
    let navigate = useNavigate();
    const [isPasswordVisible, setIsPasswordVisible] = useState(false)
    const [userData, setUserData] = useState({
        email: "",
        username: "",
        password: "",
        userID: ""
    })
    const [passwordValidity, setPasswordValidity] = useState({
        characterLength: false, 
        specialChars: false, 
        capitalLetter: false
    })
    const [errorMessage, setErrorMessage] = useState("")
    function validation() {
        if(userData.email.length == 0 || userData.username == 0 || userData.password.length == 0) {
            setErrorMessage("Please fill all the blanks")
            return; 
        } else {
            setErrorMessage("")
        }
        if(!userData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
            setErrorMessage("Please enter a valid email address.")
            return;
        } else {
            setErrorMessage("")
        }
        
        for(let [key, value] in passwordValidity) {
            if(value == false) {
                setErrorMessage("Please make sure your password follow the guideline below.")
                return; 
            } else {
                setErrorMessage("")
            }
        }
        if(errorMessage.length == 0) {
            return true;
        }
    }
    function handleInputChange(e){
        let name = e.target.name
        let value = e.target.value
        if(name == "password") {
            setPasswordValidity({
                characterLength: (value.length >= 8) ? true : false, 
                capitalLetter : (value.match(/[A-Z]/)) ? true : false ,
                specialChars :  (value.match(/^(?=.*[!@#$%^&*]).+$/)) ? true : false
            })
        }
        setUserData(prev => ({
            ...prev, 
            [name] : e.target.value
        }))
    }
    function handleCreateAccount(e) {
        e.preventDefault();
        if(validation()) {
            // localStorage.setItem(userData.email)
            MockSignup(userData.username, userData.email, userData.password).then(response => {
                console.log("Sign up", response.data)
                navigate('/', { state: { user: response.data.email } }); // sent email so we can retrieve it afterward.
                localStorage.setItem('isLoggedIn', true)
            }).catch(error =>{
                console.log(error)
            })
        }

    }
    function handleTogglePassword() {
        setIsPasswordVisible(!isPasswordVisible)
    }
    function navigateToLogin() {
        navigate('/auth/login')
    }
    useEffect(() => {

    },[passwordValidity])
    return(
        <section className="registration signup">
            <h1>สมัครสมาชิค</h1>
            <section class="wrapper">
                <form>
                    <div className="form_group">
                        <label for="email">อีเมลล์</label>
                        <input  onChange={e => handleInputChange(e)} name="email" type="email" />
                    </div>
                    <div className="form_group">
                        <label for="username">บัญชีผู้ใข้</label>
                        <input  onChange={e => handleInputChange(e)} name="username" type="text" />
                    </div>
                    <div className="form_group password">
                        <label for="password">รหัสผ่าน</label>
                        <div className="password-wrap">
                            <input onChange={e => handleInputChange(e)}  name="password" type={(isPasswordVisible) ? 'text': 'password'} />
                            <FontAwesomeIcon onClick={handleTogglePassword} icon={(isPasswordVisible) ? faEye: faEyeSlash} />
                        </div>
                    </div>
                    <p onClick={navigateToLogin}>เป็นสมาชิคอยู่แล้ว</p>
                    <button onClick={e => handleCreateAccount(e)} type="submit">สมัคร</button>
                </form>
            </section>
            <section id="password-best-practice">
                <ul>
                    <li>
                        {
                            (passwordValidity.characterLength) ? <FontAwesomeIcon icon={faCheck} /> : <FontAwesomeIcon icon={faXmark} />
                        }
                        
                        <p>Password must be at least 8 characters long.</p>
                    </li>
                    <li>
                        {
                            (passwordValidity.specialChars) ? <FontAwesomeIcon icon={faCheck} /> : <FontAwesomeIcon icon={faXmark} />
                        }
                        <p>Password must be contains at least one special character (e.g., !, @, #, $, %, ^, &).</p>
                    </li>
                    <li>
                        {
                            (passwordValidity.capitalLetter) ? <FontAwesomeIcon icon={faCheck} /> : <FontAwesomeIcon icon={faXmark} />
                        }
                        <p>Password must be contains at least one captial letter.</p>
                    </li>
                </ul>
            </section>
            <footer>
                {/* <p>Please note: register with the same email inside JWT token given in the brief will allow </p> */}
            </footer>
        </section>
    )
}