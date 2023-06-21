import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home';
import Registrations from './Pages/Registrations';
//Collections of css files. 
import './CSS/Register.css'
import './CSS/Global.css'
import Nav from './Components/Nav';
function App() {
  return (
    <div className="App">
    <Nav/>
    <Home/>
    </div>
  );
}

export default App;
