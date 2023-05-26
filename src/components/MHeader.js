import React, { useEffect, useState } from 'react'
import { NavLink, Link } from 'react-router-dom'

const MHeader = () => {
    // useEffect(() => {
    //     const handleScroll = () => {
    //       if (window.scrollY > 30) {
    //         document.querySelector('.navbar').classList.add('scrolled')
    //       } else {
    //         document.querySelector('.navbar').classList.remove('scrolled')
    //       }
    //     }
    //     window.addEventListener('scroll', handleScroll)
    //   }, [])
    const [tooltipText, setTooltipText] = useState('');

    const handleMouseOver = (event) => {
        setTooltipText(event.target.getAttribute('aria-label'));

    };

    const handleMouseLeave = () => {
        setTooltipText('');
    };

    return (
        <>
            {/* {/* La navbar doit etre respo
            <nav class="navbar bg-secondary navbar-expand-lg  body-tertiary">
                <div class="container-fluid ">
                    <a class="navbar-brand" href="#">
                         Dev Kyan
                    </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="navbar-collapse collapse show" id="navbarScroll">
                        <form class="d-flex my-lg-0 me-auto">
                            <input type="search" class="form-control me-2" placeholder="Search Startups" aria-label="Search" id="searchBar" />
                            <button class="btn btn-outline-success" type="submit" onclick="search()">Search</button>
                        </form>
                        <ul class="navbar-nav ms-auto my-lg-0 navbar-nav-scroll" style={{ maxHeight: "100px", overflowY: "auto" }}>
                            <li class="nav-item">
                                <NavLink class="nav-link active text-white" aria-current="page" to="/">Home</NavLink>
                            </li>
                            <li class="nav-item">
                                <NavLink class="nav-link text-white" to="/shop">All Category</NavLink>
                            </li>
                            <li class="nav-item">
                                <NavLink class="nav-link text-white" to="/contact">Contact</NavLink>
                            </li>
                        </ul>
                        <div>
                            <Link
                                className="d-flex align-items-center gap-10 text-white"
                            >
                                <img src='images/user.svg' alt='user' />

                            </Link>
                        </div>
                    </div>


                </div>
            </nav>  */}
            <header class="navbar d-flex text-bg-dark flex-wrap align-items-center justify-content-center justify-content-md-between py-2  ">
                <div class="col-md-3 mb-2 mb-md-0">
                    <NavLink href="/" class="d-inline-flex link-body-emphasis text-decoration-none">
                        {/* <svg class="bi" width="40" height="32" role="img" aria-label="Bootstrap"><use xlink:href="#bootstrap"></use></svg> */}
                        Dev Kyan
                    </NavLink>
                </div>

                <ul class="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
                    <li><NavLink to="/" class="text-white  nav-link px-2 link-secondary">Home</NavLink></li>
                    <li><NavLink to="/category" class="text-white nav-link px-2">All Category</NavLink></li>
                    <li><NavLink to="/contact" class="text-white nav-link px-2">Contact</NavLink></li>
                </ul>

                <div class="col-md-3 text-end ms-auto">
                    <button type="button" class="btn btn-outline-primary me-2">Login</button>
                    <button type="button" class="btn btn-primary">Sign-up</button>
                </div>
                <div class="dropdown text-end">
                    <a href="#" class="d-block link-dark text-decoration-none dropdown-toggle " data-bs-toggle="dropdown" aria-expanded="true">

                        <img src='images/user.svg' alt='user' class="rounded-circle" width="32" height="32" />
                    </a>
                    <ul class="dropdown-menu text-small " style={{}}>
                        <li><a class="dropdown-item" href="#">New Startup...</a></li>
                        <li><a class="dropdown-item" href="#">Admin</a></li>
                        <li><a class="dropdown-item" href="#">Account</a></li>
                        <li><hr class="dropdown-divider" /></li>
                        <li><a class="dropdown-item" href="#">Sign out</a></li>
                    </ul>
                </div>
            </header>
        </>
    )
}

export default MHeader

