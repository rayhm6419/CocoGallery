

import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./pages/Home"
import Gallery from './pages/Gallery';
import PlayGround from './pages/PlayGround';
import Navbar from './components/Navbar';


function App() {
  return (
    <div className='App'>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path='/gallery' element={<Gallery/>}/>
          <Route path='/PlayGround' element={<PlayGround/>}/>


        </Routes>
      </Router>
    </div>
  );     
}


export default App;
