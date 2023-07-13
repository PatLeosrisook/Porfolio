import axios from "axios";
import Media from "../Components/Media";
import MediaComponent from "../Components/MediaComponents";
import TrendingMedia from '../Components/TrendingMedia'
import {useState , useEffect, useMemo} from 'react'
import SearchBar from "../Components/searchBar";
import data from '../assets/data.json'
import MovieIcon from '../assets/icon-category-movie.svg'
import '../CSS/Home.css'
export default function Home({addtoBookmark, removeBookmark, recommendList,TrendingList}) {

    return(
        <section id="Home">
            <section id="container">
                <section id="Trending_container">
                    <h2>Trending</h2>
                    <div class="scroller">
                        <div class="media_wrapper">
                            {TrendingList.map(list => {
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
                        {recommendList.map(list => {
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