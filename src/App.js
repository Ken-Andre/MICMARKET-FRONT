import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import MLayout from './components/MLayout';

import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import OurStore from './pages/OurStore';


function App() {
  return (
  <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element= {<MLayout />}>
          <Route index element= {<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="category" element={<OurStore />} />

        </Route>
        <Route path="/m" element= {<Layout />}>
          <Route index element= {<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="shop" element={<OurStore />} />

        </Route>
      </Routes>
    </BrowserRouter>
  </>
    );
}

export default App;
