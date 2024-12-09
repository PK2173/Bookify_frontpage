import React, { useState } from "react";
import "./Navbar.css";

// import icons
import { VscMenu } from "react-icons/vsc";


// import Router link......
import { Link, NavLink } from "react-router-dom";

// import Asstes........
import Logo from "../../assets/logo.png";

// import NavData....
import { navLinks, navRight } from "../../Data/Data";
import { GrClose } from "react-icons/gr";

const Navbar = () => {
  //  Use state from NavLinks Show And Hide wher size min then 1024...............
  const [isNavLinkShowing, setisNavLinkShowing] = useState(false)

  // ...............Window Scroll Nav-Links Effects......................
  if (window.innerWidth < 1024) {
    window.addEventListener('scroll',()=>{
      document.querySelector('.nav-links').classList.add('navLinksHide')
      setisNavLinkShowing(false)
    })
  }
  window.addEventListener('scroll',()=>{
    document.querySelector('nav').classList.toggle('navLinksShow',window.scrollY > 0)
  })

  return (
    <nav>
      <div className="container nav-container">
        {/* {.....Logo......} */}
        <Link to={"/"} className="logo">
          <img src={Logo} alt="logo" />
        </Link>

        {/* {......Nav-links.....} */}

        <ul className={`nav-links ${isNavLinkShowing ? 'navLinksShow' : 'navLinksHide'}`}>
          {navLinks.map(({ name, path }, index) => {
            return (
              <li key={index}>
                <NavLink className={({ isActive }) => (isActive ? 'active' : '')} to={path}>{name}</NavLink>
              </li>
            );
          })}
        </ul>

        {/* {......Nav-Right.....} */}

        <div className="nav-right">
          {navRight.managements.map((itmes, index) => {
            return (
              <Link
                key={index}
                // target="_blank"
                className="management-icons"
                to={itmes.path}
              >
                <itmes.icon />
              </Link>
            );
          })}
          <button className="menu-button" onClick={()=>{setisNavLinkShowing(!isNavLinkShowing)}}>
            {isNavLinkShowing ? <GrClose /> : <VscMenu />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
