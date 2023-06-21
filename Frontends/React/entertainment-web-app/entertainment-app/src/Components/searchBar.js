import Input from "./Input";
import Search from '../assets/icon-search.svg'
export default function SearchBar() {
    return ( 
        <article id="SearchBar">
            <img src={Search} alt="Seach icon"/>
            <Input
                Type={"text"}
                attribute={{id:"HomeSearch", name:"HomeSearch", class:"Home_Search"}}
                Placeholder={"Search for movies or TV series"}
            />
            
        </article>
    )
}