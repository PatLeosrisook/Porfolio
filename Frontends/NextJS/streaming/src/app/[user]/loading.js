// import {Mosaic} from 'react-loading-indicators'
const {Mosaic} = require("react-loading-indicators")
export default function Loading() {
    return (
        <div className="Loading_screen">
            <h1>Logging in...</h1>
            <Mosaic color={["#33CCCC", "#33CC36", "#B8CC33", "#FCCA00"]} />
        </div>
    )
}