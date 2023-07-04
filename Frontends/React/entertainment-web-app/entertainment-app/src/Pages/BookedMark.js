import MediaComponent from "../Components/MediaComponents"
import '../CSS/Bookmark.css'
import BookmarkContext from "../Components/BookmarkContext"
export default function Bookmark({list, removeBookmark}) {
    let BookmarkedMovie = list.filter(item => item.Type == "Movie")
    let TV = list.filter(item => item.Type == "TV Show")
    return (
        <BookmarkContext.Consumer>
            {({Bookmarked}) => (
                <section id="Bookmark_section">
                    <section className="Bookmarked_Movie">
                        {
                        Bookmarked.filter(item => item.Type == "Movie").map(item => {
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
                        Bookmarked.filter(item => item.Type == "TV Show").map(item => {
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
            )}
        </BookmarkContext.Consumer>
    )
}