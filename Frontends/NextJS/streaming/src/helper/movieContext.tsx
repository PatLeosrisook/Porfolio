'use client';
import axios, { all } from 'axios'
import { useEffect, useState,useContext, createContext } from 'react';
import {options} from '../../public/API'
import GenreOverview from '@/Component/GenreOverview'
import { useUser } from '@/helper/userContext';;
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
    const { currentUser, currentEmail } = useUser();
    const [Movie,setMovie] = useState<Array<ListItem>>([])
    const [trendingMovie, setTrendingMovie] = useState<Array<ListItem>>([])
    const [genres, setGenres] = useState([])
    const [genreComponents, setGenreComponents] = useState<Array<React.ReactNode>>([]);
    const [watchlist, setWatchlist] = useState<Array<ListItem>>([])
    const apiEndpoints = [
        "https://api.themoviedb.org/3/trending/movie/day?language=en-US",
        "https://api.themoviedb.org/3/genre/movie/list?language=en"
    ]
    let init = () => {
        const requests = apiEndpoints.map((url, index) => {
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

                } else {
                    setGenres(res.data.genres)
                }
            })
        })
    }
    let loadMovie = () => {
        //TODO:: get user watchlist here?
        let baseUrl = "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page="
        let moviePages = []
        for(let i = 1; i <= 3; i ++) {
            // TODO:: load 5 pages of movies for each genre
            moviePages.push(baseUrl + i)
        }
        options.url = baseUrl + '1'
        axios(options).then(res => {
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
            console.log("Movie 1 : " , movies)
            setMovie(movies);
        })
       options.url = baseUrl + '2'
       axios(options).then(res => {
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
        setMovie(prev => (prev.concat(movies)))
       })

       options.url = baseUrl + '4'
       axios(options).then(res => {
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
        setMovie(prev => (prev.concat(movies)))
       })
    }
    let loadGenres = () => {
        
        let genresComponents = genres.map(genre => {
            let movie = Movie.filter(movie => movie.genre === genre.id)
            if(movie.length >= 5) {
                movie = movie.slice(0, 5)
                return (
                    <GenreOverview key={genre.id} lists={movie} fullList={movie}link={`/${currentUser}/Movie/${genre.name}`} Genre={genre.name}/>
                )
            }
        })
        // console.log("LFJIDJF", genresComponents)
        setGenreComponents(genresComponents) // send this through context 
    }
    useEffect(() => {

        if(Movie.length == 0) {
            
            init();
            loadMovie();
        } if(genreComponents.length == 0 ) {

            loadGenres()
        }else {
            // if(searched !== "") {
                //     // find the search input
                //     let filteredResult = Movie.filter(movie => movie.Title.toLowerCase().startsWith(searched.toLowerCase()))
                //     setFilteredList(filteredResult)
                // } else {
                    //     setMovie(Movie)
                    // }
        }

    },[]);

    return (
        <MovieContext.Provider value={[genreComponents, Movie,trendingMovie, genres]}>
            {children}
        </MovieContext.Provider>
    )
}

export default MovieContext