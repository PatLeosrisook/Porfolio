'use client';
import { useEffect, useState,useContext, createContext } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import CarouselsContent from '../../../Component/carouselContent';


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
                    <section className='content-fileter'>
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
                        <DropDown lists={[
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
                        ]}
                    </section>
                </section>
            </section>
            {/* <section className='other-genre'>
                 {genreComponents}
            </section> */}
        </section>
    )
}