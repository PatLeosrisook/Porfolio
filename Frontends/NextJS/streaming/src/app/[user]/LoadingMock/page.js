import {Mosaic} from 'react-loading-indicators'
export default function LoadMock() {
    
    return (
        <section className="Loading_screen">
            <Mosaic color={["#33CCCC", "#33CC36", "#B8CC33", "#FCCA00"]} />
            {/* <h1>LOADING MOCK</h1> */}
        </section>
    )
}