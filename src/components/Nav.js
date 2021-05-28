import React from "react";
import "./Nav.css";
import { Link } from "react-router-dom";

export const Nav = () => {
  return (
    <div className="header">
      <img
        src="https://cdn.dribbble.com/users/2620348/screenshots/10495041/shot-cropped-1582915032757.png"
        alt=""
      />

        <div>
        <ul className="nav-links">
          <li className="hover-line">
            <Link to="/">Home</Link>
          </li>
          <li className="hover-line">
            <Link to="/About">About</Link>
          </li>
          <li className="hover-line">
            <Link to="/register">Register</Link>
          </li>
        </ul>
      </div>
      </div>
  );
};

// rfc
// rfce
