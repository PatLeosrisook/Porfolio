'use client';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Media from '../../../Component/Media'
import RecommendedMedia from '@/Component/RecommendedMedia';
import {options} from '../../../../public/API'
import Image from 'next/image';
import Carousel from 'react-bootstrap/Carousel';
import CarouselsContent from '../../../Component/carouselContent';

interface ListItem { 
    Title : string,
    src : string, 
    year : string,
    Type : string,
    adult: boolean
}
export default function Home() {

    const [popularList, setPopularList] = useState<Array<ListItem>>([])
    const [recommendedList, setRecommendedList] = useState<Array<ListItem>>([])
    const [recommendedSeries, setRecommendedSeries] = useState<Array<ListItem>>([])
    let loadTrending = () => {
          options.url = 'https://api.themoviedb.org/3/trending/all/day?language=en-US'
          axios.request(options)
            .then(function (response) {
            //   console.log(response.data);
                return response.data.results
            }).then(result => {
                result = result.slice(0, 5)
                console.log(result)
                let lists : ListItem[] = []
                lists = result.map(r => {
                    return {
                        Title : r['original_title'],
                        src: r["poster_path"],
                        year: (r.hasOwnProperty('release_date')) ? r['release_date'].split("-")[0] : r['first_air_date'].split("-")[0],
                        Type: r["media_type"],
                        adult: r.adult
                    }
                })
                
                setPopularList((prev ) => [...prev, ...lists])
            })
            .catch(function (error) {
              console.error(error);
            });
          
    }
    let loadRecommend = () => {
        options.url = "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1"
        axios(options).then(response => {
            return response.data.results
        }).then(result=> {
            let mid = 5
            result = result.slice(0, 5)
            console.log(result)
            let list : ListItem[] = []
            list = result.map((media) => {
                return {
                    Title : media['original_title'],
                    src: media["poster_path"],
                    year:  media['release_date'].split("-")[0] ,
                    Type: "movie",
                    adult: media.adult
                }
            })
            // list.push({view : 'more'})
            setRecommendedList(prev => [...prev, ...list])
            
        }).catch(e=> {
            console.log("unable to load movie")
        })
    }
    let loadRecommendedTV = () => {
        options.url = "https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1"
        axios(options).then(response => {
            return response.data.results
        }).then(result => {
            result = result.slice(0, 5)
            console.log(result)
            let list: ListItem[] = []
            list = result.map((media) => {
                return {
                    Title : media['original_name'],
                    src: media["poster_path"],
                    year:  media['first_air_date'].split("-")[0] ,
                    Type: "Series",
                    adult: media.adult
                }
            })
            setRecommendedSeries(prev => [...prev, ...list])
        })
        .catch(function (error) {
            console.error(error);
        });
    }
    useEffect(() => {
        if(popularList.length == 0 && recommendedList.length == 0 && recommendedSeries.length == 0) {

            loadTrending()
            loadRecommend()
            loadRecommendedTV()
        }

        console.log("afterr load", popularList, recommendedList,  recommendedSeries)
    })
    return (
        <section id="Home">
            <section id="trending">
                <Carousel  id="Carousel">
                    {
                        
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
                    }
                </Carousel>
            </section>
          
            <section className="recommends">
                <h2>Recommend movies</h2>
                <section className="scroller">
                    <section className="lists">
                        {
                            recommendedList.map(list => {
                                return <RecommendedMedia
                                        Title={list.Title}
                                        Year={list.year}
                                        isAdult={list.adult}
                                        Type={list.Type}
                                        src={list.src}
                                />
                            })
                        }
                    </section>

                </section>
            </section>
            <section className='recommends'>
                <h2>Recommend TV series</h2>
                <div className='scroller'>
                    <section className='lists'>
                        {
                            recommendedSeries.map(list => {
                                return <RecommendedMedia
                                        Title={list.Title}
                                        Year={list.year}
                                        isAdult={list.adult}
                                        Type={list.Type}
                                        src={list.src}
                                />
                            })
                        }
                    </section>
                </div>
            </section>
        </section>
    )
}