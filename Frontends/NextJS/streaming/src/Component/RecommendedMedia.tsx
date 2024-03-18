export default function RecommendedMedia({Year, Title, isAdult, Type, src}: {
    Year: string,
    Title: string,
    isAdult: boolean,
    Type: string,
    src: string
}) {
    return (
        <article className="RecommendedMedia">
            <div style={{background:`url(https://image.tmdb.org/t/p/w200/${src})` }} className="Image_wrap">

            </div>
            <div className="Media-content">
                <div className="sub-content">
                    <p>{Year}</p>
                    <div className="MediaType">
                        <img src={`/icons/${Type}-icon.svg`} />
                    </div>
                    <p>{(isAdult) ? "18+" : "PG"}</p>
                </div>
                <p className="media-title">{Title}</p>
            </div>
        </article>
    )
}