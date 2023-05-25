import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import MHeader from './MHeader';
import Footer from './Footer';

const Layout = () => {


  return (
    <>
      {/* <div className="wrapper"> */}
        <MHeader />
        <Outlet />
      {/* </div> */}
      <Footer />
    </>
  )
};

export default Layout;
