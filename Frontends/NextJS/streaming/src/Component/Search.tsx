import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faS, faSearch } from '@fortawesome/free-solid-svg-icons';
export default function Search({searchedValue} : {searchedValue : Function}) {

    let handleChange = (e) => {
        let value = e.target.value
        let code = e.keyCode
        console.log(value, code)
        if(code == 13) {
            console.log("Enter")
            searchedValue(value)
        }
    }
    return (
        <section id="SearchBox">
            <FontAwesomeIcon icon={faSearch} />
            <input onChange={e => handleChange(e)} onKeyDown={e => handleChange(e) } name="search" placeholder="Search[] here"/>
        </section>
    )
}