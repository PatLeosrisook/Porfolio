import Image from "next/image";
export default function Media({Title, Year, Image, Type, isAdult} : {
    Title : string,
    Year: string,
    Image: string,
    Type: string,
    isAdult: boolean
}) {
    let background = {
        backgroundImage: `url(https://image.tmdb.org/t/p/w200/${Image})`
    }
    return (
        <article style={background} className="Trending_media">
            
            <div className="Media-content">
                <div className="sub-content">
                    <p>{Year}</p>
                    <div className="MediaType">
                        <img src={`/icons/${Type}-icon.svg`} alt="media icon"/>
                        <p>{Type}</p>
                    </div>
                    <p>{(isAdult) ? "18+":"PG"}</p>
                </div>

                <p className="media-title">{Title}</p>
            </div>
        </article>
    )
}