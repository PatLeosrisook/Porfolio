// import { AnimatedCurstive } from '../Components/AnimatedCursive'
import '../SCSS/home.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'
import { faGithub , faLinkedin} from '@fortawesome/free-brands-svg-icons'
import React, { createRef, useEffect, useRef } from 'react'
import { animated, useScroll } from '@react-spring/web'
import 'animate.css';
import { useLocation } from 'react-router-dom'
export class Home extends React.Component {
    constructor(props) {
        super(props)
        this.homeRef = createRef()
        this.aboutRef = createRef()
        this.contactRef = createRef()
        
    }
    componentDidMount() {
        this.props.refFromChild(this.homeRef,this.aboutRef, this.contactRef)
        console.log("Props:", this.props.location, this.props.navigation)
    }
    
   

    render() {
        
       return (
           <section id="Home">
               <animated.div  className="bg-element top">
   
               </animated.div>
               <div className="bg-element bottom">
   
               </div>
               <section ref={this.homeRef} id="Landing">
                   <div id="HeadLine">
                       <p>Hi, I'm Pat</p>
                       <div id="Job_title">
                           <p className="Job_text">Front</p>
                           <p className="Job_text">End</p>
                           <p className="Job_text">Developer</p>
                       </div>
                   </div>
                   
               </section>
               <section ref={this.aboutRef} id="About">
                   <div class="About_wrapper animate__animated">
                       <div class="Section_title ">
                           <p >About me</p>
                           <div className="underline">
                           </div>
                       </div>
                       <div className="Paragraphs">
                           <p>Hello there! I'm Pat, a passionate 25-year-old from the vibrant city of Bangkok, Thailand. </p>
                           <p>I hold a Bsc (Hons) degree in computer science from the prestigious University of Birmingham, UK, and I currently thrive in the dynamic field of IT at BSG Group.</p>
                           <p>Beyond the world of coding, you'll find me immersed in personal development books, fueling my curiosity for continuous growth. Drawing has become my latest venture as I embrace the joy of acquiring new skills. Join me on this exciting journey of exploration and development!</p>
                       </div>
                   </div>
               </section>
               <section ref={this.contactRef}  id="Contact">
                   <div class="Section_title">
                        <p className='animate__animated'>Let's connect!</p>
                        <div className="underline">
                        </div>
                   </div>
                   <div className="Connections">
                        <a className="external_links animate__animated" href="https://www.linkedin.com/in/kalyada-leosrisook-314a31173/">LinkedIn</a>
                        <a className="external_links animate__animated" href="">Email</a>
                        <a className="external_links animate__animated" href="">Resume</a>
                   </div>
               </section>
   
           </section>
       )
   }
}