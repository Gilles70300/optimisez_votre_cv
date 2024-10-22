import React from "react";
import {Routes, Route, Link} from "react-router-dom";

import Home from './pages/Home';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import Blog from './pages/Blog';
import Contact from './pages/Contact';

export default function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/">Accueil</Link>
        <Link to="/services">Services</Link>
        <Link to="/portfolio">Réalisations</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/contact">Contact</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/services" element={<Services/>}></Route>
        <Route path="/portfolio" element={<Portfolio/>}></Route>
        <Route path="/blog" element={<Blog/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
      </Routes>
    </div>
  );
}
