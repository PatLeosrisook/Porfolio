'use client'
import placeholderImage from '../../../../../public/Images/PlaceHolderAvatar.png'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen } from '@fortawesome/free-solid-svg-icons'
export default function Account() {

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
    return (
        <section id="Profile_setting">
            <section id="Profile_wrapper">
                <div  id="Avatar_Setting">
                        <Image src={placeholderImage} alt="Placeholder image" id="ProfilePic" width={20} height={20}/>
                        {/* <label htmlFor="selectFile">
                            Choose picture
                        </label> */}
                        <input onChange={e => handleChangeProfilePic(e)} name="selectFile" id="selectFile" type="file"/>
                </div>
                <div className='form_group'>
                    <input type='text' placeholder='username'/>
                    <FontAwesomeIcon icon={faPen} />
                </div>
                <button className='save_change'>
                save change
                </button>
            </section>
        </section>
    )
}