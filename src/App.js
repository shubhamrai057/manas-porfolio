import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Frontrow from './components/Frontrow';
import Entri from './components/Entri';
import Instamojo from './components/Instamojo';
import Swiggy from './components/Swiggy';
import './App.css';

function App() {
  return (
    <div className="App whole-container">
      <BrowserRouter>
        <div className="App">
          <header className="header container">
            <Link to="/" className="header_name active">
              MANAS VAZE
            </Link>
            <nav>
              <Link to="/about" className="header_link" title="About">
                About
              </Link>
            </nav>
          </header>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/frontrow" element={<Frontrow />} />
            <Route path="/entri" element={<Entri />} />
            <Route path="/swiggy" element={<Swiggy />} />
            <Route path="/instamojo" element={<Instamojo />} />
            <Route path="*" element={<Home />} />
          </Routes>
          <footer className="container footer">
            <div className="footer_left">
              <Link to="/about" title="About">
                About
              </Link>
              <a href="mailTo:manasvaze23@gmail.com" title="About">
                Say Hello
              </a>
            </div>
            <div className="footer_right">
              <a
                href="https://dribbble.com/manasvaze"
                target="_blank"
                title="Dribble"
                rel="noreferrer"
              >
                Dribbble
              </a>
              <a
                href="https://twitter.com/manasvaze"
                target="_blank"
                title="TWITTER"
                rel="noreferrer"
              >
                TWITTER
              </a>
              <a
                href="https://www.linkedin.com/in/manas-vaze/"
                target="_blank"
                title="TWITTER"
                rel="noreferrer"
              >
                LINKEDIN
              </a>
            </div>
          </footer>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
