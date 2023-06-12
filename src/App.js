import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/MLayout";
import MLayout from "./components/MLayout";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import OurStore from "./pages/OurStore";
import SingleProduct from "./pages/SingleProduct";
// import LoginR from "./pages/Login";
import Login from "./pages/Log";

import AuthLayout from "./pages/Signup";
import Signin from "./pages/Signin";
import Startup from "./pages/Startup";
import TermsAndConditions from "./pages/TermsAndConditions";
import Welcome from "./pages/Welcome.js";
//import Layout from './components/Layout';

import Missing from './pages/Missing';
import Unauthorized from './pages/Unauthorized';



function App() {
    return (
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
          <Route path="/auth" element={<AuthLayout />}>
            {/* <Route path="loginr" element={<LoginR />} /> */}
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<Signin />} />
            <Route path="startup" element={<Startup />} />
          </Route>
          {/* Startup Section */}
        <Route path="unauthorized" element={<Unauthorized />} />

        {/* we want to protect these routes */}


        <Route path="/" element={<Home />} />





        {/* catch all */}
        <Route path="*" element={<Missing />} />

    </Routes>
    </BrowserRouter>
  );
}

export default App;
