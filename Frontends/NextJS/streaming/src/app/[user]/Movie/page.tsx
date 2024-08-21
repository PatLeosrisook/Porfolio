'use client';
import { useEffect, useState,useContext, createContext } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import CarouselsContent from '../../../Component/carouselContent';


import MovieContext from '@/helper/movieContext';
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
            <section className='other-genre'>
                 {genreComponents}
            </section>
        </section>
    )
}