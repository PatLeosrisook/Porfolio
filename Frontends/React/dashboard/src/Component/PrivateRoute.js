import { Navigate } from "react-router";
import isLoggedIn from "../helper/isLoggedIn";


export default function PrivateRoute({children}) {
  const loggedIn = isLoggedIn(); //check storage whether user is still logged in 

  return loggedIn ? (
    <>{children}</>
  ) : (
    <Navigate replace={true} to="/auth/login" />
  );
}