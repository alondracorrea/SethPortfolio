import logo from './images/seth.png';
import './App.css';
import Gallery from './Gallery';
import catGif from './images/cat-weird-black.gif'; 
import About from './About';
// The modern 2026 way to import your router components
import { BrowserRouter, Routes, Route, Link } from 'react-router';

function App() {
  return (
    // 1. Wrap the ENTIRE application inside BrowserRouter so the Links can work
    <BrowserRouter>
      <div className="App">
        <div className='top-bar'>
          <div className="logo-container">
            {/* Optional: Making the logo link back home is a nice touch! */}
            <Link to="/">
              <img src={logo} className="seth-logo" alt="logo" />
            </Link>
          </div>
          
          <div className='bar-links'>
            <Link to="/">Illustrations</Link>
            <Link to="/about">About</Link>
          </div>
          
          <img src={catGif} className="visitor-cat" alt="Looping cat placeholder" />
        </div>

        {/* 2. Use Routes to conditionally swap out the Gallery and About pages */}
        <Routes>
          <Route path="/" element={<Gallery />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;