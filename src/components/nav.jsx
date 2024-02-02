import React, { useEffect } from 'react';
import { Link } from "react-router-dom";

export default function NavBar(){
    useEffect(() => {
        const navbar = document.getElementById("navbar");
    
        const handleScroll = () => {
          if (window.scrollY > 34) {
            navbar.style.backgroundColor = "#ffae00"; // Change to your desired dark color
          } else {
            navbar.style.backgroundColor = "transparent";
          }
        };
    
        window.addEventListener("scroll", handleScroll);
    
        return () => {
          window.removeEventListener("scroll", handleScroll);
        };
      }, []);

    return <div id="navbar" class="navbar">
    <div class="navbar-left">
      <a href='https://mme.iitj.ac.in/index'><img src="MME logo.png" alt="Logo" /></a>
      <span>MatRS-2024</span>
    </div>
    <div class="navbar-right">
        <Link to="/home">Home</Link>
        <Link to="/registration">Registration</Link>
        <Link to="/speakers">Invited Speakers</Link>
        <Link to="/map">How to Reach</Link>
        <Link to="/accommodation">Accommodation</Link>
        <Link to="/contact">Contact Us</Link>
    </div>
</div>
}