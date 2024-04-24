// import logo from './logo.svg';
import './App.css';
import './SCSS/home.css'
import { Home } from './Pages/Home';
import { Nav } from './Components/Nav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub , faLinkedin} from '@fortawesome/free-brands-svg-icons'
// import { Menu } from './Components/Menu';
import { useRef, createRef, useEffect, useState } from 'react';
import {Route, Routes, useLocation, useNavigate} from 'react-router-dom'
import { Menu } from './Components/Menu';
import {Work} from './Pages/Work'
import { animated, useScroll } from '@react-spring/web'
function App() {
  let location = useLocation()
  let navigate = useNavigate()
  const {pathname} = location
  const [isTabOpen, setTabOpen] = useState(false)
  const [windowSize, setWindowSize] = useState(0)
  const [nextPath, setNextPath] = useState("/")
const [isLoading, setIsLoading] = useState(true)
  const { scrollYProgress } = useScroll()

  let handleOpenTab = () => {
    let app = document.querySelector("#Home")
    let Menu = document.querySelector("#Menu")
    let Header = document.querySelector("header")
    let burger = document.querySelector('.burger')
    if(Menu) {

      if(isTabOpen) {
          // app.classList.add("moveApp")
          Menu.classList.add("moveMenu")
          burger.classList.add ('invert')
        } else {
          Menu.classList.remove("moveMenu")
          burger.classList.remove ('invert')
  
      }
    }
  }
 
  window.onscroll = (e) => {
    if(pathname == "/" || pathname == "/About" || pathname == "/Contact") {
      let HomeY = document.querySelector("#Landing").getBoundingClientRect().y
      let AboutY = document.querySelector("#About").getBoundingClientRect().y
      let ContactY = document.querySelector("#Contact").getBoundingClientRect().y
      let AboutElement = document.querySelector(".About_wrapper")
      let ContactElement = document.querySelector("#Contact .Section_title")
      let exLinks = document.querySelectorAll(".external_links")
      let Home = document.querySelector(".Home-link").classList
      let About = document.querySelector(".About-link").classList
      let Contact = document.querySelector(".Contact-link").classList
        console.log(AboutY)
        if(HomeY <= 0 && HomeY > -500) {
            Home.add("active")

        } else {
            Home.remove("active")
            
        }
        if(AboutY < 500 && AboutY > -900) {
            About.add("active")
            AboutElement.classList.add("animate__slideInUp")
            AboutElement.classList.add("show_element")
            
            
          } else {
            About.remove("active")
            AboutElement.classList.remove("show_element")
            AboutElement.classList.remove("animate__slideInUp")
        }
        if(ContactY < 500 && ContactY >= -20) {
            
            Contact.add("active")
            ContactElement.childNodes[0].classList.add("show_element")
            ContactElement.childNodes[0].classList.add("animate__bounceIn")
            ContactElement.childNodes[1].classList.add("expand_underline")
            exLinks.forEach((link,index) => {
              link.classList.add("animate__fadeInLeft")

              if(index >= 1) {
                  link.classList.add(`show_element--delay_${index}`)
                  
                } else {
                  
                }
                link.classList.add(`show_element`)
            })
          }  else {
            exLinks.forEach((link, index) => {
                link.classList.remove("animate__fadeInLeft")
                link.classList.remove("show_element")
                if(index >= 1) {
                  link.classList.remove(`show_element--delay_${index}`)
                  
                } 
                link.classList.remove(`show_element`)
            })
            ContactElement.childNodes[0].classList.remove("show_element")
            ContactElement.childNodes[0].classList.remove("animate__bounceIn")
            ContactElement.childNodes[1].classList.remove("expand_underline")
            Contact.remove("active")
            
        }
    } else if(pathname == "/Work") {
      var Projects = document.querySelectorAll('.Project')
      if(window.scrollY >= 100) {
        if(Projects.length  > 0) {
          Projects.forEach(project => {
            project.classList.remove("animate__zoomOut")
            project.classList.add("animate__zoomIn")
            // project.classList.add("show_project")
          })

        }
        }else {
          if(Projects.length  > 0) {
            Projects.forEach(project => {
              project.classList.remove("animate__zoomIn")
              project.classList.add("animate__zoomOut")
            })
  
          }
  
        }

      } 
  }

  useEffect(() => {
    handleOpenTab()
    setWindowSize(window.innerWidth)
  }) 
  return (
    <div className="App">
      <Menu 
      setTab={setTabOpen}
      isTabOpoen={isTabOpen} 
      isLoading={isLoading}
      setIsLoading={setIsLoading}
      setNextPath={setNextPath}
      nextPath={nextPath}

      />
      
      <Nav  setTab={setTabOpen} isTabOpen={isTabOpen} />
      <Routes>
        <Route exact path="/" element={<Home scrollYProgress={scrollYProgress}  location={location} />} />
        <Route path="/About" element={<Home scrollYProgress={scrollYProgress}  />} />
        <Route path="/Contact" element={<Home scrollYProgress={scrollYProgress}  />} />
        <Route path="/Work" element={<Work/>} />
      </Routes>
      <div id="socials">
          <div id="line"></div>
          <a target='_blank' href="https://github.com/PatLeosrisook/Porfolio/tree/beta">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a target='_blank' href="https://bit.ly/Kalyada-Linkedin">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
      </div>
    </div>
  );
}

export default App;
