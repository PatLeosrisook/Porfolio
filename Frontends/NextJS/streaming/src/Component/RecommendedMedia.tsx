'use client';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBookmark as Bookedmarked, faPlay } from "@fortawesome/free-solid-svg-icons"
import { faBookmark as unBookedmark } from "@fortawesome/free-regular-svg-icons"
import { useState } from "react";
export default function RecommendedMedia({id, Year, Title, isAdult, Overview, Type, src}: {
    id:number,
    Year: string,
    Title: string,
    Overview: string,
    isAdult: boolean,
    Type: string,
    src: string
}) {
    const [booked, setBooked] = useState()
    let handleBookmarked = () => {
        //TODO:: this will then save the id of the current movie to user's database.
        alert('bookmarked', id)
    }

    return (
        <article className="RecommendedMedia">
            <div style={{backgroundImage:`url(https://image.tmdb.org/t/p/w1280/${src})`, backgroundSize: "cover" }} className="Image_wrap">

            </div>
            <div className="Content">
                <p className="Content-title">{Title}</p>
                <div className="Content-detail">
                    <p>{Year}</p>
                    <p>{(isAdult) ? "18+" : "PG"}</p>
                </div>
                <p className="overview">{Overview}</p>
                <div className="Content-action">
                    <div onClick={handleBookmarked} className="bookmark">
                        <FontAwesomeIcon icon={unBookedmark} /> 
                        <p>Bookmark</p>
                    </div>
                    <div className="trailer">
                        <p>See trailer</p>
                        <FontAwesomeIcon icon={faPlay}/>
                    </div>
                </div>
            </div>
        </article>
    )
}