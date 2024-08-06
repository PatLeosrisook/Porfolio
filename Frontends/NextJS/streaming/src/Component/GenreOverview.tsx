import RecommendedMedia from "./RecommendedMedia"
import Link from "next/link"
import { useRouter } from "next/router"
export default function GenreOverview({Genre, lists, link} : {Genre: string, lists: any, link: string}) {
    const router = useRouter()
    let handleNavigate = (e) => {
        router.push({
            pathname: link,
            query: { genre: JSON.stringify(lists) }
        })
    }
    return (
        <section className="genre">
            <section className="genre-header">
                <h3>{Genre}</h3>
                <div onClick={handleNavigate} className="link-genre">
                    View more
                </div>
            </section>
            <section className="genre-list">
                <div className="genre-scroller">
                    {lists.map(movie => {
                        return <RecommendedMedia
                            Title={movie.Title}
                            Year={movie.Year}
                            Overview={movie.Overview}
                            Type={movie.Type}
                            src={movie.src}
                            isAdult={movie.adult}
                            id={movie.id}
                            key={movie.id}
                        /> 
                    })}
                </div>
            </section>
        </section>
    )
}