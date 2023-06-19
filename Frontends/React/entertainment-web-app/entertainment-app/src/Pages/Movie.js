// This page is the template for each page
export default function Movie({children, title}) {
    return(
        <section id={`${title}-section`}>
            <h1>{title}</h1>
            {children}
        </section>
    )
}