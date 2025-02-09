export default function isLoggedIn() {
    console.log("IS", localStorage.getItem("isLoggedIn"))
    return localStorage.getItem('isLoggedIn') ;
}