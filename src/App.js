import React from "react";
import "./App.css";
//import "./main.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/MLayout";
import MLayout from "./components/MLayout";
import { AuthProvider } from "react-auth-kit";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import OurStore from "./pages/OurStore";
import SingleProduct from "./pages/SingleProduct";
import SingleProd from "./pages/SingleProd";
// import LoginR from "./pages/Login";
import Login from "./pages/Log";
import ForgotPassword from "./pages/ForgotPassword";

import AuthLayout from "./pages/Signup";
import Signin from "./pages/Signin";
import Startup from "./pages/Startup";
import FAQ from "./pages/FAQ";
import TermsAndConditions from "./pages/TermsAndConditions";
import Welcome from "./pages/Welcome.js";
//import Layout from './components/Layout';
import UserLayout from './components/UserLayout';
import ProfileDashboard from './pages/ProfileDashboard';
import ChangeLocation from './pages/ChangeLocation';
import ChangePassword from './pages/ChangePassword';
import Overview from './pages/Overview';
import Cart from './pages/Cart';

import StartupLayout from './components/StartupLayout';
import StartupDashboard from './pages/StartupDashboard';
import SOverview from './pages/SOverview';
import AddStartup from './pages/AddStartup';
import StartupStatus from './pages/StartupStatus';


import Missing from './pages/Missing';
import Unauthorized from './pages/Unauthorized';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider authStorageType="localStorage">
        <Routes>
          {/* Public Section */}
          <Route path="/" element={<MLayout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="categories" element={<OurStore />} />
            <Route path="startup/:id" element={<SingleProd />} />
            <Route path="faq" element={<FAQ />} />
            <Route path="terms" element={<TermsAndConditions />} />
          </Route>

          {/* Auth Section */}
          <Route path="/auth" element={<AuthLayout />}>
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<Signin />} />
            <Route path="startup" element={<Startup />} />
            <Route path="forgot-password" element={<ForgotPassword />} />
          </Route>

          {/* Utils Section */}
          <Route path="unauthorized" element={<Unauthorized />} />

          {/* User Section */}
          <Route path="/user" element={<UserLayout />}>
            <Route index element={<ProfileDashboard />} />
            <Route path="overview" element={<Overview />} />
            <Route path="change-location" element={<ChangeLocation />} />
            <Route path="change-password" element={<ChangePassword />} />
            <Route path="cart" element={<Cart />} />
          </Route>

          {/* Startups Section */}
          <Route path="/funding" element={<StartupLayout />}>
            <Route index element={<StartupDashboard />} />
            <Route path="overview" element={<SOverview />} />
            <Route path="add" element={<AddStartup />} />
            <Route path="status" element={<StartupStatus />} />
          </Route>

          {/* catch all */}
          <Route path="/*" element={<Missing />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
