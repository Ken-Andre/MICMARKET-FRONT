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
            <nav class="navbar bg-secondary navbar-expand-lg  body-tertiary">
                <div class="container-fluid ">
                    <a class="navbar-brand" href="#">
                        {/* <img src="images/image_google.png" alt="logo" width="30" height="24" class="d-inline-block align-text-top" /> */}Dev Kyan
                    </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="navbar-collapse collapse show" id="navbarScroll">
                        <form class="d-flex my-lg-0 me-auto">
                            <input type="search" class="form-control me-2" placeholder="Search images" aria-label="Search" id="searchBar" />
                            <button class="btn btn-outline-success" type="submit" onclick="search()">Search</button>
                        </form>
                        <ul class="navbar-nav ms-auto my-lg-0 navbar-nav-scroll" style={{ maxHeight: "100px", overflowY: "auto" }}>
                            <li class="nav-item">
                                <NavLink class="nav-link active text-white" aria-current="page" to="/m">Home</NavLink>
                            </li>
                            <li class="nav-item">
                                <NavLink class="nav-link text-white" to="/m/shop">All Category</NavLink>
                            </li>
                            <li class="nav-item">
                                <NavLink class="nav-link text-white" to="/m/contact">Contact</NavLink>
                            </li>
                        </ul>
                        {/* <a href="#" class="btn btn-outline-secondary d-sm-block d-block">Une demo ?</a> */}
                        <div>
                            <Link
                                className="d-flex align-items-center gap-10 text-white"
                            >
                                <img src='images/user.svg' alt='user' />

                            </Link>
                        </div>
                    </div>


                </div>
            </nav>

        </>
    )
}

export default MHeader

