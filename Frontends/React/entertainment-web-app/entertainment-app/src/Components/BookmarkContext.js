import { createContext, useState } from "react";

const BookmarkContext = createContext()
function BookmarkContextProvider({children}) {
    const {bookmark, setBookmark} = useState([])
    return(
        <BookmarkContext.Provider value={{bookmark}}>
            {children}
        </BookmarkContext.Provider>
    )
}
export default BookmarkContextProvider;