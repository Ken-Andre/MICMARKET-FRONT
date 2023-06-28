import React, { useEffect, useState } from "react";
import { NavLink, useNavigate, Link } from "react-router-dom";
import useLogout from "../hooks/useLogout";
import useAuth from "../hooks/useAuth";

//before commit from 23 June added the show profile context

const MHeader = () => {
  const navigate = useNavigate();
  const logout = useLogout();
  const { auth } = useAuth();
  const [showLoginGroup, setShowLoginGroup] = useState(true);

  useEffect(() => {
    if (auth.token) {
      setShowLoginGroup(false);
    } else {
      setShowLoginGroup(true);
    }
  }, [auth.token]);

  const signOut = async () => {
    await logout();
    //   alert('You\'ve successfully logout');
    navigate("/");
  };

  return (
    <>
      <header className="navbar navbar-expand-lg d-flex justify-content-center text-bg-dark flex-wrap align-items-center justify-content-md-between py-2 w-100">
        <div className="navbar-brand col-lg-auto  ">
          <NavLink
            to="/"
            className="d-inline-flex link-body-emphasis text-white text-decoration-none"
          >
            {/* <svg className="bi" width="40" height="32" role="img" aria-label="Bootstrap"><use xlink:href="#bootstrap"></use></svg> */}
            Dev Kyan
          </NavLink>
        </div>

        <ul className="nav nav-masthead justify-content-center mx-auto d-flex align-items-center">
          <li className="nav-items">
            <NavLink
              to="/"
              className="text-white  nav-link px-2 link-secondary"
            >
              Home
            </NavLink>
          </li>
          <li className="nav-items">
            <NavLink to="/categories" className="text-white nav-link px-2">
              All Category
            </NavLink>
          </li>
          <li className="nav-items">
            <NavLink to="/contact" className="text-white nav-link px-2">
              Contact
            </NavLink>
          </li>
        </ul>
        {showLoginGroup ? (
          <div className="text-end ">
            <NavLink
              to="/auth/login"
              type="button"
              className="btn btn-outline-primary me-2"
            >
              Login
            </NavLink>
            <NavLink
              to="/auth/signup"
              type="button"
              className="btn btn-primary"
            >
              Sign-In
            </NavLink>
          </div>
        ) : (
          <div className="col-md-3 dropdown text-end">
            <a
              href="#"
              className="d-block link-dark btn dropdown-toggle "
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <img
                src="images/user.svg"
                alt="user"
                className="rounded-circle"
                width="32"
                height="32"
              />
            </a>
            <ul className="dropdown-menu dropdown-menu-end " style={{}}>
              {/* <li className="nav-items"><a className="dropdown-item" href="#">New Startup...</a></li>
                        <li className="nav-items"><a className="dropdown-item" href="#">Admin</a></li> */}
              <li className="nav-items">
                <Link className="dropdown-item " to="user">
                  Account Profile
                </Link>
                <Link className="dropdown-item" to="funding">
                  Startup Profile
                </Link>
              </li>
              <li className="nav-items">
                <hr className="dropdown-divider" />
              </li>
              <li className="nav-items">
                <a className="dropdown-item" href="#" onClick={signOut}>
                  Sign out
                </a>
              </li>
            </ul>
          </div>
        )}
      </header>
    </>
  );
};

export default MHeader;
