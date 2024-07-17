
import '../SCSS/home.css'
import React from 'react'
import 'animate.css';
import PDFViewer from '../Components/PDFViewer';

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
                    <p>Hello! I'm a</p>
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
                        <p>Frontend Developer with passion in UX/UI design.</p>
                        <div id="Paragraphs">
                            <p>I'm a frontend developer based in Bangkok, Thailand. I'm 25 years old and <strong>graduated from the University of Birmingham, UK, in 2020 with a Computer Science degree.</strong> During my last year at university, I was introduced to UX/UI design through one of the courses, this led to  a deeper interest that result in me taking an additional courses on the subject. This passion has significantly influenced my approach in designing any of my other projects.</p>
                            <p><strong>I'm currently working at BSG group as an IT maintenance</strong> where I make sure all devices are operating smoothly (to explain it shortly).</p>
                            <p>In my spare time, I work on various personal projects that help practice my skills in frontend development. I also love reading books, particularly about personal development and sometime a novel.</p>
                        </div>
                    </div>
                    <div id="Skills_list">
                        <div className="skills">
                            <p>Core skills</p>
                            <div className='skills_card'>
                                <div className="cards">
                                    <p>HTML</p>
                                </div>
                                <div className="cards">
                                    <p>CSS3</p>
                                </div>
                                <div className="cards">
                                    <p>SASS</p>
                                </div>
                                <div className="cards">
                                    <p>ReactJS</p>
                                </div>
                                <div className="cards">
                                    <p>JavaScript</p>
                                </div>
                            </div>
                        </div>
                        <div className="skills">
                            <p>Learning skills</p>
                            <div className='skills_card'>
                                <div className="cards">
                                    <p>Next.JS</p>
                                </div>
                                <div className="cards">
                                    <p>Node.JS</p>
                                </div>
                                <div className="cards">
                                    <p>TypeScript</p>
                                </div>
                                <div className="cards">
                                    <p>MongoDB</p>
                                </div>
                                
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
                     <a className="external_links animate__animated" target='_blank' href="https://www.linkedin.com/in/kalyada-leosrisook-314a31173/">LinkedIn</a>
                     <a className="external_links animate__animated" href="mailto:kalyada.l@outlook.com" target='_blank'>Email</a>
                     <a href="Frontends/React/personalsite/src/assets/PDF/Resume.pdf" target='_blank' download="Resume.pdf"  className='external_links animate__animated'>Resume</a>    
                     

                </div>
            </section>

        </section>
    )
}