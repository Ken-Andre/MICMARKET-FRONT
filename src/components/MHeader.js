// import React, { useEffect, useState } from 'react'
import { NavLink,useNavigate, Link } from "react-router-dom";
import useLogout from "../hooks/useLogout";

const MHeader = () => {
    const navigate = useNavigate();
    const logout = useLogout();

    const signOut = async () => {
      await logout();
    //   alert('You\'ve successfully logout');
      navigate('/');
    }

    return (
        <>
            <header class="navbar navbar-expand-lg d-flex text-bg-dark flex-wrap align-items-center justify-content-center justify-content-md-between py-2  ">
                <div class="navbar-brand col-md-4 mb-2 ">
                    <NavLink to="/" className="d-inline-flex link-body-emphasis text-white text-decoration-none">
                        {/* <svg class="bi" width="40" height="32" role="img" aria-label="Bootstrap"><use xlink:href="#bootstrap"></use></svg> */}
                        Dev Kyan
                    </NavLink>
                </div>

                <ul class="nav nav-masthead justify-content-center">
                    <li class="nav-items"><NavLink to="/" className="text-white  nav-link px-2 link-secondary">Home</NavLink></li>
                    <li class="nav-items"><NavLink to="/categories" className="text-white nav-link px-2">All Category</NavLink></li>
                    <li class="nav-items"><NavLink to="/contact" className="text-white nav-link px-2">Contact</NavLink></li>
                </ul>

                <div class="col-md-3 text-end ms-auto">
                    <NavLink to="/auth/login" type="button" className="btn btn-outline-primary me-2">Login</NavLink>
                    <NavLink to="/auth/signup" type="button" className="btn btn-primary">Sign-In</NavLink>
                </div>
                <div class="dropdown text-end">
                    <a href="#" class="d-block link-dark btn dropdown-toggle "
                        data-bs-toggle="dropdown"
                        aria-expanded="false">

                        <img src='images/user.svg' alt='user' class="rounded-circle"
                            width="32"
                            height="32" />
                    </a>
                    <ul class="dropdown-menu dropdown-menu-end " style={{}}>
                        <li class="nav-items"><a class="dropdown-item" href="#">New Startup...</a></li>
                        <li class="nav-items"><a class="dropdown-item" href="#">Admin</a></li>
                        <li class="nav-items"><a class="dropdown-item" href="#">Account</a></li>
                        <li class="nav-items"><hr class="dropdown-divider" /></li>
                        <li class="nav-items"><a class="dropdown-item" href="#" onClick={signOut}>Sign out</a></li>
                    </ul>
                </div>

            </header>
        </>
    )
}

export default MHeader

