'use client';
import {getMovie} from '../../../utils/getMovie'
import axios from 'axios'
import { useEffect, useState } from 'react';
import type { InferGetServerSidePropsType, GetServerSideProps } from 'next' // probably on the page that call this method.
import RecommendedMedia from '@/Component/RecommendedMedia';
import {options} from '../../../../public/API'
// export async function getServerSideProps() {
//     const result = await getMovie();

//     return {
//         props: { result }
//     };
// }
interface ListItem { 
    Title : string,
    src : string, 
    year : string,
    Type : string,
    adult: boolean
}
export default function Movie({result} : {
    result : ResultType
}) {
    const [Movie,setMovie] = useState<Array<ListItem>>([])
    let loadMovie = () => {
        options.url = 'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1'
        axios(options).then(response =>{
            return response.data.results
        }).then((result : any )=> {
            result = result.slice(0, 40)
            console.log(result,result[0].title)
            let list = result.map(movie => {
                return {
                    Title : movie['title'],
                    src: movie["poster_path"],
                    year:  movie['release_date'].split("-")[0],
                    Type: "movie",
                    adult: movie.adult
                }
            })
            setMovie(prev => [...prev, ...list])
        })
    }
    useEffect(() => {
        if(Movie.length == 0) {
            loadMovie()
        }
    })
    return (
        <section id="Movie" className='Specified_Type'>
            <h1>Movie</h1>
            <section className="lists">
            {
                Movie.map(movie => {
                    return <RecommendedMedia
                                Title={movie.Title}
                                Year={movie.year}
                                Type="movie"
                                isAdult={movie.adult}
                                src={movie.src}
                            />
                })
            }
            </section>
        </section>
    )
}