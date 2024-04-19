'use client';
import Link from "next/link";
import {useEffect, useState} from 'react'
import { useRouter } from "next/navigation"; 
import axios from "axios";
interface form {
    email: string,
    password: string,
    confirm_password: string, 
    email_error: string,
    password_error: string, 
    confirm_password_error: string,
}
export default function SignUp() {
    const router = useRouter()
    const [formData, setFormData] = useState<form>({
        email: "",
        password: "", 
        confirm_password : "", 
        email_error: "",
        password_error: "",
        confirm_password_error: "",
    })
    let handleChange = (e : React.ChangeEvent<HTMLInputElement>) => {
        // console.log(e.target.value, e)
        let name = e.target.name;
        if(name.split(" ").length > 1) {
            name = name.toLowerCase().replace(" ", "_")
        }
        setFormData(prevState => ({
            ...prevState, 
            [name]: e.target.value
        }));
    }
    let handleSubmit = (e) => {
        e.preventDefault();
        let isValid = false
        let email = document.querySelector("input[type='email']")
        let password = document.querySelector("input[type='Password']")
        let confirmPassword = document.querySelector("input[name='Confirm Password']")
        if(formData.email.length < 1) {
            // invalid email
            email?.classList.add("error_input")
            isValid = false
            setFormData(prevState => ({
                ...prevState, 
                email_error: "invalid email"
            }))
        } else {
            setFormData(prevState => ({
                ...prevState, 
                email_error: ""
            }))
            email?.classList.remove("error_input")
            isValid = true
            //remove
        }
        if(formData.password.length < 1) {
            // invalid password
            password?.classList.add("error_input")
            isValid = false
            setFormData(prevState => ({
                ...prevState, 
                password_error: "invalid password"
            }))
        } else {
            setFormData(prevState => ({
                ...prevState, 
                password_error: ""
            }))
            password?.classList.remove("error_input")
            isValid = true
            //remove
        }
        if(formData['confirm_password'].length < 1) {
            // invalid confirmation
            confirmPassword?.classList.add("error_input")
            isValid = false
            setFormData(prevState => ({
                ...prevState, 
                confirm_password_error: "invalid password"
            }))
        } else {
            //remove
            confirmPassword?.classList.remove("error_input")
            setFormData(prevState => ({
                ...prevState, 
                confirm_password_error: ""
            }))
            isValid = true
        }

        if(formData.email.length > 0 && formData.password.length > 0 && formData.confirm_password.length> 0) {
            if(formData.password !== formData.confirm_password) {
                setFormData(prevState => ({
                    ...prevState, 
                    password_error: "Password don't match",
                    confirm_password_error: "Password don't match",
                }))
                confirmPassword?.classList.add("error_input")
                password?.classList.add("error_input")
                isValid = false
            } else {
                confirmPassword?.classList.remove("error_input")
                password?.classList.remove("error_input")
                setFormData(prevState => ({
                    ...prevState, 
                    password_error: "",
                    confirm_password_error: "",
                }))

                isValid = true
            }
            if(formData.email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g) == null) {
                setFormData(prevState => ({
                    ...prevState, 
                    email_error: "Invalid email pattern"
                }))
                isValid = false
                email?.classList.add('error_input')
                
            } else {
                email?.classList.remove('error_input')
                setFormData(prevState => ({
                    ...prevState, 
                    email_error: ""
                }))
                isValid = true
            }
        }

        if(isValid) {
            //go to create account
            let data = {
                Type: "Signup", 
                Email: formData['email'],
                Password: formData['password']
            }
            return axios.post('http://localhost:3000/api/data', data, {
                headers: {
                  'Content-Type': 'application/json',
                },
              }).then(response => {
                // push new email to db
                email?.classList.remove("error_input")
                setFormData(prevState => ({
                    ...prevState, 
                    email_error:""
                }))
                router.push('Create_Profile')
              }).catch(err => {
                console.error("oops", err.response.data.error);
                email?.classList.add("error_input")
                setFormData(prevState => ({
                    ...prevState, 
                    email_error: err.response.data.error
                }))
                return false;
              });
        } else {
            console.log("not valid")
        }
    }
    useEffect(() => {
    })
    return(
        <>
            <h2>Create account</h2>
            <div className="form_group">
                <input onChange={e=> handleChange(e)}  name="email" type="email" placeholder="Email address"/>
                <p className="error_message">{formData.email_error}</p>
            </div>
            <div className="form_group">
                <input onChange={e=> handleChange(e)}  name="password" type="Password" placeholder="Password"/>
                <p className="error_message">{formData.password_error}</p>
            </div>
            <div className="form_group">
                <input onChange={e=> handleChange(e)}  name="Confirm Password" type="Password" placeholder="Confirm Password"/>
                <p className="error_message">{formData.confirm_password_error}</p>
            </div>
            <button onClick={e => handleSubmit(e)} className="cta register_cta">Create an account</button>
            <p>Already have an accout? <Link href="/login">Login</Link></p>
        </>
    )
}