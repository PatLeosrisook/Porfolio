
import BookMark from '../assets/icon-bookmark-empty.svg'
import { useEffect, useState } from 'react'
export default function MediaComponent({Id, Title, Image, Year, Caption, Category, Overview, addtoBookmark, removeBookmark,Type}) {
    const [bookmarked, setToggleBookmark] = useState(false)
    const ImageStyle = {
        backgroundImage: `url(${Image})`
    }
    function handleClick(e) {
        setToggleBookmark(!bookmarked)
        
    }
    useEffect(() => {
        if(bookmarked) {
            addtoBookmark({
            id:Id,
            Title: Title, 
            Image: Image,
            Year: Year,
            Type:Type,
            Category:Category, 
            Overview:Overview
        })
        } else {

            removeBookmark(Id)
        }
    },[bookmarked])
    return (
        <article className={`${Title}-Component Medias_Component`}>
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
                        <img src={BookMark} alt="Bookmark icon" /> 
                    </div>
                    <button className='Watch_btn'>Watch</button>
                </div>
            </div>
        </article>
    )
}