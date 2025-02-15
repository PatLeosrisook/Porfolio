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
                    data: JSON.stringify(mockDB[username])
                })
            } else if(localStorage.getItem(username)) {
                resolve({
                    status: 200, 
                    data: localStorage.getItem(username)
                })
            }else {
                reject({
                    status: 404,
                    error: "บัญชีพนักงานหรือรหัสผ่านไม่ถูกต้อง"
                })
            }
        })
    })
}
function MockSignup(name, email, password) {
    return new Promise((resolve, reject) => {
        let user = {
            name: name,
            email: email, 
            pass: bcrypt.hashSync(password,10), 
            role: 'USER'
        }
        if(email === 'user.email@gmail.com') {
            //return user1 jwt token
            let userObj = {...jwtDecode(process.env.REACT_APP_USER_JWT) , password: bcrypt.hashSync(password, 10)}
            localStorage.setItem(name, JSON.stringify(userObj)) 
            return resolve({
                status: 200,
                data: userObj
            })
        } else {
            //give back the user obj
            localStorage.setItem(name, JSON.stringify(user))
            return resolve({
                status: 200,
                data: user
            })
        }

    })
}

export {MockLogin, MockSignup}