import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import MLayout from "./components/MLayout";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import OurStore from "./pages/OurStore";
import SingleProduct from "./pages/SingleProduct";
import LoginR from "./pages/Login";
import Login from "./pages/Log";

import Auth from "./pages/Signup";
import Signin from "./pages/Signin";
import Startup from "./pages/Startup";
import TermsAndConditions from "./pages/TermsAndConditions";
import Welcome from "./pages/Welcome.js";
import Missing from "./pages/Missing";
import PersistLogin from "./components/PersistLogin";
// import RequireAuth from "./features/auth/RequireAuth"; //this is for redux!!!
import RequireAuth from "./components/RequireAuthR"; //ceci c'est react persistant
const ROLES = {
  user: 2001,
  startup: 1984,
  admin: 5150,
};

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
            <Route path="loginr" element={<LoginR />} />
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<Signin />} />
            <Route path="startup" element={<Startup />} />
          </Route>
          {/* Startup Section */}

          {/* User Section */}
          <Route element={<PersistLogin />}>
            <Route  element={<RequireAuth allowedRoles={[ROLES.user]} />}>
              <Route path="welcome" element={<Welcome />} />
            </Route>
          </Route>
          {/* Admin Section */}
          <Route path="/m" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="shop" element={<OurStore />} />
          </Route>
          <Route path="*" element={<Missing />} />
        </Routes>
        {/* <Routes>
          <Route path="/*" element={<App />} />
        </Routes> */}

      </BrowserRouter>
    </>
  );
}

export default App;
