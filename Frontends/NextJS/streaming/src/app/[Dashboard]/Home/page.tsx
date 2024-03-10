'use client';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Media from '../../../Component/Media'
interface ListItem { 
    Title : string,
    src : string, 
    year : string,
    Type : string,
    adult: boolean
}
export default function Home() {
    const [popularList, setPopularList] = useState<Array<ListItem>>([])
    let loadTrending = () => {
        const options = {
            method: 'GET',
            url: 'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1',
            headers: {
              accept: 'application/json',
              Authorization: 'Bearer' //TODO:: reenter the tokent here
            }
          };
          
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
                        year: r['release_date'].split("-")[0],
                        Type: "Movie",
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
    useEffect(() => {
        if(popularList.length == 0) {

            loadTrending()
        }

        console.log("afterr load", popularList)
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

                </section>
            </section>
        </section>
    )
}