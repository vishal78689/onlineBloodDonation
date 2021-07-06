import React from "react";
import "./Nav.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export const Nav = () => {







  return (

      
     <>


<nav class="navbar navbar-expand-sm bg-success ">
        <ul class="navbar-nav ml-auto tt">
            <li class="nav-item">
            <a class="nav-link" href="#">
                 IVRS-1921
                </a>
            </li>
            <li class="nav-item">
            <a class="nav-link" href="#">
                Skip To Main Content
                </a>
            </li>
        </ul>
    </nav>
<ul class="nav justify-content-center pt-4 navbar-dark">
<a class="navbar-brand" href="/">
    <img src="https://cdn.dribbble.com/users/2620348/screenshots/10495041/shot-cropped-1582915032757.png"    alt="Logo"/>
  </a>
  <li class="nav-item">
    <Link class="nav-link active" to="/">Home</Link>
  </li>
  <li class="nav-item">
    <Link to="/about-section" class="nav-link active">About Us</Link>
  </li>
  <li class="nav-item">
    <Link  to="/cont" class="nav-link active">Contact Us</Link>
  </li>
  <li class="nav-item">
    <Link to="/register" class="nav-link active" >Register/Sign in</Link>
  </li>
</ul>
   {/* <a className="hamburger" href="#" ><i class="fas fa-bars"></i></a> */}
   <Link to="/register" className="hamburger" ><i class="fas fa-bars"></i></Link>

  
     </>
  
  );
};

// rfc
// rfce
