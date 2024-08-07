
import {MovieContextProvider} from "@/helper/movieContext"
export default function MovieLayout({children} : {children : React.ReactNode}) {

   
    return (
        <section id="MovieLayout">
            <MovieContextProvider>
                {children}
            </MovieContextProvider>
        </section>
    )
}