import { Project } from "../Components/Project";
import { ProjectList } from "../Components/ProjectList";
import { InConstructionState } from "../Components/inConstructionState";
import {Blob} from '../Components/BackgroundBlob'
import '../SCSS/work.css'
import web from '../assets/Img/web_dictionary.jpg'
import {details} from '../Components/ProjectDetails'
import 'animate.css';
import { useEffect } from "react";
// import {fs}  from 'fs'
// const images = require.context('../assets/img', true)
export function Work() {  
    return(
        <section id="Work">
            <Blob/>
            <section id="Work_landing">
                <div id="Work_wrap">
                    <h1>Works</h1>
                    <p>Collections of all my hard works</p>
                </div>
            </section>
            <ProjectList  lists={details}/>
        </section>
    )
}