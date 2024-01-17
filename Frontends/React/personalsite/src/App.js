// import logo from './logo.svg';
import './App.css';
import './SCSS/home.css'
import { Home } from './Pages/Home';
import { Nav } from './Components/Nav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub , faLinkedin} from '@fortawesome/free-brands-svg-icons'
// import { Menu } from './Components/Menu';

function App() {
  return (
    <div className="App">
    <Nav/>
     <Home/>
     <div id="socials">
        <div id="line"></div>
        <FontAwesomeIcon icon={faGithub} />
        <FontAwesomeIcon icon={faLinkedin} />
    </div>
    </div>
  );
}

export default App;
