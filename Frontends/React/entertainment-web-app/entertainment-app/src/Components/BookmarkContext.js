import { createContext, useState } from "react";

const BookmarkContext = createContext()
function BookmarkContextProvider({children}) {
    const {bookmark, setBookmark} = useState([])
    function toggleBookmark(movie) {
        let isBookmarked = bookmark.some(books => books.id == movie.id)
        if(isBookmarked) {
            setBookmark( prev => prev.filter(bookId => movie.id !== bookId.id ))
        } else {
            setBookmark((prevBookmarks) => [...prevBookmarks, { ...movie, isBooked: true }]);
        }
    }
    return(
        <BookmarkContext.Provider value={{bookmark}}>
            {children}
        </BookmarkContext.Provider>
    )
}
export default BookmarkContextProvider;