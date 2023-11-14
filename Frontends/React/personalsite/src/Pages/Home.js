import { AnimatedCurstive } from '../Components/AnimatedCursive'
import '../SCSS/home.css'
import Title from '../assets/Hero_title.svg'
// import HalfLinePurple from '../assets/Half_LineC_purple.svg'
// import HalfLineYellow from '../assets/Half_LineC_yellow.svg'
// import HalfCirclePurple from '../assets/Half_C_purple.svg'
// import HalfCircleYellow from '../assets/Half_C_yellow.svg'
import Square from '../assets/Blue_square.svg'
import {HalfCirclePurple, HalfCircleYellow, HalfDonutPurple, HalfDonutYellow} from '../Components/BgElement.js'
export function Home() {
    return (
        <section id="Home">
            <HalfCirclePurple/>
            <HalfCircleYellow/>
            <HalfDonutPurple/>
            <HalfDonutYellow/>
            <section id="Hero">
                <div id="wrapper">
                    <h1>Hello.</h1>
                    <p>Full Stack developer</p>
                    <p id="Name">Kalyada leosrisook</p>
                </div>
            </section>
            <section id="About">
             
            </section>
            <section id="Contact">
                <div id="contact_title">
                    <h1>Let's connect!</h1>
                    <p>I'll make sure to respond in 2 days!</p>
                </div>
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