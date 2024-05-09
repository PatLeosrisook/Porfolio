'use client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { useRouter } from 'next/navigation'
export default function ViewMore({forwardLink} : {forwardLink : string}) {
    const router = useRouter()
    let handleClick = () => {
        router.push(`/User/${forwardLink}`)
    }
    return(
        <article className="ViewMore" onClick={handleClick}>
            <div>
                <p>View more</p>
                <FontAwesomeIcon icon={faArrowRight} />
            </div>
        </article>
    )
}