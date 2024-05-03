import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBookBookmark, faPlay } from "@fortawesome/free-solid-svg-icons"
export default function RecommendedMedia({Year, Title, isAdult, Type, src}: {
    Year: string,
    Title: string,
    isAdult: boolean,
    Type: string,
    src: string
}) {
    return (
        <article className="RecommendedMedia">
            <div style={{background:`url(https://image.tmdb.org/t/p/w200/${src})`, backgroundSize: "cover" }} className="Image_wrap">

            </div>
            <div className="Content">
                <p className="Content-title">{Title}</p>
                <div className="Content-detail">
                    <p>{Year}</p>
                    <p>{(isAdult) ? "18+" : "PG"}</p>
                </div>
                <div className="Content-action">
                    <div className="bookmark">
                        <FontAwesomeIcon icon={faBookBookmark} /> 
                        <p>Bookmark</p>
                    </div>
                    <div className="trailer">
                        <p>See trailer</p>
                        <FontAwesomeIcon icon={faPlay}/>
                    </div>
                </div>
            </div>
        </article>
    )
}