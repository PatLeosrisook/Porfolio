import { AnimatedCurstive } from '../Components/AnimatedCursive'
import '../SCSS/home.css'
import Title from '../assets/Hero_title.svg'
// import {useSpring, animated, to} from '@react-spring/web'
import Square from '../assets/Blue_square.svg'
import {HalfCirclePurple, HalfCircleYellow, HalfDonutPurple, HalfDonutYellow} from '../Components/BgElement.js'
export function Home() {
    // const [spring, api ] = useSpring(() => {
    //     from: {
    //         rotation: 0;
    //     }
    // })
    // const handleClick = () => {
    //     api.start({
    //       from: {
    //         rotation: 0,
    //       },
    //       to: {
    //         rotation: 100,
    //       },
    //     })
    //   }
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