'use client';
import { useEffect , useState } from "react";
import {options} from '../../../../public/API'
import axios from "axios";
import RecommendedMedia from "@/Component/RecommendedMedia";
import Search from "@/Component/Search";
interface ListItem { 
    Title : string,
    src : string, 
    Overview: string,
    Year : string,
    Type : string,
    adult: boolean
}
export default function TV() {
    const [TV, setTV] = useState<ListItem[]>([])
    let loadTV = () => {
        options.url = "https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1"
        axios(options).then(Response => {
            return Response.data.results
        }).then(result => {
            
            let list : ListItem[]  = result.map(tv => {
                return {
                    Title: tv['name'],
                    Year: tv["first_air_date"].split("-")[0],
                    Overview: tv['overview'],
                    Type:  "TV", 
                    adult: tv.adult,
                    src: tv["poster_path"]
                }
            })
            setTV(list)
        })
    }
    useEffect(() => {
        if(TV.length === 0) {
            loadTV()
        }
    })
    return (
        <section id="TV" className="Specified_Type">
            <header className="category_header">
                <h1>TV</h1>
                <Search/>
            </header>
            <section className="list_wrapper">
                <section className="lists">
                    {
                        TV.map(tv => {
                            return <RecommendedMedia
                                    Title={tv.Title}
                                    Year={tv.Year}
                                    Overview={tv.Overview}
                                    Type={tv.Type}
                                    src={tv.src}
                                    isAdult={tv.adult}
                                />
                        })
                    }
                </section>
            </section>
        </section>
    )
}