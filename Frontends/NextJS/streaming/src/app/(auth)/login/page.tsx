'use client';
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
interface FormData {
    Email: string, 
    Password: string, 
}
export default function Login() {
    const router = useRouter()
    const[value, setValue] = useState<FormData>({
        Email:"",
        Password:"",
    })
    const[emailError, setEmailError] = useState<string>("")
    const[passwordError, setPasswordError] = useState<string>("")
    let handleChange = (e : React.ChangeEvent<HTMLInputElement>) => {
        // console.log(e.target.value, e)
        let name = e.target.name;
        setValue(prevState => ({
            ...prevState, 
            [name]: e.target.value
        }));
    }

    let handleSubmit = async (e : React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault()
        let email = document.querySelector("input[type='Email']")
        let pass = document.querySelector("input[type='password']")
        let isValid = false ;
        if(value.Email.length == 0 ) {
            email?.classList.add('error_input')
            setEmailError("Incorrect email")
            isValid = false 
        } else {
            email?.classList.remove('error_input')
            setEmailError("")
            isValid = true
            
        }
        if(value.Password.length == 0) {
            pass?.classList.add('error_input')
            setPasswordError("Incorrect Password")
            isValid = false
        } else {
            pass?.classList.remove('error_input')
            setPasswordError("")
            isValid = true

        }

        if(isValid) {

            let data = {
                email: value.Email,
                password: value.Password
            }
    
            await axios.post('/api/users/login', data).then(response => {
                console.log("logged in ")
                axios.get('/api/users/me').then(response => {
                    router.push(`/${response.data.data.username}/Home`)
                }).catch(err => {
                    console.log("Fetching username failed", err)
                })
            }).catch(error => {
                console.log("Error", error)
            })
        }
    }
    useEffect(() => {
        console.log(value)
    })
    return (
        <>
            <h2 className="card_title">Login</h2>
            <div className="form_group">
                <input onChange={e => handleChange(e)} name="Email" type="email" placeholder="Email address" required/>
                <p className="error_message">{emailError}</p>
            </div>
            <div className="form_group">
                <input onChange={e=> handleChange(e)} name="Password" type="password" placeholder="Password"/>
                <p className="error_message">{passwordError}</p>
                <Link href="/forgot-password">forgot password</Link>
            </div>
            <button onClick={e => handleSubmit(e)} className="cta register_cta">Login to your account</button>
            <p>Don't have an account? <Link href="/signup">Sign up</Link></p>
        </>
    )
}