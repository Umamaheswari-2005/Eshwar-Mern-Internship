import './CSS/App.css' ;
import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './Component/Home';
import About from './Component/About';
import Skills from './Component/Skills';
import Contact from './Component/Contact';
import Projects from './Component/Projects';
import './CSS/index.css';




function App() {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/skills">Skills</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/contact">Contact</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects/*" element={<Projects />} /> 
        <Route path="/contact" element={<Contact />} />
        
      </Routes>
    </div>
  );
}

export default App;






















/*


import './CSS/App.css';
import './CSS/Aboutindex.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Projects from './Component/Projects';

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/*" element={<Projects />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;






import './CSS/App.css';
import './CSS/Aboutindex.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './Component/About';



const App = () => {
  return (
    <div>
      <About />
    </div>
  );
};

export default App;





import './CSS/App.css';
import './CSS/Aboutindex.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Projects from './Component/Projects';



const App = () => {
  return (
    <div>
      <Projects />
    </div>
  );
};

export default App;



import './CSS/App.css';
import './CSS/Aboutindex.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Component/Home';



const App = () => {
  return (
    <div>
      <Home />
    </div>
  );
};

export default App;



import './CSS/App.css';
import './CSS/Aboutindex.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Skills from './Component/Skills';



const App = () => {
  return (
    <div>
      <Skills />
    </div>
  );
};

export default App;






*/
