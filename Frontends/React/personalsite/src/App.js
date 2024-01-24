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
  let handleRef = (home, about, contact) => {
    setHomeRef(home)
    setAboutRef(about)
    setContactRef(contact)
  }
  useEffect(() => {

    console.log(homeRef, aboutRef, contactRef)
  }) 
  return (
    <div className="App">
      <Menu/>
      <Nav AboutRef={aboutRef} HomeRef={homeRef} ContactRef={contactRef} />
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
