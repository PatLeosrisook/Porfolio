import { Project } from "./Project";
import 'animate.css';
import web from '../assets/Img/web_dictionary.jpg'
export function ProjectList({img, Name, Overview, Url, lists}) {
    let imagePath = '../assets/Img/'
    return(
        <section id="Works">
            {
                lists.map((work, index) => {
                    return <Project
                        img={work.src}
                        Name={work.Title}
                        Overview={work.desc}
                        // Url={<img src={web}/>}
                        animation_delay={index}
                    />
                })
            }        
        </section>
    )
}