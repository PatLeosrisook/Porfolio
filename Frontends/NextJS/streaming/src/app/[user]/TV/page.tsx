'use client';
import { useEffect , useState } from "react";
import {options} from '../../../../public/API'
import axios from "axios";
import RecommendedMedia from "@/Component/RecommendedMedia";
interface ListItem { 
    Title : string,
    src : string, 
    year : string,
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
            console.log(result)
            // result = result.filter(re => re['origin_country'][0] == "US")
            // result = result.slice(0, Math.floor(result.length / 2))
            let list : ListItem[]  = result.map(tv => {
                //TODO:: remove duplicate
                return {
                    Title: tv['name'],
                    Year: tv["first_air_date"].split("-")[0],
                    Type:  "TV", 
                    adult: tv.adult,
                    src: tv["poster_path"]
                }
            })
            setTV(prev => [...prev, ...list])
        })
    }
    useEffect(() => {
        if(TV.length === 0) {
            loadTV()
        }
    })
    return (
        <section id="TV" className="Specified_Type">
            <h1>TV</h1>
            <section className="lists">
                {
                    TV.map(tv => {
                        return <RecommendedMedia
                                Title={tv.Title}
                                Year={tv.Year}
                                Type={tv.Type}
                                src={tv.src}
                                isAdult={tv.adult}
                            />
                    })
                }
            </section>
        </section>
    )
}