import BookMark from '../assets/icon-bookmark-empty.svg'
import sampleImage from '../assets/thumbnails/beyond-earth/trending/large.jpg'
export default function TrendingMedia({Image, TrendingClass, altText, Title, Caption}) {
    const posterStyle = {
        backgroundImage: `url(${Image})`,
        backgroundSize: "cover",

    }
    return (
        <article style={posterStyle} className={`TrendingMedia ${TrendingClass}`}>
            <div class="img_wrap">
                <div className="Bookmark">
                    <img src={BookMark} alt="bookmark"/>
                </div>
                <div className="Captions">
                    <div className='sub_caption'>
                        <p>{Caption.year}</p>
                        <p className="sub_type">
                            <span className="type_icon">{Caption.icon}</span>
                            {Caption.cate}
                        </p>
                        <p>{Caption.rating}</p>
                    </div>
                    <p className='Trending_title'>{Title}</p>
                </div>
                {/* <img src={Image} alt={altText} className="thumbnail" /> */}
            </div>
        </article>
    )
}