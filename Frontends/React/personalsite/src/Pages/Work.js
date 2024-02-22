import { Project } from "../Components/Project";
import { ProjectList } from "../Components/ProjectList";
import { InConstructionState } from "../Components/inConstructionState";
import {Blob} from '../Components/BackgroundBlob'
import '../SCSS/work.css'
import sample from '../assets/Img/Sample.png'
import 'animate.css';
export function Work() {
    let list = [
        {
            img: sample, 
            Name: "Project",
            Overview: "Test tetst teseffeiafjdkaofjewaklfjeoifjkdljfaeso;f",
            url:""
        },
        {
            img: sample, 
            Name: "Project",
            Overview: "Test tetst teseffeiafjdkaofjewaklfjeoifjkdljfaeso;f",
            url:""
        }
    ]
    return(
        <section id="Work">
            <Blob/>
            <section id="Work_landing">
                <div id="Work_wrap">
                    <h1>Works</h1>
                    <p>Collections of all my hard works</p>
                </div>
            </section>
            <ProjectList  lists={list}/>
        </section>
    )
}