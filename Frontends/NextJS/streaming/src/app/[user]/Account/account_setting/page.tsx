'use client';
import { getUser } from '@/lib/getUser'
import axios from 'axios';
import { useEffect, useState } from 'react'
export default function account_setting() {
    const currentEmail = async() => {
        return await getUser()
    }
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState({
        oldPassword: "",
        newPassword: "",
        confirmPassword: ""
    })
    
    useEffect(() => {

        currentEmail().then((email) => {
            setEmail(email.currentEmail)
        })
    })
    const handleChange = () => {
        let name = e.target.name
        
        setPassword(prevState => ({
           ...prevState, 
            [name]: e.target.value
        }));
    }
    const handleSaveChange = async() => {
        const {newPassword, confirmPassword} = password
        if(newPassword === confirmPassword) { 
            await axios.post('/api/users/update_profile', {oldPassword: password.oldPassword, password: password.newPassword, email})
        } else {
            
        }
    }
    return ( 
        <section id="Account_setting">
            <p>Account setting</p>

            <div className="form_group">
                <label htmlFor="email">Email</label>
                <input type="email" name='email' placeholder={email} />
            </div>
            <div className="form_group update_password" >
                <label htmlFor="password">Password</label>
                <input type="password" onChange={e => handleChange(e)} name="OldPassword" placeholder={"Old password"} />
                <input type="password" onChange={e => handleChange(e)} name="NewPassword" placeholder={"New password"} />
                <input type="password" onChange={e => handleChange(e)} name="ConfirmPassword" placeholder={"Confirm new password"} />
            </div>
            <button className='save_change'>save change</button>
        </section>
    )
}