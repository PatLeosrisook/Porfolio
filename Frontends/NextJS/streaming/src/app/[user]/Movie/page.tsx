'use client';
import { useEffect, useState,useContext, createContext } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import CarouselsContent from '../../../Component/carouselContent';
import RecommendedMedia from '@/Component/RecommendedMedia';
import getGenre from '@/helper/getMovieGenre'
import MovieContext from '@/helper/movieContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import Search from '@/Component/Search';
import DropDown from '@/Component/DropDown';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import { Pagination } from 'swiper/modules';
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
    const [genreComponents, Movie, currentUser, trendingMovie, genres] = useContext(MovieContext)
    const [FilteredMovie, setFilteredMovie] = useState<Array<ListItem>>([])
    const [selectedCategory, setSelectedCategory] = useState(null)
    const [selectedYear, setSelectedYear] = useState(null)
    const [currentGenre, setCurrentGenre] = useState([])
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
    useEffect(() => {
        let filter = null
        if(selectedCategory && selectedYear) {
            filter = Movie.filter(movie => (movie.genre === selectedCategory && movie.year === selectedYear))
        } else if (selectedCategory) {
            filter = Movie.filter(movie => movie.genre === selectedCategory)
        } else if(selectedYear) {
            filter = Movie.filter(movie => movie.year === selectedYear)
        } else {
            // reset list? 
            filter = null 
        }
        console.log("Filtered", filter)
        setFilteredMovie(filter)
    },[selectedCategory, selectedYear]);
    return (
        <section id="Movie" className='media-dashboard'>
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
                {/* <Swiper
                slidesPerView={'auto'}
                centeredSlides={true}
                spaceBetween={30}
                pagination={{
                clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
                id="Carousel"
            >
              {
                trendingMovie.map((list , index) => {
                    {if(index == trendingMovie.length - 1) {

                    }}
                    return <SwiperSlide key={list.id}>
                                <CarouselsContent 
                                    Title={list.Title}
                                    
                                    Year={list.year}
                                    IsAdult={list.adult}
                                    Type={list.Type}
                                    src={list.src}
                                />
                    </SwiperSlide>
                  
                })
              }
                </Swiper> */}
            </section>
            <section id="movie-content">
                <section className='content-header'>
                    <section className='content-filter'>
                        <h2>Movies</h2>
                        <div className='utils'>
                            <button onClick={toggleFilter} className='cta filter-btn'>Filter</button>
                            <div className='search-box'>
                                <FontAwesomeIcon icon={faSearch}/>
                                <input type='text' placeholder='Search movie name'/>
                            </div>
                        </div>
                    </section>
                    <section className='content-advance-filter'>
                        <select onChange={e => handleSelectCategory(e)}  name="category" aria-placeholder='Genre'>
                            <option value="" disabled>Select genre</option>
                            <option value="All">All</option>
                            {
                                genres.map(genre => {
                                    return <option key={genre.id} value={genre.name}>{genre.name}</option>
                                })
                            }
                            {/* <option value="Action" >Action</option>
                            <option value="Adventure" >Adventure</option>
                            <option value="Romantic" >Romantic</option> */}
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
                    <section id="content-wrapper">
                        {/* key here will use index temporarily. */}
                        {/* TODO:: Fig bug here */}
                        {Movie.map((movie : ListItem, index : number) => {
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

                        /> 
                        })}
                    </section>
                    {
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

                        Movie.map((movie : ListItem, index : number) => {
                            return <RecommendedMedia
                            Title={movie.Title}
                            Year={movie.year}
                            Overview={movie.Overview}
                            Type={movie.Type}
                            src={movie.src}
                            key={index}
                            isAdult={movie.adult}
                            id={movie.id}
                        //    key={`${movie.title}-${movie.id}`}

                        /> 
                        })
                    }
                </section>
            </section>
            {/* <section className='other-genre'>
                 {genreComponents}
            </section> */}
        </section>
    )
}