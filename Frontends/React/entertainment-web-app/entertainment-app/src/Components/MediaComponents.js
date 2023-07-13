
import BookMark from '../assets/icon-bookmark-empty.svg'
import Bookmark_filled from '../assets/icon-bookmark-full.svg'
import { useEffect, useMemo, useState } from 'react'
export default function MediaComponent({Id, Title, Image, Year, Caption, Category, Overview, addtoBookmark, removeBookmark,Type, isBooked, Class}) {
    const [bookmarked, setToggleBookmark] = useState(false)
    let memorizedIsBooked = useMemo(() => bookmarked, [bookmarked])
    const ImageStyle = {
        backgroundImage: `url(${Image})`
    }
    function handleClick(e) {
        console.log("currently pressed?", bookmarked)
        if(bookmarked) {
            setToggleBookmark(false)
        } else {

            setToggleBookmark(true)
        }
        
    }
    useEffect(() => {
        console.log("currently updated", bookmarked,memorizedIsBooked )
        if(bookmarked) {
            console.log("adding")
            addtoBookmark({
            id:Id,
            Title: Title, 
            Image: Image,
            Year: Year,
            Type:Type,
            // Category:Category, 
            Overview:Overview,
            isBooked: true
            
        })
        } else {
            console.log("removing")
            removeBookmark(Id)
        }
    },[bookmarked])
    return (
        <article className={`${Class} Medias_Component`}>
            <div  style={ImageStyle} className="Image">
            </div>
            <div className='media_content'>
                <div className='detail'>
                    <div className='sub_detail'>
                        <p>{Year}</p>
                        {Category}
                    </div>
                    <p className='Title'>{Title}</p>
                    <p className='Overview'>{Overview}</p>
                </div>
                <div className='utiles'>
                    <div onClick={handleClick} className='Bookmark'>
                        <img src={(bookmarked == true || isBooked == true) ? Bookmark_filled : BookMark} alt="Bookmark icon" /> 
                    </div>
                    <button className='Watch_btn'>Watch</button>
                </div>
            </div>
        </article>
    )
}