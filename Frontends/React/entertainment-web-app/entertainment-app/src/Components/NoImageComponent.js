
export default function NoImage({handleClick}) {
    return (
        <article>
            <div className="subdetails">

            </div>
            <h2></h2>
            <p></p>
            <div className="utiles">
            <div onClick={handleClick} className='Bookmark'>
                    <img src={(bookmarked == true) ? Bookmark_filled : BookMark} alt="Bookmark icon" /> 
                    </div>
                    <button className='Watch_btn'>Watch</button>
            </div>
        </article>
    )
}