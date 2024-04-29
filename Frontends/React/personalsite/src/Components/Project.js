import 'animate.css';
export function Project({img, Name, Overview, Url}) {
    let handleNavigateToLink = () => {
        window.open(`http://${Url}`, "_blank")
    }
    return (
        <article onClick={handleNavigateToLink} className={`Project animate__animated animate__zoomOut `}>
            <div className="image_wrap">
                <img src={img} alt={`Name`} />
                <div className="Content">
                    <h3>{Name}</h3>
                    <p>{Overview}</p>
                </div>
            </div>
            <div className="Content">
                <h3>{Name}</h3>
                <p>{Overview}</p>
            </div>
        </article>
    )
}