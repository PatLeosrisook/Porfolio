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
import BookmarkContext from './Components/BookmarkContext';
function App() {
  
  const API_KEY = process.env.REACT_APP_API_KEY
  const [Bookmarked, setBookmarked] = useState([])
  const [Movies, setMovies] = useState([])
  const [TV, setTV] = useState([])
  
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
  }
  function removeFromBookmark(id) {
    
    setBookmarked(prev => prev.filter(x => x.id !== id))
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

  useEffect(() => {
    console.log(Bookmarked)
  })
  return (
    <div className="App">
    
      <BookmarkContext.Provider value={{Bookmarked}} >
        <Routes>
            <Route path="" element={<Nav/>}>
              <Route path="/Home" element={<Home addtoBookmark={addToBookmark} removeBookmark={removeFromBookmark} />} />
              <Route path="/Movie" element={<Movie title={"Movie"} renderMedia={renderMovie} Medias={Movies}/>} />
              <Route path="/TV" element={<Movie title={"TV"} renderMedia={renderTV} Medias={TV}/>} />
              <Route path="/Bookmark" element={<Bookmark removeBookmark={removeFromBookmark} list={Bookmarked} />} />
            </Route>
        </Routes>
      </BookmarkContext.Provider>
  
    </div>
  );
}

export default App;
