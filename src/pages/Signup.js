import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { Link, Outlet } from "react-router-dom";


const Signup = () => {
  return (
    <>
      {/* <Meta title={"Sign Up"} /> */}

      {/* <div className="login-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <div className="auth-card">
              <h3 className="text-center mb-3">Sign Up</h3>
              <form action="" className="d-flex flex-column gap-15">
                <div>
                  <input type="text" name="name" placeholder="Name" />
                </div>
                <div>
                  <input type="email" name="email" placeholder="Email" />
                </div>
                <div>
                  <input
                    type="tel"
                    name="mobile"
                    placeholder="Mobile Number"
                  />
                </div>
                <div>
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                  />
                </div>
                <div>
                  <div className="mt-3 d-flex justify-content-center gap-15 align-items-center">
                    <button className="button border-0">Sign Up</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div> */}
      <div className="container-xxl gradial-background">
        {/* <BreadCrumb title="Sign Up" /> */}
        <Outlet />
      </div>
    </>
  );
};

export default Signup;
