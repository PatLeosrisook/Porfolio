import axios from "axios";
import Media from "../Components/Media";
import MediaComponent from "../Components/MediaComponents";
import TrendingMedia from '../Components/TrendingMedia'
import {useState , useEffect, useMemo} from 'react'
import SearchBar from "../Components/searchBar";
import data from '../assets/data.json'
import MovieIcon from '../assets/icon-category-movie.svg'
import '../CSS/Home.css'
export default function Home({addtoBookmark, removeBookmark}) {
    const [mediaList, setMediaList] = useState([])
    const [recommendList, setRecommendList] = useState([])
    const [trendingList, setTrendingList] = useState([])
    let memorizedMediaList = useMemo(() => mediaList, [mediaList])
    let memorizedRecommended = useMemo(() => recommendList, [recommendList])
    const API_KEY = process.env.REACT_APP_API_KEY
    let renderData = []
    let renderTV = []
    let renderTrending = []
    if(mediaList !== null) {

        // console.log("not render", mediaList)
        renderData = mediaList.map(movie => {
            return <Media
                Title={movie.Title}
                Image={movie.Image}
            />
        })
    } else {
    } 
   
    function requestTrendingData(media) {
        const url = `https://api.themoviedb.org/3/trending/all/day?language=en-US`;
        const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${API_KEY}`
        }
        };
        axios(url, options)
        .then(res =>{
            return res.data
        }).then(data => {
            data.results.forEach((result, index) => {
                setMediaList(prev =>  [
                    ...prev, 
                    {
                        id:result["id"],
                        Title: result[ (result["media_type"] == "movie") ? "original_title" : "original_name"],
                        Image: `https://image.tmdb.org/t/p/w200/${result["poster_path"]}`,
                        Year: result[(result["media_type"] == "movie") ? "release_date": "first_air_date"].split("-")[0],
                        Type: result["media_type"]

                    }
                ])
            })
        })
    }
    function requestRecommended() {
        //Get top rated movie first, then TV series 
        let url = 'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1';
        const options = {
            method: 'GET',
            headers: {
            accept: 'application/json',
            Authorization: `Bearer ${API_KEY}`
            }
        }
        axios(url,options).then(response => {
            return response.data
        }).then(data => {
            console.log("render recommendation", data.results)
            data.results.forEach(result => {
                setRecommendList(prev => [
                    ...prev, 
                    {
                        id:result["id"],
                        Title: result["original_title"],
                        Image: `https://image.tmdb.org/t/p/w200/${result["poster_path"]}`,
                        Year: result["release_date"].split("-")[[0]],
                        Type: "Movie",
                        Overview: (result["overview"].length > 0) ? result["overview"] : ""
                    }
                ])
            })
        })


        //TODO:: refactor this 

        url = "https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1"
        axios(url,options).then(response => {
            return response.data
        }).then(data => {
            console.log("tv recommendation", data.results)
            data.results.forEach(result => {
                setRecommendList(prev => [
                    ...prev, 
                    {
                        id:result["id"],
                        Title: result["name"],
                        Image: `https://image.tmdb.org/t/p/w200/${result["poster_path"]}`,
                        Year: result["first_air_date"].split("-")[0],
                        Type: "TV Show",
                        Overview: (result["overview"].length > 0) ? result["overview"] : ""
                    }
                ])
            })
        })
        
    };
    

    function getData(url, param, operations) {

    }
    //TEST METHOD
    function renderMedias() {
        //TODO:: console.log run first before you even filter the data
        renderTrending = new Promise((resolve) => {
            setTimeout(() => {
              const trendingData = data.filter((d) => d.isTrending == true);
              console.log("Trending data:", trendingData);
              resolve(trendingData);
            }, 1000);
          });
          
          renderTrending.then((trendingData) => {
            console.log("Data from Promise:", trendingData);
            // renderTrending = trendingData.map(data => {
            //     return <TrendingMedia
            //         Image={data.thumbnail.trending.small}
            //         Title={data.title}
            //     />
            // })
            setTrendingList(trendingData)
          });
          
        
        // console.log("trending" ,renderTrending)
    }

    useEffect(() => {
        //Load data once page load
        requestTrendingData()
        requestRecommended()
        console.log("recommend", recommendList)
    },[])
    return(
        <section id="Home">
            <section id="container">
                <section id="Trending_container">
                    <h2>Trending</h2>
                    <div class="scroller">
                        <div class="media_wrapper">
                            {memorizedMediaList.map(list => {
                                return <TrendingMedia
                                    Id={list.id}
                                    Image={list.Image}
                                    altText={`image of ${list.title}`}
                                    Title={list.Title}
                                    Caption={{
                                        year: list.Year,
                                        cate: list.Type,
                                        rating: list.rating
                                    }}
                                />
                            })}
                        </div>
                    </div>
                </section>
                <section id="FY_container">
                    <h2>Recommend for you</h2>
                    <div className="scroller">
                        {memorizedRecommended.map(list => {
                                return <MediaComponent
                                    Id={list.id}
                                    Image={list.Image}
                                    Title={list.Title}
                                    Year={list.year}
                                    Type={list.Type}
                                    Overview={list.Overview}
                                    Category={
                                    <p class="cate">
                                        <span className="cate-icon">
                                            <img src={MovieIcon} alt="" />
                                        </span>
                                        {list.Type}
                                    </p>
                                    }
                                    addtoBookmark={addtoBookmark}
                                    removeBookmark={removeBookmark}
                                />
                            })}
                    </div>
                </section>
            </section>
        </section>
    )
}