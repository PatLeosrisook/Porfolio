// import logo from './logo.svg';
import './App.css';
import './SCSS/home.css'
import { Home } from './Pages/Home';
import { Nav } from './Components/Nav';
// import { Menu } from './Components/Menu';

function App() {
  return (
    <div className="App">
    <Nav/>
     <Home/>

    </div>
  );
}

export default App;
