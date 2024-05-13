'use client';
import {getMovie} from '../../../utils/getMovie'
import axios from 'axios'
import { useEffect, useState } from 'react';
import type { InferGetServerSidePropsType, GetServerSideProps } from 'next' // probably on the page that call this method.
import RecommendedMedia from '@/Component/RecommendedMedia';
import {options} from '../../../../public/API'
import Search from '@/Component/Search';
// export async function getServerSideProps() {
//     const result = await getMovie();

//     return {
//         props: { result }
//     };
// }
interface ListItem { 
    Title : string,
    src : string, 
    Overview: string,
    year : string,
    Type : string,
    adult: boolean
}
export default function Movie({result} : {
    result : ResultType
}) {
    const [Movie,setMovie] = useState<Array<ListItem>>([])
    const [filteredList, setFilteredList] = useState<Array<ListItem>>([])
    const [searched, setSearchedValue] = useState("")
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
                    Overview: movie['overview'],
                    year:  movie['release_date'].split("-")[0],
                    Type: "movie",
                    adult: movie.adult
                }
            })
            setMovie(list)
        })
    }
    useEffect(() => {
        if(Movie.length == 0) {
            loadMovie()
        } else {
            if(searched !== "") {
                // find the search input
                let filteredResult = Movie.filter(movie => movie.Title.toLowerCase().startsWith(searched.toLowerCase()))
                setFilteredList(filteredResult)
            } else {
                setMovie(Movie)
            }
        }
    })
    return (
        <section id="Movie" className='Specified_Type'>
            <header className="category_header">
                <h1>Movie</h1>
                <Search searchedValue={setSearchedValue} placeholder='Search movie name here:'/>
            </header>
            <section className="list_wrapper">
                <section className="lists">
                {
                    (searched.length > 0) ? filteredList.map(search => {
                        return <RecommendedMedia
                        Title={search.Title}
                        Year={search.Year}
                        Overview={search.Overview}
                        Type={search.Type}
                        src={search.src}
                        isAdult={search.adult}
                    />
                    }) : 
                    Movie.map(movie => {
                        return <RecommendedMedia
                                    Title={movie.Title}
                                    Year={movie.year}
                                    Overview={movie.Overview}
                                    Type="movie"
                                    isAdult={movie.adult}
                                    src={movie.src}
                                />
                    })
                }
                </section>
            </section>
        </section>
    )
}