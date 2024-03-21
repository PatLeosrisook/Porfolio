'use client';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Media from '../../../Component/Media'
import RecommendedMedia from '@/Component/RecommendedMedia';
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
    const options = {
        method: 'GET',
        url: 'https://api.themoviedb.org/3/trending/all/day?language=en-US',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwOGFmZTU1MTQzYTVmNjdiNzQ0ZDhjNTg3NGU1NjQ4OCIsInN1YiI6IjVlMjIzZGUzOGYyNmJjMDAxNTc0YWI3ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5xEfY5DbDSlb5djCaSq3VW5kdAQs6ppHdAhdD7PORxc' //TODO:: reenter the tokent here
        }
      };
    let loadTrending = () => {
          
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
                <h2>Trending</h2>
                <section className="lists">
                    {

                        popularList.map(list => {
                            // console.log(list)
                            return <Media 
                                Title={list.Title}
                                Year={list.year}
                                Image={list.src}
                                Type={list.Type}
                                isAdult={list.adult}
                            />
                        })
                    }
                </section>
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