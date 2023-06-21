import axios from "axios";
import Media from "../Components/Media";
import TrendingMedia from '../Components/TrendingMedia'
import {useState , useEffect} from 'react'
import SearchBar from "../Components/searchBar";
import data from '../assets/data.json'
import MovieIcon from '../assets/icon-category-movie.svg'
import '../CSS/Home.css'
export default function Home() {
    const [mediaList, setMediaList] = useState([])
    const [TvList, setTVList] = useState([])
    const [trendingList, setTrendingList] = useState([])
    let renderData = []
    let renderTV = []
    let renderTrending = []
    if(mediaList !== null) {

        console.log("not render", mediaList)
        renderData = mediaList.map(movie => {
            return <Media
                Title={movie.Title}
                Image={movie.Image}
            />
        })
        console.log(renderData)
    } else {
        console.log("not render", mediaList)
    } 
    if(TvList !== null) {
        renderTV = TvList.map(tv => {
            return <Media
                Title={tv.Title}
                Image={tv.Image}
            />
        })
    }
    function requestData() {
        console.log("fetching.....")
        const url = 'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1';
        const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            
        }
        };
        axios(url, options)
        .then(res =>{
            console.log(res)
            return res.data
        }).then(data => {
            console.log('data',data.results[0], typeof mediaList)
            // setMediaList(prev =>  prev.push({
            //     Title: data.results[0]["original_title"],
            //     Image: data.results[0]["backdrop_path"]
            //   }));
              setMediaList(prev => [
                ...prev, 
                {
                    Title: data.results[0]["original_title"],
                    Image: `https://image.tmdb.org/t/p/w200/${data.results[0]["poster_path"]}`
                }    
              ])
        })
    }
    function renderTVItem() {
        const url = 'https://api.themoviedb.org/3/tv/popular?language=en-US&page=1';
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                
            }
        }
        axios(url, options)
        .then(res =>{
            console.log(res)
            return res.data
        }).then(data => {
            console.log('data',data.results[0], typeof mediaList)
              setTVList(prev => [
                ...prev, 
                {
                    Title: data.results[0]["name"],
                    Image: `https://image.tmdb.org/t/p/w200/${data.results[0]["poster_path"]}`
                }    
              ])
        })
    };
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
        renderMedias()
        console.log(trendingList)
    },)
    return(
        <section id="Home">
            <section id="container">
                <SearchBar/>
                <section id="Trending_container">
                    <h2>Trending</h2>
                    <div class="scroller">
                        {trendingList.map(list => {
                            return <TrendingMedia
                                Image={"." + list.thumbnail.trending.small}
                                altText={`image of ${list.title}`}
                                Title={list.title}
                                Caption={{
                                    year: list.year,
                                    cate: "Movie",
                                    rating: list.rating
                                }}
                            />
                        })}
                    </div>
                </section>
                <section id="FY_container">
                    <h2>Recommend for you</h2>
                    <div className="scroller">
                        {trendingList.map(list => {
                                return <Media
                                    Image={"." + list.thumbnail.trending.small}
                                    altText={`image of ${list.title}`}
                                    Title={list.title}
                                    Caption={{
                                        year: list.year,
                                        cate: "Movie",
                                        rating: list.rating
                                    }}
                                    Category={
                                    <p class="cate">
                                        <span className="cate-icon">
                                            <img src={MovieIcon} alt="" />
                                        </span>Movie
                                    </p>
                                    }
                                />
                            })}
                    </div>
                </section>
            </section>
        </section>
    )
}