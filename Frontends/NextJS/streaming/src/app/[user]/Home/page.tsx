'use client';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Media from '../../../Component/Media'
import RecommendedMedia from '@/Component/RecommendedMedia';
import {options} from '../../../../public/API'
import Image from 'next/image';
import Carousels from '../../../Component/carouselContent'
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
            setRecommendedList(prev => [...prev, ...list])
            
        }).catch(e=> {
            console.log("unable to load movie")
        })
    }
    useEffect(() => {
        if(popularList.length == 0 && recommendedList.length == 0) {

            loadTrending()
            loadRecommend()
        }

        console.log("afterr load", popularList, recommendedList)
    })
    return (
        <section id="Home">
            <section id="trending">
                <Carousel  id="Carousel">
                    {
                        
                        popularList.map(list => {
                            
                            return <Carousel.Item >
                                        <CarouselsContent 
                                            Title={list.Title}
                                            Year={list.year}
                                            IsAdult={list.adult}
                                            Type={list.Type}
                                            src={list.src}
                                        />
                                        {/* <img src={`https://image.tmdb.org/t/p/w200/${list.src}`}  alt={`${list.Title}`} className="carousel_image" />
                                        <Carousel.Caption className='trending_media' style={{"backgroundImage" : `url(https://image.tmdb.org/t/p/w200/(${list.src})`}}>
                                                <div className="sub-content">
                                                        <p>{list.year}</p>
                                                        <div className="MediaType">
                                                            <img src={`/icons/${list.Type}-icon.svg`} alt="media icon"/>
                                                            <p>{list.Type}</p>
                                                        </div>
                                                        <p>{(list.adult) ? "18+":"PG"}</p>
                                                </div>
                                                <p className="media-title">{list.Title}</p>
                                        </Carousel.Caption> */}
                            </Carousel.Item>
                          
                        })
                    }
                </Carousel>
            </section>
            <section id="recommends">
                <h2>Recommend for you</h2>
                <div id="scroller">
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

                </div>
            </section>
        </section>
    )
}