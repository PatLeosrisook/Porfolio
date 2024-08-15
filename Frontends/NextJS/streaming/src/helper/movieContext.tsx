'use client';
import axios from 'axios'
import { useEffect, useState,useContext, createContext } from 'react';
import {options} from '../../public/API'
import GenreOverview from '@/Component/GenreOverview';
import userContext from "@/helper/userContext"
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
const MovieContext = createContext([])
export const MovieContextProvider = ({children} : {children : React.ReactNode}) => {
    const currentUser = useContext(userContext)
    const [Movie,setMovie] = useState<Array<ListItem>>([])
    const [trendingMovie, setTrendingMovie] = useState<Array<ListItem>>([])
    const [genres, setGenres] = useState([])
    const [genreComponents, setGenreComponents] = useState<React.ReactNode>(null);
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
                    setGenres(res.data.genres)
                }
            })
        })
        let baseUrl = "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page="
        let moviePages = []
        for(let i = 2; i <= 10; i ++) {
            // TODO:: load 5 pages of movies for each genre
            moviePages.push(baseUrl + i)
        }
        let movieApi = moviePages.map(url => {
            options.url = url
            return axios(options)
        })
        Promise.all(movieApi).then(response => {
           response.forEach(res => {
            let movies = res.data.results.map((movie) => {
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
            setMovie(prevState => [...prevState,...movies]) // merge new movies with existing movies 
           }) 
        })

    }
    let loadGenres = () => {
        console.log(":GENRREE", genres)
        let genresComponents = genres.map(genre => {
            let movie = Movie.filter(movie => movie.genre === genre.id)
            if(movie.length >= 5) {
                movie = movie.slice(0, 5)
                return (
                    <GenreOverview key={genre.id} lists={movie} fullList={Movie.filter(mov => mov.genre === genre.id)}link={`/${currentUser}/Movie/${genre.name}`} Genre={genre.name}/>
                )
            }
        })
        setGenreComponents(genresComponents) // send this through context 
    }
    useEffect(() => {
        if(Movie.length == 0) {
            loadMovie()
        } else {
            // if(searched !== "") {
            //     // find the search input
            //     let filteredResult = Movie.filter(movie => movie.Title.toLowerCase().startsWith(searched.toLowerCase()))
            //     setFilteredList(filteredResult)
            // } else {
            //     setMovie(Movie)
            // }
            loadGenres()
        }
    },[])

    return (
        <MovieContext.Provider value={[genreComponents, Movie, currentUser, trendingMovie]}>
            {children}
        </MovieContext.Provider>
    )
}

export default MovieContext