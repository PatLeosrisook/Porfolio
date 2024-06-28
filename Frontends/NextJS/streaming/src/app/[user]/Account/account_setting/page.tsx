'use client';
import { getUser } from '@/lib/getUser'
import axios from 'axios';
import { useEffect, useState } from 'react'
export default function account_setting() {
    const currentEmail = async() => {
        return await getUser()
    }
    const [email, setEmail] = useState("")
    useEffect(() => {

        currentEmail().then((email) => {
            setEmail(email.currentEmail)
        })
    })

    const handleSaveChange = async() => {
        await axios('/api/users/update_profile')
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
                <input type="password" placeholder={"Old password"} />
                <input type="password" placeholder={"New password"} />
                <input type="password" placeholder={"Confirm new password"} />
            </div>
            <button className='save_change'>save change</button>
        </section>
    )
}