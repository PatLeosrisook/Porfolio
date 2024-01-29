import { Project } from "../Components/Project";
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
            <section id="Works">
                <Project Name={"Web dictionary"} Overview={"Placeholder text for project blah blah blah."} img={sample}/>
                <Project Name={"Web dictionary"} Overview={"Placeholder text for project blah blah blah."} img={sample}/>
            </section>
        </section>
    )
}