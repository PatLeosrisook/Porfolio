import Input from "./Input";
import Search from '../assets/icon-search.svg'
import {useNavigate} from 'react-router-dom'
export default function SearchBar() {
    const navigate = useNavigate()
    function handleKeypress(e) {
        if(e.key == "Enter") {
            console.log(e.key, e.target.value)
            navigate('/search', {state: {query: e.target.value}})
        }
    }
    return ( 
        <article id="SearchBar">
            <img src={Search} alt="Seach icon"/>
            <Input
                handleKeyPress={handleKeypress}
                Type={"text"}
                attribute={{id:"HomeSearch", name:"HomeSearch", class:"Home_Search"}}
                Placeholder={"Search for movies or TV series"}
            />
            
        </article>
    )
}