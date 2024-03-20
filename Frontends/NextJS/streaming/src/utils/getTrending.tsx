import axios from 'axios';
import type { InferGetServerSidePropsType, GetServerSideProps } from 'next'
// utils/serverSideProps.js
export async function getServerSideProps() {
    const options = {
        method: 'GET',
        url: 'https://api.themoviedb.org/3/trending/all/day?language=en-US',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwOGFmZTU1MTQzYTVmNjdiNzQ0ZDhjNTg3NGU1NjQ4OCIsInN1YiI6IjVlMjIzZGUzOGYyNmJjMDAxNTc0YWI3ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5xEfY5DbDSlb5djCaSq3VW5kdAQs6ppHdAhdD7PORxc' //TODO:: reenter the tokent here
        }
      };
    // Data fetching logic here
    const response = await axios(options)
    const result = await response.data.results
    return {
        props: { result }
    };
}
