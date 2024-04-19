'use client';
import {faCamera} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect, useState } from 'react';
import placeholderImage from '../../../public/Images/PlaceHolderAvatar.png'
interface User {
    username: String, 
    name: String, 
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
        let isValid = false 
        let username = document.querySelector('input[name="username"]')
        let username_text = document.querySelector('input[name="username"] + p')
        let name = document.querySelector('input[name="name"]')
        let name_text = document.querySelector('input[name="name"] + p')
        console.log(userData.username, userData.name)
        if(userData.username == undefined || userData.username.length < 3) {
            username.classList.add("error_input")
            username_text.classList.remove("hide_error")
            isValid = false
        } else {
            username.classList.remove("error_input")
            username_text.classList.add("hide_error")
            isValid = true
            
        }
        if(userData.name == undefined || userData.name.length < 3) {
            name.classList.add('error_input')
            name_text.classList.remove('hide_error')
            isValid = false
        } else {
            name.classList.remove('error_input')
            name_text.classList.add('hide_error')
            isValid = true
            
        }
        return isValid
    }
    let handleCreateProfile = () => {
        if(validation()) {

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
                    <img src={placeholderImage} id="ProfilePic" />
                    <label for="selectFile">
                        Choose picture
                    </label>
                    <input onChange={e => handleChangeProfilePic(e)} name="selectFile" id="selectFile" type="file"/>
                </div>
                <section id="Details">
                    <div className="form_group">
                        <input onChange={e => handleInputChange(e)} name="username" placeholder="Username"/>
                        <p className='error_message hide_error'>Username has to be at least 3 characters long</p>
                    </div>
                    <div className="form_group">
                        <input onChange={e => handleInputChange(e)} name="name" placeholder="Name"/>
                        <p className='error_message hide_error'>Name has to be at least 3 characters long</p>
                    </div>
                </section>
                <button onClick={handleCreateProfile} className="cta create_profile">Create your account</button>
            </section>
        </>
    )
}