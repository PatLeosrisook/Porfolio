'use client';
import Link from "next/link";
import {useEffect, useState} from 'react'
import { useRouter } from "next/navigation"; 
import axios from "axios";
import Image from "next/image";
import placeholderImage from '../../../../public/Images/PlaceHolderAvatar.png'
interface form {
    profilePicture: string,
    email: string,
    password: string,
    username: string,
    confirm_password: string, 
    email_error: string,
    password_error: string, 
    username_error: string,
}
export default function SignUp() {
    const router = useRouter()
    const [formData, setFormData] = useState<form>({
        profilePicture:"",
        email: "",
        password: "", 
        username: "",
        confirm_password : "", 
        email_error: "",
        password_error: "",
        username_error: "",
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
    let createQuery = (name : string, value : string) => {
        const params = new URLSearchParams()
        params.set(name, value)
        return params.toString()
    }
    let handleSubmit = (e) => {
        e.preventDefault();
        let isValid = false
        let email = document.querySelector("input[type='email']")
        let password = document.querySelector("input[type='Password']")
        let username = document.querySelector("input[name='username']")
        if(formData.email.length < 1) {
            // invalid email
            email?.classList.add("error_input")
            isValid = false
            setFormData(prevState => ({
                ...prevState, 
                email_error: "Please enter an email"
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
                password_error: "Please enter a password"
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
        if(formData.username.length < 1) {
            // invalid confirmation
            username?.classList.add("error_input")
            isValid = false
            setFormData(prevState => ({
                ...prevState, 
                username_error: "Please enter a username"
            }))
        } else {
            //remove
            username?.classList.remove("error_input")
            setFormData(prevState => ({
                ...prevState, 
                username_error: ""
            }))
            isValid = true
        }

        if(formData.email.length > 0 && formData.password.length > 0 && formData.username.length> 0) {
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
        } else {
           
        }

        if(isValid) {
            //go to create account
            let data = {
                // Type: "Signup", 
                avatar: formData.profilePicture,
                username: formData.username,
                email: formData['email'],
                password: formData['password']
            }
            return axios.post('/api/users/signup', data, {
                headers: {
                  'Content-Type': 'application/json',
                },
              }).then(response => {
                // push new email to db
                console.log("return from signup", response)
                email?.classList.remove("error_input")
                setFormData(prevState => ({
                    ...prevState, 
                    email_error:""
                }))
                router.push("Create_Profile" + "?" + createQuery("email", formData.email))
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
    let handleChangeProfilePic = (e) => {
        let profilePic = document.querySelector("#ProfilePic")
        profilePic?.setAttribute("src", "")
        profilePic?.setAttribute("srcset", "")
        // profilePic.style.backgroundImage = url(``)
        var reader = new FileReader();
    
        
        reader.readAsDataURL(e.target.files[0]); // read file as data url
    
        reader.onload = (event2) => { // called once readAsDataURL is completed
          if(event2.target == null) return;
          if(event2.target.result == null) return;
            profilePic?.setAttribute("src", event2.target.result as string)
            setFormData(prevState => ({
                ...prevState, 
                profilePicture: event2.target!.result as string
            }))
        }
    }
    useEffect(() => {
        console.log('data sent from sign up', formData) 
    })
    return(
        <>
            <h2>Create account</h2>
            <div  id="Avatar">
                    <Image src={placeholderImage} alt="Placeholder image" id="ProfilePic" width={20} height={20}/>
                    <label htmlFor="selectFile">
                        Choose picture
                    </label>
                    <input onChange={e => handleChangeProfilePic(e)} name="selectFile" id="selectFile" type="file"/>
            </div>
            <div className="form_group">
                <input onChange={e=> handleChange(e)}  name="username" type="text" placeholder="username"/>
                <p className="error_message">{formData.username_error}</p>
            </div>
            <div className="form_group">
                <input onChange={e=> handleChange(e)}  name="email" type="email" placeholder="Email address"/>
                <p className="error_message">{formData.email_error}</p>
            </div>
            <div className="form_group">
                <input onChange={e=> handleChange(e)}  name="password" type="Password" placeholder="Password"/>
                <p className="error_message">{formData.password_error}</p>
            </div>
            <button onClick={e => handleSubmit(e)} className="cta register_cta">Create an account</button>
            <p>Already have an accout? <Link href="/login">Login</Link></p>
        </>
    )
}