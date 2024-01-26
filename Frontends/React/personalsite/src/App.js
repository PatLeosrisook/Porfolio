// import logo from './logo.svg';
import './App.css';
import './SCSS/home.css'
import { Home } from './Pages/Home';
import { Nav } from './Components/Nav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub , faLinkedin} from '@fortawesome/free-brands-svg-icons'
// import { Menu } from './Components/Menu';
import { useRef, createRef, useEffect, useState } from 'react';
import {Route, Routes} from 'react-router-dom'
import { Menu } from './Components/Menu';
function App() {
  const[aboutRef, setAboutRef] = useState(null)
  const [homeRef, setHomeRef] = useState(null)
  const [contactRef, setContactRef] = useState(null)
  const [isTabOpen, setTabOpen] = useState(false)
  const [windowSize, setWindowSize] = useState(0)
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
  window.onresize = () => {

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
        <Route path="/" element={<Home refFromChild={handleRef} />} />
        <Route path="/About" element={<Home/>} />
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
