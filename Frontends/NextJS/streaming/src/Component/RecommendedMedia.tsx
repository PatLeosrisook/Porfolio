export default function RecommendedMedia({Year, Title, PG, Type, ImageSrc}: {
    Year: "string",
    Title: 'string',
    PG: 'string',
    Type: 'string'
    ImageSrc: 'string'
}) {
    return (
        <article className="RecommnededMedia">
            <div className="Image_wrap">
                <img src={"https://image.tmdb.org/t/p/w200/" + ImageSrc} />
            </div>
            <div className="Media-content">
                <div className="sub-content">
                    <p>{Year}</p>
                    <div className="MediaType">
                        <img src={`/icons/${Type}-icon.svg`} />
                    </div>
                    <p>{PG}</p>
                </div>
                <p className="media-title">{Title}</p>
            </div>
        </article>
    )
}