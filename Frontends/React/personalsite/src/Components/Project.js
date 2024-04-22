import 'animate.css';
import {useNavigate} from 'react-router-dom'
export function Project({img, Name, Overview, Url}) {
    let navigate = useNavigate()
    // let image = require(Url)
    let handleNavigateToLink = () => {
        if(Url == null) {
            navigate.push('/NotFound')
        } else {

            window.open(`http://${Url}`, "_blank")
        }
    }
    return (
        <article onClick={handleNavigateToLink} className={`Project animate__animated animate__zoomOut `}>
            <div className="image_wrap">
                <img src={img} />
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