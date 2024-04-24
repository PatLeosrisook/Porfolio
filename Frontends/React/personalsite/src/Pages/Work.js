import { ProjectList } from "../Components/ProjectList";
import '../SCSS/work.css'
import {details} from '../Components/ProjectDetails'
import 'animate.css';

export function Work() {  
    return(
        <section id="Work">
            <div className="shadow-element sq-shadow">
                
            </div>
            <div className="shadow-element circle-shadow">
                
            </div>
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