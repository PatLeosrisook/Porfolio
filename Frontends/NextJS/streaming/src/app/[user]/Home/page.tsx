'use client';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Media from '../../../Component/Media'
import RecommendedMedia from '@/Component/RecommendedMedia';
import {options} from '../../../../public/API'
import { CAlert, CCarousel, CCarouselCaption, CCarouselItem, CImage } from '@coreui/react';
import '@coreui/coreui/dist/css/coreui.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'
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
            // options.url = 'https://api.themoviedb.org/3/tv/popular?language=en-US&page=1'
            // axios.request(options).then(response  => {
            //     return response.data.results
            // }).then(result => {
            //     result = result.slice(0, 5)
            //     let list = result.map(r => {

            //     })

            // }).catch(err => {
            //     console.log(err)
            // })
    }
    let loadRecommend = () => {
        options.url = "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1"
        axios(options).then(response => {
            return response.data.results
        }).then(result=> {
            let mid = Math.floor(result.length / 2)
            result = result.slice(0, mid)
            console.log("popular" ,result)
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
                <CCarousel indicators controls >
                    {

                        popularList.map(list => {
                            // console.log(list)
                            return <CCarouselItem>
                                        <CImage className="d-block w-100" src={`https://image.tmdb.org/t/p/w200/${list.src}`} />
                                        <CCarouselCaption>
                                            <div className="Media-content">
                                                <div className="sub-content">
                                                    <p>{list.year}</p>
                                                    <div className="MediaType">
                                                        <img src={`/icons/${list.Type}-icon.svg`} alt="media icon"/>
                                                        <p>{list.Type}</p>
                                                    </div>
                                                    <p>{(list.adult) ? "18+":"PG"}</p>
                                                </div>
                                                <p className="media-title">{list.Title}</p>
                                            </div>
                                        </CCarouselCaption>
                            </CCarouselItem>
                          
                        })
                    }
                </CCarousel>
            </section>
            <section id="recommends">
                <h2>Recommend for you</h2>
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
    )
}