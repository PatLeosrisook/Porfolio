'use client';
import { useState } from "react";
import EmptyState from "@/Component/EmptyState";
export default function WatchList() {
    const [currentCategory, setCurrentCategory] = useState("Movies");
    const [list, setList] = useState([])
    return(
        <section id="watchlist">
            <section id="watchlist-cate">
                <p>Movies</p>
                <p>Tv Shows</p>
            </section>
            <section className="content-body">
                <section className="content-wrapper">
                    {
                        (list.length > 0) ? list : 
                        <EmptyState
                            src={""}
                            alt="Empty watch list icon"
                            width={120}
                            height={120}
                            title={"You haven't saved any thing :("}
                            description={"Try browsing something then all your saved will appear here."}
                        />        
                    }
                </section>
            </section>
        </section>
    )
}