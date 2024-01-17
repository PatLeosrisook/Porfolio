// import { AnimatedCurstive } from '../Components/AnimatedCursive'
import '../SCSS/home.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'
import { faGithub , faLinkedin} from '@fortawesome/free-brands-svg-icons'
export function Home() {
   console.warn = () => {}
    return (
        <section id="Home">
            <div className="bg-element top">

            </div>
            <div className="bg-element bottom">

            </div>
            <section id="Landing">
                <div id="HeadLine">
                    <p>Hi, I'm Pat</p>
                    <div id="Job_title">
                        <p className="Job_text">Front</p>
                        <p className="Job_text">End</p>
                        <p className="Job_text">Developer</p>
                    </div>
                </div>
                
            </section>
            <section id="About">
                <div class="Section_title">
                    <p>About me</p>
                    <div className="underline">
                    </div>
                </div>
                <div className="Paragraphs">
                    <p>Hello there! I'm Pat, a passionate 25-year-old from the vibrant city of Bangkok, Thailand. </p>
                    <p>I hold a Bsc (Hons) degree in computer science from the prestigious University of Birmingham, UK, and I currently thrive in the dynamic field of IT at BSG Group.</p>
                    <p>Beyond the world of coding, you'll find me immersed in personal development books, fueling my curiosity for continuous growth. Drawing has become my latest venture as I embrace the joy of acquiring new skills. Join me on this exciting journey of exploration and development!</p>
                </div>
            </section>
            <section id="Contact">
                <div class="Section_title">
                        <p>Let's connect!</p>
                        <div className="underline">
                        </div>
                </div>
                <div className="Connections">
                        <a href="https://www.linkedin.com/in/kalyada-leosrisook-314a31173/">LinkedIn</a>
                        <a href="">Email</a>
                        <a href="">Resume</a>
                </div>
            </section>

        </section>
    )
}