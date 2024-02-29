import { Project } from "./Project";
import 'animate.css';
export function ProjectList({img, Name, Overview, Url, lists}) {

    return(
        <section id="Works">
            {
                lists.map((work, index) => {
                    return <Project
                        img={work.img}
                        Name={work.Name}
                        Overview={work.Overview}
                        Url={work.Url}
                        animation_delay={index}
                    />
                })
            }        
        </section>
    )
}