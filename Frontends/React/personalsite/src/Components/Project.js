import 'animate.css';
export function Project({img, Name, Overview, Url, animation_delay}) {
    return (
        <article className={`Project animate__animated animate__zoomOut `}>
            <div className="image_wrap">
                <img src={img} alt=""/>
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