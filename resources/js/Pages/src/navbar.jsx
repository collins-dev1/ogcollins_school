import my_image from "./asset/ogcollinscollegemain.png";
import { Link, useLocation } from "react-router-dom";
import React, { useState, useEffect } from "react";

const Navbar = () => {
    const [navbar, setNavbar] = useState(false);
    const [navlink, setNavlink] = useState(false);
    const location = useLocation(); // Hook to get the current location

    // Scroll to the top whenever the route changes
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]); // Trigger the effect when the pathname changes

    const changeNavlink = () => {
        if (window.scrollY >= 80) {
            setNavlink(true);
        } else {
            setNavlink(false);
        }
    };

    const changeBackground = () => {
        if (window.scrollY >= 80) {
            setNavbar(true);
        } else {
            setNavbar(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", changeBackground);
        return () => {
            window.removeEventListener("scroll", changeBackground);
        };
    }, []);

    useEffect(() => {
        window.addEventListener("scroll", changeNavlink);
        return () => {
            window.removeEventListener("scroll", changeNavlink);
        };
    }, []);

    // State to manage the visibility of the menu on mobile
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Function to toggle the menu
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    // Function to close the menu
    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <nav className={navbar ? "navba navbar-active" : "navba"}>
            <div className="nav-logo">
                <Link to="/">
                    <img src={my_image} width="100px" height="100px" alt="Logo" />
                </Link>
            </div>
            <button className="navbar-toggle" onClick={toggleMenu} aria-label="Toggle navigation">
                <span className="hamburger">
                    <i className="ri-bar-chart-horizontal-line"></i>
                </span>
            </button>
            <div className={`navbar-menu ${isMenuOpen ? 'active' : ''}`} onClick={closeMenu}>
                <div className={navlink ? "nav-link nav-link-active" : "nav-link"}>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About Us</Link></li>
                        <li><Link to="/contact">Contact Us</Link></li>
                        <li><Link to="/blog">Blog</Link></li>
                    </ul>
                </div>
                <div className="nav-button">
                    <Link to="/login">
                        <button>Login</button>
                    </Link>
                    <Link to="/signup">
                        <button>Register</button>
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;