import logo from './images/seth.png';
import './App.css';
import Gallery from './Gallery';
import catGif from './images/cat-weird-black.gif'; 
import About from './About';
import Inquiry from './Inquiry';
import Footer from './Footer';

import { BrowserRouter, Routes, Route, Link } from 'react-router';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className='top-bar'>
          <div className="logo-container">
            <Link to="/">
              <img src={logo} className="seth-logo" alt="logo" />
            </Link>
          </div>
          
          <div className='bar-links'>
            <Link to="/about">About</Link>
            <Link to="/">Art</Link>
            <Link to="/inquire">Inquire</Link>
          </div>

          <img src={catGif} className="visitor-cat" alt="Looping cat placeholder" />
        </div>
        <Routes>
          <Route path="/" element={<Gallery />} />
          <Route path="/about" element={<About />} />
          <Route path="/inquire" element={<Inquiry />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;