import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import {Routes, Route, Link ,BrowserRouter} from 'react-router-dom'
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Usernav from './components/screen/Usernav';
import Cart from './components/pages/Cart';
import Userlogin from './components/screen/Userlogin';

function App() {
  return (
    <BrowserRouter>
          <Usernav/>

    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/about' element={<About/>}></Route>

      <Route path='/contact' element={<Contact/>}></Route>
      <Route path='/cart' element={<Cart/>}></Route>
      <Route path='/userlogin' element={<Userlogin/>}></Route>


    </Routes>
    </BrowserRouter>

  );
}

export default App;
