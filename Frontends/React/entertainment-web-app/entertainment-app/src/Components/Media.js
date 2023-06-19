import BookMark from '../assets/icon-bookmark-full.svg'
export default function Media({Title, Rating, Type, Year, Image}) {
    return(
        <article>
            <div class="image_wrap">
                <div className="Bookmark">
                    <img src={BookMark} alt="bookmark"/>
                </div>
                <img src={Image} alt="movie image" />
            </div>
            <div className="Movie_detail">
                <div className="subdetails">
                    <p>{Year}</p>
                    <p>{Type}</p>
                    <p>{Rating}</p>
                </div>
                <p>{Title}</p>
            </div>
        </article>
    )
}