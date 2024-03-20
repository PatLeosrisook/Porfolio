'use client';
import {getMovie} from '../../../utils/getMovie'
import type { InferGetServerSidePropsType, GetServerSideProps } from 'next' // probably on the page that call this method.
export async function getServerSideProps() {
    const result = await getMovie();

    return {
        props: { result }
    };
}
interface ResultType {
    Title: string,
    Post_path : string,
}
export default function Movie({result} : {
    result : ResultType
}) {
    return (
        <section id="Movie">
            <h1>Movie</h1>
            <section className="lists">

            </section>
        </section>
    )
}