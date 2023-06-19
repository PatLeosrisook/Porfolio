import axios from "axios";
import Media from "../Components/Media";
import {useState , useEffect} from 'react'
export default function Home() {
    const [mediaList, setMediaList] = useState([])
    const [TvList, setTVList] = useState([])
    let renderData = []
    let renderTV = []
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

    useEffect(() => {
        
    },)
    return(
        <section>

        </section>
    )
}