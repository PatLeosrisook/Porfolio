'use client';
import { useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel';
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
                    <div className="sub-content">
                            <p>{Year}</p>
                            <div className="MediaType">
                                <img src={`/icons/${Type}-icon.svg`} alt="media icon"/>
                                <p>{Type}</p>
                            </div>
                            <p>{(IsAdult) ? "18+":"PG"}</p>
                    </div>
                    <p className="media-title">{Title}</p>
            </div>
        </div>
    )
}