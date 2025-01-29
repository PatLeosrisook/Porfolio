'use client';
import { useEffect, useState,useContext, createContext } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import CarouselsContent from '../../../Component/carouselContent';
import RecommendedMedia from '@/Component/RecommendedMedia';
import MovieContext from '@/helper/movieContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useUser } from '@/helper/userContext';
import Image from 'next/image';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
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
export default function Movie({result} : {
    result : ResultType
}) {
    const { currentUser, currentEmail } = useUser();
    const [ Movie, trendingMovie, genres] = useContext(MovieContext)
    const [FilteredMovie, setFilteredMovie] = useState<Array<ListItem>>([])
    const [selectedCategory, setSelectedCategory] = useState(null)
    const [selectedYear, setSelectedYear] = useState(null)
    const [searchedTerm, setSearchedTerm] = useState("")
    const [watchlist, setWatchlist] = useState<Array<Number>>([])
    let LoadedMovie = Movie.map((movie : ListItem, index : number) => {
        return <RecommendedMedia
        Title={movie.Title}
        Year={movie.year}
        Overview={movie.Overview}
        Type={movie.Type}
        src={movie.src}
        key={index}
        presetBookmarked={(watchlist.includes(movie.id) ? true : false)}
        Genre={movie.genre}
        isAdult={movie.adult}
        id={movie.id}
        userEmail={currentEmail}
    //    key={`${movie.title}-${movie.id}`}

    /> })
    function init() {
        axios.get('/api/users/watchlist/get', {
            params: {
                email: currentEmail
            }
        }).then(response => {
            let watchlistID = response.data.watchlist.map(list => {
                return list.id
            })
            setWatchlist(watchlistID)
        }).catch(error => {
        console.log("Error fetching watchlist")
        })
    }
    function toggleFilter() { 
        let filterbtn = document.querySelector('.filter-btn')
        let advance_filter = document.querySelector('.content-advance-filter')
        advance_filter!.classList.toggle('show-advance-filter')
    }
    function handleSelectCategory( e : Event) {
        if(e.target.value === "All") {
            // reset filter to default
            setSelectedCategory(null)
        } else {

            let genreId = genres.filter(g => g.name === e.target.value)
            setSelectedCategory(genreId[0].id) 
        }
    }
    function handleSelectYear(e : Event) {
        if(e.target.value === "Any") {
            setSelectedYear(null)
        } else {

            setSelectedYear(e.target.value)
        }
    }
    function handleSearch(e : Event) {
        setSearchedTerm(e.target.value);
    }
    useEffect(() => {
        if(currentEmail && watchlist.length == 0) {

            init();
        }
        let filter = []
        if(selectedCategory && selectedYear && searchedTerm) {
            filter = Movie.filter(movie => (movie.genre === selectedCategory && movie.year === selectedYear && movie.Title.startsWith(searchedTerm)));
        } else if (selectedCategory && selectedYear) {
            filter = Movie.filter(movie => movie.genre === selectedCategory && movie.year === selectedYear)
        } else if(selectedYear && searchedTerm) {
            filter = Movie.filter(movie => movie.year === selectedYear && movie.Title.startsWith(searchedTerm))
        } else if(selectedCategory && searchedTerm) {
            filter = Movie.filter(movie => movie.genre === selectedCategory && movie.Title.startsWith(searchedTerm))
        } else if(selectedCategory) {
            filter = Movie.filter(movie => movie.genre === selectedCategory)
            
        } else if(selectedYear) {
            filter = Movie.filter(movie => movie.year === selectedYear)

        } else if(searchedTerm) {
            filter = Movie.filter(movie => movie.Title.startsWith(searchedTerm))
        } else {
            // reset list? 
            filter = []
        }
        setFilteredMovie(filter)
    },[selectedCategory, selectedYear, searchedTerm, currentEmail, currentUser,watchlist]);
    return (
        <section id="Movie" className='media-dashboard'>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
            <section className='trending-section'>
                <Carousel  id="Carousel">
                    {    
                        trendingMovie.map((list , index) => {
                            {if(index == trendingMovie.length - 1) {

                            }}
                            return <Carousel.Item key={list.id}>
                                        <CarouselsContent 
                                            Title={list.Title}
                                            
                                            Year={list.year}
                                            IsAdult={list.adult}
                                            Type={list.Type}
                                            src={list.src}
                                        />
                            </Carousel.Item>
                          
                        })
                    }
                </Carousel>
            
            </section>
            <section className="media-content">
                <section className='content-header'>
                    <section className='content-filter'>
                        <h2>Movies</h2>
                        <div className='utils'>
                            <button onClick={toggleFilter} className='cta filter-btn'>Filter</button>
                            <div className='search-box'>
                                <FontAwesomeIcon icon={faSearch}/>
                                <input onChange={e => handleSearch(e)} type='text' placeholder='Search movie name'/>
                            </div>
                        </div>
                    </section>
                    <section className='content-advance-filter'>
                        <select onChange={e => handleSelectCategory(e)}  name="category" >
                            <option value="" disabled>Select genre</option>
                            <option value="All">All</option>
                            {/* {
                                genres.map(genre => {
                                    return <option key={genre.id} value={genre.name}>{genre.name}</option>
                                })
                            } */}
                        </select>
                        <select onChange={e => handleSelectYear(e)} name="year">
                            <option value="" disabled>Select year</option>
                            <option value="Any">Any</option>
                            <option value="2016" >2016</option>
                            <option value="2017" >2017</option>
                            <option value="2018" >2018</option>
                            <option value="2019" >2019</option>
                            <option value="2020" >2020</option>
                            <option value="2021" >2021</option>
                            <option value="2022" >2022</option>
                            <option value="2023" >2023</option>
                            <option value="2024" >2024</option>
                        </select>
                    </section>
                </section>
                <section className='content-body'>
                    {/* where movies are */}
                    <section className="content-wrapper">

                        {  
                            (selectedCategory === null && selectedYear === null && searchedTerm.length == 0) ?  LoadedMovie :
                            
                            (FilteredMovie.length > 0) ? FilteredMovie.map((movie : ListItem, index : number)=> {
                                return <RecommendedMedia
                                Title={movie.Title}
                                Year={movie.year}
                                Overview={movie.Overview}
                                Type={movie.Type}
                                src={movie.src}
                                isAdult={movie.adult}
                                id={movie.id}
                                key={index}
                            //    key={`${movie.title}-${movie.id}`}

                            /> }) :

                            <section className='empty-state'>
                                <Image 
                                    src="/icons/EmptyState.svg"
                                    alt="Empty state icon"
                                    width={120}
                                    height={120}
                                /> 
                                <p>Not found</p>
                                <p>Try searching for another category or year.</p>
                            </section>
                            
                           
                        }
                    </section>
               
                </section>
            </section>
        </section>
    )
}