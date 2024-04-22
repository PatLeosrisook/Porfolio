
import '../SCSS/home.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faGithub , faLinkedin, faReact, faHtml5, faCss3, faSass,faJs, faNodeJs} from '@fortawesome/free-brands-svg-icons'
import {faGraduationCap, faSuitcase, faCrown, faBook, faDatabase, faCode} from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import 'animate.css';
export function Home() {
    return (
        <section id="Home">
            <div  className="bg-element circular-element top">
            </div>
            <div  className="bg-element triangle-element top">
            </div>
            <div className="bg-element circular-element bottom">
            </div>
            <section  id="Landing">
                <div id="HeadLine">
                    <p>Hi, I'm Pat</p>
                    <div id="Job_title">
                        <p className="Job_text">Front</p>
                        <p className="Job_text">End</p>
                        <p className="Job_text">Developer</p>
                    </div>
                </div>
                
            </section>
            <section  id="About">
                 <p id="Background_Pattern">About</p>
                <div class="About_wrapper animate__animated">
                    <div id="About_title">
                        <div className='squares'>
                             <div className='square '></div>
                             <div className='square '></div>
                             <div className='square '></div>
                             <div className='square '></div>
                        </div>
                        <p >About me</p>
                    </div>
                    <div id="Background_list">
                        <div className='details'>
                             <div className='details_header'>
                                 <FontAwesomeIcon icon={faGraduationCap} beat />
                                 <p>Education</p>
                             </div>
                             <div className='locations'>
                                 <p>2017-2020</p>
                                 <p>University of Birmingham, UK</p>
                                 <p>Bsc(Hons) Computer science</p>
                             </div>
                             <div className='locations'>
                                 <p>2016-2017</p>
                                 <p>Bellerbys college, Brighton, UK</p>
                                 <p>Foundation of Computing</p>
                             </div>
                        </div>
                        <div className='details'>
                             <div className='details_header'>
                                 <FontAwesomeIcon icon={faSuitcase} beat />
                                 <p>Current position</p>
                             </div>
                             <div className='locations'>
                                 <p>Nov 2021 - Present</p>
                                 <p>IT Maintenance</p>
                                 <p>BSG Group, Bangkok, Thailand</p>
                             </div>
 
                        </div>
                        <div className='details'>
                             <div className='details_header'>
                                 <FontAwesomeIcon icon={faCrown}   beat/>
                                 <p>Skills</p>
                             </div>
                             <div className='skills'>
                                 <ul>
                                     <li>
                                         <FontAwesomeIcon icon={faJs}/>
                                         <p>JavaScript</p>
                                     </li>
                                     <li>
                                         <FontAwesomeIcon icon={faHtml5} />
                                         <p>HTML</p>
                                     </li>
                                     <li>
                                         <FontAwesomeIcon icon={faCss3} />
                                         <p>CSS3</p>
                                     </li>
                                     <li>
                                         <FontAwesomeIcon icon={faSass} />
                                         <p>SASS</p>
                                     </li>
                                     <li>
                                         <FontAwesomeIcon icon={faReact} />
                                         <p>ReactJS</p>
                                     </li>
                                     
                                 </ul>
                             </div>
 
                        </div>
                        <div className='details'>
                             <div className='details_header'>
                                 <FontAwesomeIcon icon={faBook}  beat />
                                 <p>Learning skills</p>
                             </div>
                             <div className='skills'>
                                 <ul>
                                     <li>
                                         <FontAwesomeIcon icon={faCode}/>
                                         <p>TypeScript</p>
                                     </li>
                                     <li>
                                         <FontAwesomeIcon icon={faNodeJs}/>
                                         <p>NodeJS</p>
                                     </li>
                                     <li>
                                         <FontAwesomeIcon icon={faDatabase}/>
                                         <p>MongoDB</p>
                                     </li>
                                     <li>
                                         <FontAwesomeIcon icon={faCode}/>
                                         <p>NextJS</p>
                                     </li>
                                 </ul>
                             </div>
 
                        </div>
                    </div>
                </div>
            </section>
            <section  id="Contact">
                <div class="Section_title">
                     <p className='animate__animated'>Let's connect!</p>
                     <div className="underline">
                     </div>
                </div>
                <div className="Connections">
                     <a className="external_links animate__animated" href="https://www.linkedin.com/in/kalyada-leosrisook-314a31173/">LinkedIn</a>
                     <a className="external_links animate__animated" href="">Email</a>
                     <a href="https://www.dropbox.com/preview/PDF/Resume.pdf" download="Resume.pdf"  className='external_links animate__animated'>Resume</a>    
                     

                </div>
            </section>

        </section>
    )
}