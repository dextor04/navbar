import React, { useState } from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const handleClick = () => setOpen(!open);
  const closeMenu = () => setOpen(false);
  return (
    <nav className="navbar">
      <Link to="/" className="nav-logo">
        NavBar
      </Link>
      <div className="nav-icons" onClick={handleClick}>
        {open ? <FiX /> : <FiMenu />}
        {/* <FiMenu />
        <FiX /> */}
      </div>
      <ul className={open ? "nav-links active" : "nav-links"}>
        <li className="nav-item" onClick={closeMenu}>
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li>
        <li className="nav-item" onClick={closeMenu}>
          <Link to="/about" className="nav-link">
            About
          </Link>
        </li>
        <li className="nav-item" onClick={closeMenu}>
          <Link to="/contact" className="nav-link">
            Contact
          </Link>
        </li>
        <li className="nav-item" onClick={closeMenu}>
          <Link to="/shop" className="nav-link">
            Shop
          </Link>
        </li>
      </ul>
    </nav>
  );
}
