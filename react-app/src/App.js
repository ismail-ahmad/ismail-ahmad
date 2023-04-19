import './App.css';
import { Routes, Route } from 'react-router-dom';
import Layout from './layout.js';
import About from './about.js';
import Contact from './contact.js';
import Home from './home.js';
import Blogroutes from './blogroutes.js';
import Notfound from './notfound';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/blog/*" element={<Blogroutes />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/about' element={<About />} />
        <Route path="*" element={<Notfound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
