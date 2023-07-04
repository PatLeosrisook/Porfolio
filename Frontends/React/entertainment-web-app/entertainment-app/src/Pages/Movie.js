import {useState, useEffect} from 'react'
import axios from 'axios'
import "../CSS/Movie.css"
import "../CSS/Home.css"
import Media from '../Components/Media'
import MovieIcon from '../assets/icon-category-movie.svg'
export default function Movie({children, title, renderMedia,Medias}) {
    // function renderMovie() {
    //     let url = "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc"
    //     const options = {
    //         method: 'GET',
    //         headers: {
    //         accept: 'application/json',
    //         Authorization: `Bearer ${API_KEY}`
    //         }
    //     }
    //     axios(url, options).then(response=> {
    //         return response.data
    //     }).then(data => {
    //         console.log("Movie", data.results)
    //         data.results.forEach(result => {
    //             setMovies(prev => [
    //                 ...prev, 
    //                 {
    //                     Title: result["original_title"],
    //                     Image: `https://image.tmdb.org/t/p/w200/${result["poster_path"]}`,
    //                     Year: result["release_date"].split("-")[0],
    //                     Type: "Movie"
    //                 }
    //             ])
    //         })
    //     })
    // }

    useEffect(() => {
        // renderMovie()
        renderMedia()
    },[])
    return(
        <section  className={`${title}-container MediaPage`} id={`${title}`}>
            <h1>{title}</h1>
            <section className="scroller "> 
                {
                    Medias.map(movie => {
                       return <Media
                            Image={movie.Image}
                            Title={movie.Title}
                            Caption={{
                                year: movie.Year,
                                cate: movie.Type
                            }}
                            Category={
                                <p class="cate">
                                    <span className="cate-icon">
                                        <img src={MovieIcon} alt="" />
                                    </span>
                                    {movie.Type}
                                </p>
                            }
                        />
                    })
                }
            </section>
        </section>
    )
}