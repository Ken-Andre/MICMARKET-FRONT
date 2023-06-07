import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import MLayout from './components/MLayout';

import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import OurStore from './pages/OurStore';
import SingleProduct from './pages/SingleProduct';
import Login from './pages/Login';
import Auth from './pages/Signup';
import Signin from './pages/Signin';
import Startup from './pages/Startup';
import TermsAndConditions from './pages/TermsAndConditions';





function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* Public Section */}
          <Route path="/" element={<MLayout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="categories" element={<OurStore />} />
            <Route path="startup/:id" element={<SingleProduct />} />
            <Route path="terms" element={<TermsAndConditions />} />

            {/* <Route path="forgot" element={<Forgot />} /> */}

          </Route>
          {/* Auth Section */}
          <Route path="/auth" element={<Auth />}>
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<Signin />} />
            <Route path='startup' element={<Startup />} />
          </Route>
          {/* Startup Section */}

          {/* User Section */}

          {/* Admin Section */}
          <Route path="/m" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="shop" element={<OurStore />} />

          </Route>
        </Routes>
        {/* <Routes>
          <Route path="/*" element={<App />} />
        </Routes> */}
      </BrowserRouter>
    </>
  );
}

export default App;
