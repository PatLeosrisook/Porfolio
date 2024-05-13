import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faS, faSearch } from '@fortawesome/free-solid-svg-icons';
export default function Search({searchedValue, placeholder} : {searchedValue : Function, placeholder: string}) {

    let handleChange = (e) => {
        let value = e.target.value
        searchedValue(value)
    }
    return (
        <section id="SearchBox">
            <FontAwesomeIcon icon={faSearch} />
            <input onChange={e => handleChange(e)} onKeyDown={e => handleChange(e) } name="search" placeholder={placeholder}/>
        </section>
    )
}