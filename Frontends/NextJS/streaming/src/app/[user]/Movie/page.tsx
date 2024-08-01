'use client';
import {getMovie} from '../../../utils/getMovie'
import axios from 'axios'
import { useEffect, useState } from 'react';
import type { InferGetServerSidePropsType, GetServerSideProps } from 'next' // probably on the page that call this method.
import RecommendedMedia from '@/Component/RecommendedMedia';
import {options} from '../../../../public/API'
import Carousel from 'react-bootstrap/Carousel';
import CarouselsContent from '../../../Component/carouselContent';
import GenreOverview from '@/Component/GenreOverview';
interface ListItem { 
    id: number,
    Title : string,
    src : string, 
    genre: number,
    Overview: string,
    year : string,
    Type : string,
    adult: boolean
}
enum MovieGenres{
    Action = 28,
    Adventure = 12,
    Comedy = 35,
    Crime = 80,
    Fantasy = 14,
    Horror = 27,
    Mystery = 9648,
    Romance = 10749,
    ScienceFiction = 878,
    Thriller = 53,
}
export default function Movie({result} : {
    result : ResultType
}) {
    const [Movie,setMovie] = useState<Array<ListItem>>([])
    const [trendingMovie, setTrendingMovie] = useState<Array<ListItem>>([])
    const [filteredList, setFilteredList] = useState<Array<ListItem>>([])
    const [searched, setSearchedValue] = useState("")
    const [genres, setGenres] = useState([])
    const apiEndpoints = [
        "https://api.themoviedb.org/3/trending/movie/day?language=en-US",
        "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
        "https://api.themoviedb.org/3/genre/movie/list?language=en"
    ]
    let loadMovie = () => {

        //TODO:: dynamically load movie data by genre
        const requests = apiEndpoints.map(url => {
            options.url = url
            return axios(options)
        })
        
        Promise.all(requests).then(response => {
            response.forEach((res, index) => {
                if(index == 0) {
                   let trendingMovie = res.data.results.map((movie) => {
                        return {
                            id: movie['id'],
                            Title : movie['title'],
                            src: movie["poster_path"],
                            genre: movie['genre_ids'][0],
                            Overview: movie['overview'],
                            year:  movie['release_date'].split("-")[0],
                            Type: "movie",
                            adult: movie.adult
                        }
                    })
                    setTrendingMovie(trendingMovie)

                } else if(index == 1)  {
                    let playingMovie = res.data.results.map((movie) => {
                        return {
                            id: movie['id'],
                            Title : movie['title'],
                            src: movie["poster_path"],
                            genre: movie['genre_ids'][0],
                            Overview: movie['overview'],
                            year:  movie['release_date'].split("-")[0],
                            Type: "movie",
                            adult: movie.adult
                        }
                    })
                    setMovie(playingMovie)
                } else {
                    console.log("Genres", res.data.genres)
                    setGenres(res.data.genres)
                }
            })
        })
    }
    let loadGenres = () => {
        return genres.map(genre => {
            let movie = Movie.filter(movie => movie.genre === genre.id)
            console.log("filtered movie", movie)
            if(movie.length >= 4) {

                return <GenreOverview key={genre.id} lists={movie} Genre={genre.name}/>
            }
        })
    }
    useEffect(() => {
        if(Movie.length == 0) {
            loadMovie()
        } else {
            console.log("Genress", loadGenres())
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
        <section id="Movie" className='media-dashboard'>
            {/* <header className="category_header">
                <h1>Movie</h1>
                <Search searchedValue={setSearchedValue} placeholder='Search movie name here:'/>
            </header> */}
            <section className='trending-section'>
                <Carousel  id="Carousel">
                    {/* {
                        
                        popularList.map((list , index) => {
                            {if(index == popularList.length - 1) {

                            }}
                            return <Carousel.Item >
                                        <CarouselsContent 
                                            Title={list.Title}
                                            
                                            Year={list.year}
                                            IsAdult={list.adult}
                                            Type={list.Type}
                                            src={list.src}
                                        />
                            </Carousel.Item>
                          
                        })
                    } */}
                </Carousel>
            </section>
            <section className='other-genre'>
                    {/* <GenreOverview Genre={"Action"} lists={Movie.filter(movie => movie.genre === 28)} />
                    <GenreOverview Genre={"Adventure"} lists={Movie.filter(movie => movie.genre === 12)} />
                    <GenreOverview Genre={"Comedy"} lists={Movie.filter(movie => movie.genre === 35)} /> */}
                    {
                        loadGenres()
                    }
            </section>
        </section>
    )
}