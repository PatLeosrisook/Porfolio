'use client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { useRouter } from 'next/navigation'
import { getUser } from '@/lib/getUser';
export default function ViewMore({forwardLink, user} : {forwardLink : string, user: string}) {
    const router = useRouter()
    let handleClick = () => {
        router.push(`/${user}/${forwardLink}`)
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