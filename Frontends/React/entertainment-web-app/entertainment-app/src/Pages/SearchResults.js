import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import axios from 'axios';
import MediaComponent from "../Components/MediaComponents";
export default function SearchResults({removeBookmark, addtoBookmark}) {
    let location = useLocation()
    const API_KEY = process.env.REACT_APP_API_KEY
    const API_URL = process.env.REACT_APP_API_URL
    const API_OPTIONS =  {
        method: 'GET',
        headers: {
        accept: 'application/json',
        Authorization: `Bearer ${API_KEY}`
        }
    }
    const [searchResult, setSearchResult] = useState([])
    const [resultNo, setResultNo] = useState(0)
    useEffect(() => {

        if(location.state !== null) {
            let url =   `https://api.themoviedb.org/3/search/multi?query=${location.state.query}&include_adult=false&language=en-US&page=1`
            axios(url, API_OPTIONS).then(response => {
                return response.data
            }).then(data => {
                console.log(data.results)
                setResultNo(data.results.length)
                data.results.filter(results => results["media_type"] !== "person").forEach(result => {
                    let mediaType = result["media_type"]
                    setSearchResult(prev => [
                        ...prev, 
                        {
                            id: result.id,
                            Title: result[(mediaType == "movie") ? "original_title" : "name"],
                            Image: `https://image.tmdb.org/t/p/w200/${result["poster_path"]}`,
                            // Year: result[(mediaType == "movie") ? "release_date" : "first_air_date"].split("-")[0],
                            Type: (mediaType == "movie") ? "Movies" : "TV Series",
                            Overview: result["overview"],
                            Class: (result["poster_path"] == null) ? "" : "EmptyImage"
                        }
                    ])
                })
                
            })

        }
    },[])
    return (
        <section id="SearchResults">
            <h1>Found <span id="results_no">{resultNo}</span> results for <span id="search_query">{`'${(location.state == null) ? "" : location.state.query}'`}</span></h1>
            <section className="Results">
                {
                    searchResult.map(result => {
                       return  <MediaComponent
                            Id={result.id}
                            Image={result.Image}
                            Title={result.Title}
                            Year={result.year}
                            Type={result.Type}
                            Overview={result.Overview}
                            removeBookmark={removeBookmark}
                            addtoBookmark={addtoBookmark}
                        />
                    })
                }
            </section>
        </section>
    )
}