'use client';
import {faCamera} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect, useState } from 'react';
interface User {
    Username: String, 
    Name: String, 
}
export default function CreateProfile() {
    const [userData, setUserData] = useState<User>({})
    let handleChangeProfilePic = (e) => {
        let profilePic = document.querySelector("#ProfilePic")
        console.log("Change profile", e.target.files[0].name.split(" ").join(""))
        // profilePic.style.backgroundImage = url(``)
        var reader = new FileReader();
    
        
        reader.readAsDataURL(event.target.files[0]); // read file as data url
    
        reader.onload = (event2) => { // called once readAsDataURL is completed
          if(event2.target == null) return;
          if(event2.target.result == null) return;
          document.getElementById('ProfilePic')?.setAttribute("src", event2.target.result as string)
            console.log(event2.target.result)
        }
    }
    let handleInputChange = e => {
        setUserData(prev => ({
            ...prev, 
          [e.target.name] : e.target.value
        }))
    }
    let validation = () =>  {
        let username = document.querySelector('input[name="username"]')
        let name = document.querySelector('input[name="name"]')
        if(userData.Username.length == 0 || userData.Username.length < 3) {
            username.classList.add("error_input")
        } else {

        }
        if(userData.Name.length == 0 || userData.Name.length < 3) {

        } else {

        }

    }
    useEffect(() => {
        console.log(userData)
    })
    return(
        <>
            <header>
                <h1>Create profile</h1>
            </header>
            <section id="User_info">
                <div  id="Avatar">
                    <img src="" id="ProfilePic" />
                    <label for="selectFile">
                        Choose picture
                    </label>
                    <input onChange={e => handleChangeProfilePic(e)} name="selectFile" id="selectFile" type="file"/>
                </div>
                <section id="Details">
                    <div className="form_group">
                        <input onChange={e => handleInputChange(e)} name="username" placeholder="Username"/>
                        <p className='hide_error error_message'></p>
                    </div>
                    <div className="form_group">
                        <input onChange={e => handleInputChange(e)} name="name" placeholder="Name"/>
                        <p className='hide_error error_message'></p>
                    </div>
                </section>
                <button className="cta create_profile">Create your account</button>
            </section>
        </>
    )
}