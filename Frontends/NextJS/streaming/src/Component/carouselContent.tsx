'use client';
import { useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilm, faFaceGrinStars } from '@fortawesome/free-solid-svg-icons';
import '../app/CSS/Dashboard.css'
export default function CarouselsContent({Title, Type, Year, IsAdult, src} : {
    Title: string,
    Type: string,
    Year: string,
    IsAdult: boolean,
    src: string
}) {
    useEffect(() => {
        // document.querySelector('.carousel_content').style.backgroundImage = `url(https://image.tmdb.org/t/p/w200/${src})`
    })
    return (
        <div className='carousel_content' style={{'backgroundImage' : `url(https://image.tmdb.org/t/p/w1280/${src})`}}>
            {/* <img src={`https://image.tmdb.org/t/p/w200/${src}`}  alt={`${Title}`} className="carousel_image" /> */}
            <div className='content'>
                    <p className="media-title">{Title}</p>
                    <div className="sub-content">
                            <p>{Year}</p>
                            <div className="MediaType">
                                <FontAwesomeIcon icon={(Type === 'movie')? faFilm : faFaceGrinStars} />
                                <p>{(Type === "movie") ? "Movie" : "Series"}</p>
                            </div>
                            <p>{(IsAdult) ? "18+":"PG"}</p>
                    </div>
            </div>
        </div>
    )
}