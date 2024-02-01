// import { AnimatedCurstive } from '../Components/AnimatedCursive'
import '../SCSS/home.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'
import { faGithub , faLinkedin} from '@fortawesome/free-brands-svg-icons'
import React, { createRef, useEffect, useRef } from 'react'
export class Home extends React.Component {
    constructor(props) {
        super(props)
        this.homeRef = createRef()
        this.aboutRef = createRef()
        this.contactRef = createRef()
        this.CURRENT_DEGREE = 45
    }
    componentDidMount() {
        this.props.refFromChild(this.homeRef,this.aboutRef, this.contactRef)
    }
    
    render() {
       window.onscroll = () => {
        let topSq = document.querySelector('.top')   
        let bottomSq = document.querySelector('.bottom')  
        let scroll = window.scrollY
        //TODO:: animation
        topSq.style.transform = `translateY(${scroll}px) scale(3.5) rotate(${((this.CURRENT_DEGREE ) + (scroll / 100))}deg) ` 

       }
       return (
           <section id="Home">
               <div className="bg-element top">
   
               </div>
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
               <section  ref={this.aboutRef} id="About">
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
               <section ref={this.contactRef}  id="Contact">
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
}