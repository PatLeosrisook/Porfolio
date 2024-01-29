export function Project({img, Name, Overview, Url}) {
    return (
        <article className="Project">
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