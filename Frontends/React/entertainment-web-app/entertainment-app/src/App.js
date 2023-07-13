import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import Home from './Pages/Home';
import Registrations from './Pages/Registrations';
//Collections of css files. 
import './CSS/Register.css'
import './CSS/Global.css'
import Nav from './Components/Nav';
import Movie from './Pages/Movie'
import { createContext, useEffect, useMemo, useState } from 'react';
import {Routes, Route} from 'react-router-dom'
import Bookmark from './Pages/BookedMark';
import SearchBar from './Components/searchBar';
import BookmarkContextProvider from './Components/BookmarkContext';
import SearchResults from './Pages/SearchResults';
let test = []
function App() {
  const [Bookmarked, setBookmarked] = useState([])
  const API_KEY = process.env.REACT_APP_API_KEY
  const [Movies, setMovies] = useState([])
  const [TV, setTV] = useState([])


  const [mediaList, setMediaList] = useState([])
  const [recommendList, setRecommendList] = useState([])
  const memorizedMovies = useMemo(() => Movies, [Movie])
  const memorizedTV = useMemo(() => TV, [TV])
  const options = {
    method: 'GET',
    headers: {
    accept: 'application/json',
    Authorization: `Bearer ${API_KEY}`
    }
}
  function addToBookmark(Detail) {
    // element.stopPropagation();
    console.log("add to bookmark", Detail)
    setBookmarked(prev => [
      ...prev, 
      Detail
    ])
  
    if(test.filter(item => item.id == Detail.id).length == 0) {
      test.push(Detail)
    }
    
    localStorage.setItem("bookmarked", JSON.stringify(test))
  }
  function removeFromBookmark(id) {
    setBookmarked(prev => prev.filter(x => x.id !== id))
    test = test.filter(x => x.id !== id)
    localStorage.setItem('bookmarked', JSON.stringify(test))
  }
  function renderMovie() {
    let url = "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc"
    axios(url, options).then(response=> {
        return response.data
    }).then(data => {
        console.log("Movie", data.results)
        data.results.forEach(result => {
            setMovies(prev => [
                ...prev, 
                {
                    Title: result["original_title"],
                    Image: `https://image.tmdb.org/t/p/w200/${result["poster_path"]}`,
                    Year: result["release_date"].split("-")[0],
                    Type: "Movie"
                }
            ])
        })
    })
  }
  function renderTV() {
    let url = "https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc"
    axios(url, options).then(response=> {
        return response.data
    }).then(data => {
        console.log("Movie", data.results)
        data.results.forEach(result => {
            setTV(prev => [
                ...prev, 
                {
                    Title: result["original_name"],
                    Image: `https://image.tmdb.org/t/p/w200/${result["poster_path"]}`,
                    Year: result["first_air_date"].split("-")[0],
                    Type: "TV show"
                }
            ])
        })
    })
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

  
  useEffect(() => {
    requestRecommended()
    requestTrendingData()
    
  },[])
  return (
    <div className="App">

        <Routes>
            <Route path="" element={<Nav/>}>
              <Route path="/search" element={<SearchResults removeBookmark={removeFromBookmark} addtoBookmark={addToBookmark} />} />
              <Route path="/Home" element={<Home addtoBookmark={addToBookmark} removeBookmark={removeFromBookmark} recommendList={recommendList} TrendingList={mediaList} />} />
              <Route path="/Movie" element={<Movie title={"Movie"} renderMedia={renderMovie} Medias={memorizedMovies}/>} />
              <Route path="/TV" element={<Movie title={"TV"} renderMedia={renderTV} Medias={memorizedTV}/>} />
              <Route path="/Bookmark" element={<Bookmark removeBookmark={removeFromBookmark} addtoBookmark={addToBookmark} list={test} />} />
            </Route>
        </Routes>
      
  
    </div>
  );
}

export default App;
