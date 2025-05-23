'use client';
import { getUser } from '@/lib/getUser'
import axios from 'axios';
import { useUser } from '@/helper/userContext';
import { useEffect, useState } from 'react'
export default function Account_setting() {
    const {currentUser, currentEmail} = useUser();
    const [user, setUser] = useState("")
    // const currentUser = async() => {
    //     return await getUser()
    // }
    const [email, setEmail] = useState("")
    // const [currentEmail, setCurrentEmail] = useState("")
    const [password, setPassword] = useState({
        OldPassword: "",
        NewPassword: "",
        ConfirmPassword: ""
    })
    
  
    const handleChange = (e) => {
        let name = e.target.name
        
        setPassword(prevState => ({
           ...prevState, 
            [name]: e.target.value
        }));
    }
    const handleEmailChange = e => {
        setEmail(e.target.value)
    }
    const handleSaveChange = async() => {
        const {NewPassword, ConfirmPassword} = password
        //TODO:: send current user name to update_profile too
        if(NewPassword === ConfirmPassword && NewPassword.length > 0) { 
            await axios.post('/api/users/update_profile', {oldPassword: password.OldPassword, newPassword: password.NewPassword, currentUser})
        } 
        if(email.length > 0) {
            await axios.post('/api/users/update_profile', {email, currentUser})
        }
    }
    useEffect(() => {
        // currentUser().then((email) => {
        //     setUser(email.currentUser)
        //     setCurrentEmail(email.currentEmail)
        // })
    },[])
    return ( 
        <section id="Account_setting">
            <h1>Account setting</h1>

            <div className="form_group">
                <label htmlFor="email">Email</label>
                <input onChange={e=>handleEmailChange(e)} type="email" name='email' placeholder={currentEmail} />
            </div>
            <div className="form_group update_password" >
                <label htmlFor="password">Password</label>
                <input type="password" onChange={e => handleChange(e)} name="OldPassword" placeholder={"Old password"} />
                <input type="password" onChange={e => handleChange(e)} name="NewPassword" placeholder={"New password"} />
                <input type="password" onChange={e => handleChange(e)} name="ConfirmPassword" placeholder={"Confirm new password"} />
            </div>
            <button onClick={handleSaveChange} className='save_change'>save change</button>
        </section>
    )
}