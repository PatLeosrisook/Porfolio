import { Project } from "../Components/Project";
import { InConstructionState } from "../Components/inConstructionState";
import '../SCSS/work.css'
import sample from '../assets/Img/Sample.png'
export function Work() {
    return(
        <section id="Work">
            <section id="Work_landing">
                <div id="Work_wrap">
                    <h1>Works</h1>
                    <p>Collections of all my hard works</p>
                </div>
            </section>
            <InConstructionState/>
        </section>
    )
}