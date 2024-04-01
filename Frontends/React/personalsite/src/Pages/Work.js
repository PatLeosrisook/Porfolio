import { Project } from "../Components/Project";
import { ProjectList } from "../Components/ProjectList";
import {Blob} from '../Components/BackgroundBlob'
import '../SCSS/work.css'
import {details} from '../Components/ProjectDetails'
import 'animate.css';
import { useEffect } from "react";

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