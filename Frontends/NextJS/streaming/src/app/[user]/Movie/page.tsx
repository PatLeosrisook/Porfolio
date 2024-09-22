'use client';
import { useEffect, useState,useContext, createContext } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import CarouselsContent from '../../../Component/carouselContent';
import RecommendedMedia from '@/Component/RecommendedMedia';

import MovieContext from '@/helper/movieContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import Search from '@/Component/Search';
import DropDown from '@/Component/DropDown';
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
    const [genreComponents, Movie, currentUser, trendingMovie] = useContext(MovieContext)
    useEffect(() => {
    
    },[Movie, trendingMovie]);
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
            </section>
            <section id="movie-content">
                <section className='content-header'>
                    <section className='content-filter'>
                        <h2>Movies</h2>
                        <div className='utils'>
                            <button className='cta'>Filter</button>
                            <div className='search-box'>
                                <FontAwesomeIcon icon={faSearch}/>
                                <input type='text' placeholder='Search movie name'/>
                            </div>
                        </div>
                    </section>
                    <section className='content-advance-filter'>
                        {/* <DropDown lists={[
                            {name: "Action" , 
                             value: "Action",
                             id: 1
                            },
                            {name: "Adventure" , 
                             value: "Adventure",
                             id: 2
                            },
                            {name: "Horror" , 
                             value: "Horror",
                             id: 3
                            },
                            {name: "Romantic" , 
                             value: "Romantic",
                             id: 4
                            },
                        ]} */}
                        <select name="category" aria-placeholder='Genre'>
                            <option value="" disabled>Select genre</option>
                            <option value="Action" >Action</option>
                            <option value="Adventure" >Adventure</option>
                            <option value="Romantic" >Romantic</option>
                        </select>
                        <select name="year">
                            <option value="" disabled>Select year</option>
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
                            {
                                Movie.map(movie => {
                                    return <RecommendedMedia 
                                            Title={movie.title}
                                            Year={movie.year}
                                            Overview={movie.overview}
                                            Type={movie.type}
                                            src={movie.poster_path}
                                            isAdult={movie.adult}
                                    />
                                })
                            }
                    </section>
                </section>
            </section>
            {/* <section className='other-genre'>
                 {genreComponents}
            </section> */}
        </section>
    )
}