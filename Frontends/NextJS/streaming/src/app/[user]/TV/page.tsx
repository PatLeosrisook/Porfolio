'use client';
import { useEffect, useState,useContext, createContext } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import CarouselsContent from '../../../Component/carouselContent';
import RecommendedMedia from '@/Component/RecommendedMedia';
import getGenre from '@/helper/getMovieGenre'
import MovieContext from '@/helper/movieContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import axios from 'axios';
import { options } from '../../../../public/API';
interface ListItem { 
    id : number,
    Title : string,
    src : string, 
    genre: number,
    Overview: string,
    year : string,
    Type : string,
    adult: boolean
}
export default function TV() {
    const [TV, setTV] = useState<ListItem[]>([])
    const [trendingTv, setTrendingTv] = useState<Array<ListItem>>([])
    const [FilteredMovie, setFilteredMovie] = useState<Array<ListItem>>([])
    const [selectedCategory, setSelectedCategory] = useState(null)
    const [selectedYear, setSelectedYear] = useState(null)
    const [searchedTerm, setSearchedTerm] = useState("")
    const [genres, setGenres] = useState([])
    const [minYear, setMinYear] = useState(0)
    const [maxYear, setMaxYear] = useState(0)
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
    function getGenre() {
        options.url = 'https://api.themoviedb.org/3/genre/tv/list?language=en'
        axios(options).then(response => {
            return response.data.genres
        }).then(result => {
            setGenres(result)
        })
    }
    let loadTrending = () => {
        options.url = "https://api.themoviedb.org/3/trending/tv/day?language=en-US"
        axios(options).then(Response => {
            return Response.data.results
        }).then(result => {
            let min = Infinity 
            let max = -Infinity 
            let list : ListItem[]  = result.map(tv => {
                if(Number(tv["first_air_date"].split("-")[0]) < min) {
                    min = Number(tv["first_air_date"].split("-")[0])
                } 
                if(Number(tv["first_air_date"].split("-")[0]) > max) {
                    max = Number(tv["first_air_date"].split("-")[0])
                }
                return {
                    Title: tv['name'],
                    year: tv["first_air_date"].split("-")[0],
                    genre: tv['genre_ids'][0],
                    Overview: tv['overview'],
                    Type:  "TV", 
                    adult: tv.adult,
                    src: tv["poster_path"]
                }
            })
            console.log(list, min, max)
            setTrendingTv(list)
            setMinYear(min)
            setMaxYear(max)
        })
    }
    let loadTV = () => {
        options.url = "https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1"
        axios(options).then(Response => {
            return Response.data.results
        }).then(result => {
            
            let list : ListItem[]  = result.map(tv => {
                return {
                    id: tv['id'],
                    Title: tv['name'],
                    year: tv["first_air_date"].split("-")[0],
                    genre: tv['genre_ids'][0],
                    Overview: tv['overview'],
                    Type:  "TV", 
                    adult: tv.adult,
                    src: tv["poster_path"]
                }
            })
            console.log(list, "Re")
            setTV(list)
        })
    }
    useEffect(() => {
        if(TV.length === 0) {
            loadTV()
            getGenre(); 
            loadTrending();
        } else {
            // if(searched !== "") {
            //     // find the search input
            //     let filteredResult = TV.filter(tv => tv.Title.toLowerCase().startsWith(searched.toLowerCase()))
            //     setFilteredList(filteredResult)
            // } else {
            //     setTV(TV)
            // }

            let filter : Array<ListItem> = []
            if(selectedCategory && selectedYear && searchedTerm) {
                filter = TV.filter(movie => (movie.genre === selectedCategory && movie.year === selectedYear && movie.Title.startsWith(searchedTerm)));
            } else if (selectedCategory && selectedYear) {
                filter = TV.filter(movie => movie.genre === selectedCategory && movie.year === selectedYear)
            } else if(selectedYear && searchedTerm) {
                filter = TV.filter(movie => movie.year === selectedYear && movie.Title.startsWith(searchedTerm))
            } else if(selectedCategory && searchedTerm) {
                filter = TV.filter(movie => movie.genre === selectedCategory && movie.Title.startsWith(searchedTerm))
            } else if(selectedCategory) {
                filter = TV.filter(movie => movie.genre === selectedCategory)
                
            } else if(selectedYear) {
                filter = TV.filter(movie => movie.year === selectedYear)
    
            } else if(searchedTerm) {
                filter = TV.filter(movie => movie.Title.startsWith(searchedTerm))
            } else {
                // reset list? 
                filter = []
            }
            console.log("Filtered", filter, FilteredMovie)
            setFilteredMovie(filter)
        }
    },[selectedCategory, selectedYear, searchedTerm])
    return (
        <section id="Tv" className='media-dashboard'>
        <section className='trending-section'>
            <Carousel  id="Carousel">
                {    
                    trendingTv.map((list , index) => {
                        {if(index == trendingTv.length - 1) {

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
                    <h2>Tv Shows</h2>
                    <div className='utils'>
                        <button onClick={toggleFilter} className='cta filter-btn'>Filter</button>
                        <div className='search-box'>
                            <FontAwesomeIcon icon={faSearch}/>
                            <input onChange={e => handleSearch(e)} type='text' placeholder='Search movie name'/>
                        </div>
                    </div>
                </section>
                <section className='content-advance-filter'>
                    <select onChange={e => handleSelectCategory(e)}  name="category">
                        <option value="" disabled>Select genre</option>
                        <option value="All">All</option>
                        {
                            //generate dynamica genre as per apis 
                            genres.map(genre => {
                                return <option key={genre.id} value={genre.name}>{genre.name}</option>
                            })
                        }
                    </select>
                    <select onChange={e => handleSelectYear(e)} name="year">
                        <option value="" disabled>Select year</option>
                        <option value="Any">Any</option>
                        {
                            // generate years from the oldest year to the  most recent year
                            Array.from({ length: 2024 - 1999 + 1 }, (_, i) => 1999 + i).map(op => {
                                return <option key={op} value={op}>{op}</option>
                            })
                        }
                    </select>
                </section>
            </section>
            <section className='content-body'>
                {/* where movies are */}
                <section className="content-wrapper">

                    {  
                        (selectedCategory === null && selectedYear === null && searchedTerm.length == 0) ?  TV.map((movie : ListItem, index : number) => {
                            return <RecommendedMedia
                            id={movie.id}
                            Title={movie.Title}
                            Year={movie.year}
                            Overview={movie.Overview}
                            Type={movie.Type}
                            src={movie.src}
                            key={index}
                            isAdult={movie.adult}
                            
                        //    key={`${movie.title}-${movie.id}`}

                        /> 
                        }) :
                        
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