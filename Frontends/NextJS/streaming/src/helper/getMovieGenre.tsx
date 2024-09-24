import axios from "axios"
import { options } from "../../public/API"
export default async function  getGenre(searched_genre : string) {
    options.url = 'https://api.themoviedb.org/3/genre/movie/list?language=en'
    let movie = await axios(options).then(response => {
        return response.data.genres.filter(genre  => genre.name == searched_genre)
    })
    return movie
}
