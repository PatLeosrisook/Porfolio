import { AnimatedCurstive } from '../Components/AnimatedCursive'
import '../SCSS/home.css'
export function Home() {
    return (
        <section id="Home">
            <section id="Hero">
                <AnimatedCurstive/>
                <p id="Bg-text">Dev<br/>elo<br/>per</p>
            </section>
            <section id="About">
                <div className="paragraphs">
                    <p>I'm Pat, a 25-year-old computer science graduate from the University of Birmingham, UK. Currently, I'm working in IT at BSG Group. I'm passionate about technology, creativity, and continuous learning.</p>
                    <p><span className="highlight">Professional summary</span> I'm dedicated to using technology to solve real-world problems and passionate about fostering creativity through art and literature.</p>
                    <p><span className="highlight">Experience</span> In my current role at BSG Group, I ensure the smooth operation of our IT infrastructure. I have a deep understanding of IT management.</p>
                    <p><span className="highlight">Skills</span> Proficient in software development, web design, and data analysis. Expertise in Java, Python, HTML, CSS, and JavaScript.</p>
                    <p><span className="highlight">Interests</span> I'm an artist who enjoys drawing, an avid reader, and a web development enthusiast. My aim is to bridge technology and creativity.</p>
                </div>
                <p className="BG-text" id="About-bg">About</p>
            </section>
            <section id="Contact">
                
                <p className="BG-text">
                    Contact
                </p>
                <form>
                    <div className="formGroup">
                        <label for="name">Name</label>
                        <input name="name" id="name" />
                    </div>
                    <div className="formGroup">
                        <label for="email">Email</label>
                        <input name="email" id="email" />
                    </div>
                    <div className="formGroup">
                        <label for="message">Message</label>
                        <textarea name="message"></textarea>
                    </div>
                    <button id="Submit" type="submit">Send</button>
                </form>
            </section>
        </section>
    )
}