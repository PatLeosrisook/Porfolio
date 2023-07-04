import BookMark from '../assets/icon-bookmark-empty.svg'
import Sample from '../assets/thumbnails/beyond-earth/regular/medium.jpg'
export default function Media({Title, Rating, Type, Year, Image, Caption, Category, addtoBookmark}) {
    function handleClick(e) {
        console.log("dfjkalsf;",e.target.parentElement.parentElement)
        addtoBookmark({
            Title,
            Image,
            Caption,
            Category
        })
    }
 
    function handleChildClick(e) {
        e.stopPropagation();
    }
    return(
        <article className='Medias'>
            <div class="image_wrap">
                <div onClick={handleClick} className="Bookmark">
                    <img  src={BookMark} alt="bookmark"/>
                </div>
                <img src={Image} alt="movie image" className="thumbnail" />
            </div>
            <div className="Movie_detail">
                <div className="sub_caption">
                    <p>{Caption.year}</p>
                    {Category}
                    <p>{Caption.rating}</p>
                </div>
                <p className="Title">{Title}</p>
            </div>
        </article>
    )
}