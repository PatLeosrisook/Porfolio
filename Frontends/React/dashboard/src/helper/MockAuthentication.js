import {jwtDecode} from 'jwt-decode'
import bcrypt from 'bcryptjs'
 function MockLogin(username, password) {
    return new Promise((resolve,reject) => {

        let mockDB = {
            [jwtDecode(process.env.REACT_APP_ADMIN_JWT).name] : {...jwtDecode(process.env.REACT_APP_ADMIN_JWT), password: bcrypt.hashSync(process.env.REACT_APP_ADMIN_PASS, 10)},
            [jwtDecode(process.env.REACT_APP_USER_JWT).name] : {...jwtDecode(process.env.REACT_APP_USER_JWT), password: bcrypt.hashSync(process.env.REACT_APP_USER_PASS, 10)}
        }
        setTimeout(() => {
            if(mockDB.hasOwnProperty(username) && bcrypt.compareSync(password, mockDB[username].password)) {
                resolve( {
                    status: 200,
                    data: mockDB[username]
                })
            } else {
                reject({
                    status: 404,
                    error: "Password or username is incorrect."
                })
            }
        })
    })
}


export {MockLogin}