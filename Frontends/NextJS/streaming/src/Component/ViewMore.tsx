import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
export default function ViewMore() {
    return(
        <article className="ViewMore">
            <div>
                <p>View more</p>
                <FontAwesomeIcon icon={faArrowRight} />
            </div>
        </article>
    )
}