import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { Link, Outlet } from "react-router-dom";


const AuthLayout = () => {
  return (
    <>

      <div className=" gradial-background">
        {/* <BreadCrumb title="Sign Up" /> */}
        <Outlet />
      </div>
    </>
  );
};

export default AuthLayout;
