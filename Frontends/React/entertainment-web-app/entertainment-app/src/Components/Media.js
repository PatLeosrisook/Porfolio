import BookMark from '../assets/icon-bookmark-full.svg'
import Sample from '../assets/thumbnails/beyond-earth/regular/medium.jpg'
export default function Media({Title, Rating, Type, Year, Image, Caption, Category}) {
    return(
        <article className='Medias'>
            <div class="image_wrap">
                <div className="Bookmark">
                    <img src={BookMark} alt="bookmark"/>
                </div>
                <img src={Sample} alt="movie image" className="thumbnail" />
            </div>
            <div className="Movie_detail">
                <div className="sub_caption">
                    <p>{Caption.year}</p>
                    {Category}
                    <p>{Caption.rating}</p>
                </div>
                <p>{Title}</p>
            </div>
        </article>
    )
}