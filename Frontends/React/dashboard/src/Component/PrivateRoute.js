import { Navigate } from "react-router";
import isLoggedIn from "../helper/isLoggedIn";


export default function PrivateRoute({children}) {
    const loggedIn = isLoggedIn();
  console.log('Logged in status:', loggedIn); // Add this line to check the status

  return loggedIn ? (
    <>{children}</>
  ) : (
    <Navigate replace={true} to="/auth/login" />
  );
}