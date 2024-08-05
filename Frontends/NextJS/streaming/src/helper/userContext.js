import {createContext, useState, useEffect} from 'react'
import { getUser } from '@/lib/getUser';
const userContext = createContext('');
export const UserProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);

    useEffect(() => {
        const fetchUser = async () => {
            const user = await getUser();
            setCurrentUser(user.currentUser);
        };
        fetchUser();
    }, []);

    return (
        <userContext.Provider value={currentUser}>
            {children}
        </userContext.Provider>
    );
};

export default userContext;