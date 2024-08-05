import RecommendedMedia from "./RecommendedMedia"
import Link from "next/link"
export default function GenreOverview({Genre, lists, link} : {Genre: string, lists: any, link: string}) {
    let handleNavigate = (e) => {

    }
    return (
        <section className="genre">
            <section className="genre-header">
                <h3>{Genre}</h3>
                <div className="link-genre">
                    <Link href={link}>view more</Link>
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