import logo from './logo.svg';
import './App.css';
import { Container } from 'react-bootstrap';
import TopNav from './pizzacomponent/TopNav';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
///Switch work like a container
import About from './pizzacomponent/About';

function App() {
  return (
    <div className='ms-auto'>
      <BrowserRouter>
      <TopNav/>
      <Routes>
        <Route path = "/about" Component={About} exact />
        
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
