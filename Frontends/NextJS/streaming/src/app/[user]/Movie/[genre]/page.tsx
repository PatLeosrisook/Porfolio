
'use client';
import { useEffect, useState , useContext} from 'react';
import { useParams } from 'next/navigation';
import { useRouter } from 'next/router';
import MovieContext  from '@/helper/movieContext';
import RecommendedMedia from '@/Component/RecommendedMedia';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faClose } from '@fortawesome/free-solid-svg-icons';
export default function Genre({searchParams}) {
    const  [genreComponents, Movie, currentUser, trendingMovie, genres] = useContext(MovieContext)
    const [genreMovie, setGenreMovie] = useState([]);
    // const movieList = searchParams.genre
    const query = useParams()
    const router = query.genre; 

    let loadMovieData = () => {
        let currentGenre : number = 0;
        genres.forEach(element => {
            if(element.name.toLowerCase() === router.toString().toLowerCase()) {
                currentGenre = element.id
            }
        });
        let currentMovie = Movie.filter(movie => {
            if(movie.genre == currentGenre) {
                return {
                    Title : movie.title,
                    Year : movie.year,
                    Overview : movie.overview,
                    Type : movie.type,
                    src : movie.src,
                    isAdult : movie.adult,
                    id : movie.id,
                    key : movie.id

                }
            }
        })
        setGenreMovie(currentMovie);
    }

    useEffect(() => {
        if(genreMovie.length == 0) {

            loadMovieData()
        }
    },[genreMovie])
    return(
        <section className='genre-page'>
            <section className='genre-header'>
                <h1>{router}</h1>
                <div className='genre-search-container'>
                    <div className='genre-search-wrapper'>
                        <FontAwesomeIcon icon={faSearch}/>
                        <input type="text" placeholder='Enter movie name' />
                        {/* <FontAwesomeIcon onClick={toggleSearchBar} icon={faClose} /> */}
                    </div>
                </div>
            </section>
            <section id="genre-list-container">
                <section className='genre-list'>
                    {genreMovie.map(movie => {
                        return <RecommendedMedia
                        Title={movie.Title}
                        Year={movie.year}
                        Overview={movie.Overview}
                        Type={movie.Type}
                        src={movie.src}
                        isAdult={movie.adult}
                        id={movie.id}
                       key={`${movie.title}-${movie.id}`}

                    /> 
                    })}
                </section>
            </section>
        </section>
    )
}