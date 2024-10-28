import {createContext, useState, useEffect, useContext} from 'react'
import { getUser } from '@/lib/getUser';
const userContext = createContext('');
export const UserProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const [currentEmail, setCurrentEmail] = useState(null);
    const fetchUser = async () => {
        const user = await getUser();
        setCurrentUser(user.currentUser);
        setCurrentEmail(user.currentEmail);
    };
    useEffect(() => {
        fetchUser();
        console.log("CONTEXT", currentUser, currentEmail)
    },[]);

    return (
        <userContext.Provider value={{currentUser, currentEmail}}>
            {children}
        </userContext.Provider>
    );
};

export const useUser = () => {
    return useContext(userContext);
};

