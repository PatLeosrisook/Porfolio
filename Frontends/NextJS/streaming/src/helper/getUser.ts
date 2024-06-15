import axios from "axios"
export default async function GetUser() {
    let user = await axios.get('/api/users/me')
    return user.data.data.username;
}