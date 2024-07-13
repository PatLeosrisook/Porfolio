'use client'
import placeholderImage from '../../../../../public/Images/PlaceHolderAvatar.png'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen } from '@fortawesome/free-solid-svg-icons'
import { getUser } from '@/lib/getUser'
import { useEffect,useState } from 'react'
import axios from 'axios'
export default function Account() {
    const [user, setCurrentUser] = useState("")
    const [name, setName] = useState("")
    const currentUser = async() => {
        return await getUser()
    };
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
        }
    }
    let handleNameChange = (e) => {
        setName(e.target.value)
    }
    let handleUpdate = () => {
        if(user !== "") {
            axios.post('/api/users/update_profile', {user, name}).then(response => {
                console.log("Return from update profile", response)
            }).catch(err => {
                console.log("Error", err)
            })
        }
    }
    useEffect(() => {
        currentUser().then((user) => {
            setCurrentUser(user.currentUser)
        })
    })
    return (
        <section id="Profile_setting">
            <h1>Profile setting</h1>
            <section id="Profile_wrapper">
                <div  id="Avatar_Setting">
                        <Image src={placeholderImage} alt="Placeholder image" id="ProfilePic" width={20} height={20}/>
                        {/* <label htmlFor="selectFile">
                            Choose picture
                        </label> */}
                        <input onChange={e => handleChangeProfilePic(e)} name="selectFile" id="selectFile" type="file"/>
                </div>
                <div className='form_group'>
                    <label htmlFor="username">Change username</label>
                    <input type='text' name="username" placeholder={user} onChange={e => handleNameChange(e)}/>
                </div>
                <button onClick={handleUpdate} className='save_change'>
                save change
                </button>
            </section>
        </section>
    )
}