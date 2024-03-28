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
                           <p>Hello there! My name is Pat and I'm a Front-end developer based in Bangkok, Thailand. </p>
                           <p>I graduated from the University of Birmingham with a Computer science degree and currently employed as an IT at the BSG Group.</p>
                           <p>Although my current career does not relate to Front-end development, I do enjoy creating website and learning new technologies in my spare time.</p>
                           <p>Here are the technologies I use: </p>
                           <ul id="TechStack">
                                <li>ReactJS</li>
                                <li>NextJS <span className='note'>(Currently learning)</span></li>
                                <li>JavaScript</li>
                                <li>TypeScript <span className='note'>(Currently learning)</span></li>
                                <li>MongoDB <span className='note'>(Currently learning)</span></li>
                           </ul>
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
                        <a href="https://www.dropbox.com/s/6fertetbvgvzu3x/Resume.pdf?dl=0" download="Resume.pdf"  className='external_links animate__animated'>Resume</a>    
                        

                   </div>
               </section>
   
           </section>
       )
   }
}