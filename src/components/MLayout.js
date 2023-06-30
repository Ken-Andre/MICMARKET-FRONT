import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './MHeader';
import Footer from './Footer';

const Layout = () => {
  return (
  <>
    <Header />
    <Outlet />
    <Footer />

  </>
  )
};

export default Layout;
