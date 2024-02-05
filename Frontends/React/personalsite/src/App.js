// import logo from './logo.svg';
import './App.css';
import './SCSS/home.css'
import { Home } from './Pages/Home';
import { Nav } from './Components/Nav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub , faLinkedin} from '@fortawesome/free-brands-svg-icons'
// import { Menu } from './Components/Menu';
import { useRef, createRef, useEffect, useState } from 'react';
import {Route, Routes, useLocation} from 'react-router-dom'
import { Menu } from './Components/Menu';
import {Work} from './Pages/Work'
import { animated, useScroll } from '@react-spring/web'
function App() {
  let location = useLocation()
    const {pathname} = location
  const[aboutRef, setAboutRef] = useState(null)
  const [homeRef, setHomeRef] = useState(null)
  const [contactRef, setContactRef] = useState(null)
  const [isTabOpen, setTabOpen] = useState(false)
  const [windowSize, setWindowSize] = useState(0)

  const { scrollYProgress } = useScroll()
  let handleRef = (home, about, contact) => {
    setHomeRef(home)
    setAboutRef(about)
    setContactRef(contact)
  }
  let handleOpenTab = () => {
    let app = document.querySelector("#Home")
    let Menu = document.querySelector("#Menu")
    let Header = document.querySelector("header")
    if(Menu) {

      if(isTabOpen) {
          // app.classList.add("moveApp")
          Menu.classList.add("moveMenu")
          Header.classList.add("moveHeader")
        } else {
          Menu.classList.remove("moveMenu")
          Header.classList.remove("moveHeader")
  
      }
    }
  }
  window.onload = () => {
    
  }
  window.onscroll = (e) => {

    if(pathname == "/") {
        let HomeY = document.querySelector("#Landing").getBoundingClientRect().y
        let AboutY = document.querySelector("#About").getBoundingClientRect().y
        let ContactY = document.querySelector("#Contact").getBoundingClientRect().y
        let HomeElement = document.querySelector("#Landing")
        let AboutElement = document.querySelector(".About_wrapper")
        let ContactElement = document.querySelector("#Contact .Section_title")
        let exLinks = document.querySelectorAll(".external_links")
        let Home = document.querySelector(".Home-link").classList
        let About = document.querySelector(".About-link").classList
        let Contact = document.querySelector(".Contact-link").classList
        // console.log(window.scrollY, HomeY, AboutY, ContactY)
        if(HomeY <= 0 && HomeY > -500) {
            Home.add("active")
        } else {
            Home.remove("active")
            
        }
        if(AboutY < 500 && AboutY > -500) {
            About.add("active")
            AboutElement.classList.add("animate__slideInUp")
            AboutElement.classList.add("show_element")
            
          } else {
            About.remove("active")
            AboutElement.classList.remove("show_element")
            AboutElement.classList.remove("animate__slideInUp")
            // AboutElement.classList.add("animate__slideOutDown")
            
        }
        if(ContactY < 500 && ContactY >= 0) {
            Contact.add("active")
            ContactElement.childNodes[0].classList.add("show_element")
            ContactElement.childNodes[0].classList.add("animate__bounceIn")
            ContactElement.childNodes[1].classList.add("expand_underline")
            exLinks.forEach(link => {
              link.classList.add("animate__fadeInLeft")
              link.classList.add("show_element")
            })
          }  else {
            exLinks.forEach(link => {
              link.classList.remove("animate__fadeInLeft")
              link.classList.remove("show_element")
            })
            ContactElement.childNodes[0].classList.remove("show_element")
            ContactElement.childNodes[0].classList.remove("animate__bounceIn")
            ContactElement.childNodes[1].classList.remove("expand_underline")
            Contact.remove("active")
            
        }

        // let topSq = document.querySelector('.top')   
        // let bottomSq = document.querySelector('.bottom')  
        // const CURRENT_DEGREE_TOP = 45
        // const CURRENT_DEGREE_BOTTOM = 45
        // const CURRENT_LOC = bottomSq.getBoundingClientRect().y
        // let scroll = window.scrollY
        // console.log(scroll, CURRENT_LOC, CURRENT_LOC - scroll)
        // //TODO:: animation
        // topSq.style.transform = `translateY(${scroll}px) scale(3.5) rotate(${((CURRENT_DEGREE_TOP ) + (scroll / 100))}deg) ` 
        // bottomSq.style.transform = `translateY(${CURRENT_LOC - scroll}px) scale(3.5) rotate(${((CURRENT_DEGREE_BOTTOM ) + (scroll / 100))}deg) ` 
    }
    
}
  useEffect(() => {
    handleOpenTab()
    setWindowSize(window.innerWidth)
    console.log(windowSize)
  }) 
  return (
    <div className="App">
      {(windowSize < 1024) ? <Menu AboutRef={aboutRef} HomeRef={homeRef} ContactRef={contactRef}/>: "" } 
      
      <Nav AboutRef={aboutRef} HomeRef={homeRef} ContactRef={contactRef} setTab={setTabOpen} isTabOpen={isTabOpen} />
      <Routes>
        <Route path="/" element={<Home scrollYProgress={scrollYProgress} refFromChild={handleRef} />} />
        <Route path="/Work" element={<Work/>} />
      </Routes>
      <div id="socials">
          <div id="line"></div>
          <FontAwesomeIcon icon={faGithub} />
          <FontAwesomeIcon icon={faLinkedin} />
      </div>
    </div>
  );
}

export default App;
