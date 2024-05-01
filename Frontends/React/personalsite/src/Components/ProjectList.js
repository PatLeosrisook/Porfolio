import { Project } from "./Project";
import 'animate.css';

export function ProjectList({lists}) {
    return(
        <section id="Works">
            <section id="Work_wrap">

                {
                    lists.map((work, index) => {
                        return <Project
                            img={work.src}
                            Name={work.Title}
                            Overview={work.desc}
                            Url={work.url}
                            animation_delay={index}
                        />
                    })
                }        
            </section>
        </section>
    )
}