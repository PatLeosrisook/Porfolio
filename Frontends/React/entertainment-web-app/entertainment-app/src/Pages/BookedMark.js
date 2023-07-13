import MediaComponent from "../Components/MediaComponents"
import '../CSS/Bookmark.css'
import BookmarkContextProvider from "../Components/BookmarkContext"
import { useContext , useEffect} from "react"

export default function Bookmark({list, removeBookmark, addtoBookmark}) {
    const BookmarkedItem = JSON.parse(localStorage.getItem("bookmarked"))

    let BookmarkedMovie = BookmarkedItem.filter(item => item.Type == "Movie")
    let TV = BookmarkedItem.filter(item => item.Type == "TV Show")
    useEffect(() => {
        console.log("Bookmark",BookmarkedItem)
        // console.log('res', JSON.parse(BookmarkedItem).filter(item => item == "3"))
    })
    return (

        <section id="Bookmark_section">
            <h2>Bookmarked Movies</h2>
            <section className="Bookmarked_Movie">
                {
                BookmarkedMovie.map(item => {
                        return <MediaComponent
                            Image={item.Image}
                            Title={item.Title}
                            Year={item.Year}
                            Overview={item.Overview}
                            addtoBookmark={addtoBookmark}
                            removeBookmark={removeBookmark}
                            isBooked={item.isBooked}
                        />
                    })
                }
            </section>
            <h2>Bookmarked Tv Series</h2>
            <section className="Bookmarked_TV">
                {
                TV.map(item => {
                        return <MediaComponent
                            Image={item.Image}
                            Title={item.Title}
                            Year={item.Year}
                            Overview={item.Overview}
                            addtoBookmark={addtoBookmark}
                            removeBookmark={removeBookmark}
                            isBooked={item.isBooked}
                        />
                    })
                }
            </section>
        </section>
    )
}