'use client';
import axios from 'axios';
import { ReactNode, useEffect, useState } from 'react';
import Media from '../../../Component/Media'
import RecommendedMedia from '@/Component/RecommendedMedia';
import {options} from '../../../../public/API'
import Carousel from 'react-bootstrap/Carousel';
import CarouselsContent from '../../../Component/carouselContent';
import ViewMore from '@/app/[user]/Home/ViewMore';
import { getUser } from '@/lib/getUser';
interface ListItem { 
    Id: number,
    Title : string,
    src : string, 
    Overview: string,
    year : string,
    Type : string,
    adult: boolean
}
export default function Home() {
    const [currentUser, setCurrentUser] = useState('')
    const [popularList, setPopularList] = useState<Array<ListItem>>([])
    const [recommendedList, setRecommendedList] = useState<Array<ReactNode>>([])
    const [recommendedSeries, setRecommendedSeries] = useState<Array<ReactNode>>([])
    let loadTrending = () => {
          options.url = 'https://api.themoviedb.org/3/trending/all/day?language=en-US'
          axios.request(options)
            .then(function (response) {
                return response.data.results
            }).then(result => {
                result = result.slice(0, 5)
                let lists : ListItem[] = []
                lists = result.map(r => {
                    return {
                        Title : r['original_title'] || r['original_name'],
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
        options.url = 'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1'
        axios(options).then(response => {
            return response.data.results
        }).then(result=> {
            result = result.filter(media => media['release_date'].split("-")[0] >= 2000)
            result = result.slice(0, 5)
            let list : ReactNode[] = []
            list = result.map((media) => {
                return <RecommendedMedia
                    Title={media['original_title']}
                    Overview={media['overview']}
                    Year={media['release_date'].split("-")[0]}
                    isAdult={media.adult}
                    Type={"Movie"}
                    src={media["poster_path"]}
                />
               
            })
            // list.push({view : 'more'})
            setRecommendedList(list)
            
        }).catch(e=> {
            console.log("unable to load movie")
        })
    }
    let loadRecommendedTV = () => {
        if(recommendedList.length > 0) {
            return; 
        }
        options.url = "https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1"
        axios(options).then(response => {
            return response.data.results
        }).then(result => {
            result = result.filter(media => media['first_air_date'].split("-")[0] >= 2018)
            result = result.slice(0, 5)
            // let list: ListItem[] = []
            let list = new Map()
            result.forEach((media, index) => {
                
                let item = {
                    Title : media['original_name'],
                    Overview: media['overview'],
                    src: media["poster_path"],
                    year:  media['first_air_date'].split("-")[0] ,
                    Type: "Series",
                    adult: media.adult
                }
                list.set(media['id'], item )
            })
            let uniqueList = Array.from(list.values())
            let listComponent = uniqueList.map(list => {
                return <RecommendedMedia
                        Title={list.Title}
                        Overview={list.Overview}
                        Year={list.year}
                        isAdult={list.adult}
                        Type={list.Type}
                        src={list.src}
                    />
            })
            setRecommendedSeries(listComponent)
        })
        .catch(function (error) {
            console.error(error);
        });
    }
    let setUser = async()=> {
        let user = await getUser()
        setCurrentUser(user.currentUser)
    }
    useEffect(  () => {
        if(popularList.length == 0 && recommendedList.length == 0 && recommendedSeries.length == 0) {
            loadTrending()
            loadRecommend()
            loadRecommendedTV()
            setUser()

        }

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
                <div className='overview-header'>
                    <h2>Recommend movies</h2>
                    <ViewMore user={currentUser} forwardLink='Movie'/>
                </div>
                <section className="scroller">
                    <section className="lists">
                        {recommendedList}
                    </section>

                </section>
            </section>
            <section className='recommends'>
                <div className='overview-header'>
                    <h2>Recommend TV series</h2>
                    <ViewMore user={currentUser} forwardLink='TV'/>
                </div>
                
                <div className='scroller'>
                    <section className='lists'>
                       {recommendedSeries}
                    </section>
                </div>
            </section>
        </section>
    )
}