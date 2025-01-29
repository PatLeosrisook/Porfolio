import axios from "axios"
export async function getUser() {
    let user = await axios.get('/api/users/me')
    
    return {
            currentUser: user.data.data.username,
            currentEmail:user.data.data.email
    }
}