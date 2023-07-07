import MediaComponent from "../Components/MediaComponents"
import '../CSS/Bookmark.css'
import BookmarkContextProvider from "../Components/BookmarkContext"
import { useContext , useEffect} from "react"

export default function Bookmark({list, removeBookmark}) {
    const BookmarkedItem = JSON.parse(localStorage.getItem("bookmarked"))
    let BookmarkedMovie = BookmarkedItem.filter(item => item.Type == "Movie")
    let TV = BookmarkedItem.filter(item => item.Type == "TV Show")
    useEffect(() => {
        console.log(BookmarkedItem)
    })
    return (

                <section id="Bookmark_section">
                    <section className="Bookmarked_Movie">
                        {
                        BookmarkedMovie.map(item => {
                                return <MediaComponent
                                    Image={item.Image}
                                    Title={item.Title}
                                    Year={item.Year}
                                    Overview={item.Overview}
                                    removeBookmark={removeBookmark}
                                />
                            })
                        }
                    </section>
                    <section className="Bookmarked_TV">
                        {
                        TV.map(item => {
                                return <MediaComponent
                                    Image={item.Image}
                                    Title={item.Title}
                                    Year={item.Year}
                                    Overview={item.Overview}
                                    removeBookmark={removeBookmark}
                                />
                            })
                        }
                    </section>
                </section>
    )
}