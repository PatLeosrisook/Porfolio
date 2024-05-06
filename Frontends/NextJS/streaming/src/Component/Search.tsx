import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faS, faSearch } from '@fortawesome/free-solid-svg-icons';
export default function Search() {
    return (
        <section id="SearchBox">
            <FontAwesomeIcon icon={faSearch} />
            <input name="search" placeholder="Search[] here"/>
        </section>
    )
}