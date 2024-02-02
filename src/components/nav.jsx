import React, { useEffect } from 'react';

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
        <a href="/home">Home</a>
        <a href="/registration">Registration</a>
        <a href="/speakers">Invited Speakers</a>
        <a href="/map">How to Reach</a>
        <a href="/accommodation">Accommodation</a>
        <a href="/contact">Contact Us</a>
    </div>
</div>
}