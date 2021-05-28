import React from 'react'

export const Nav = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light py-4">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">You Can Help</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0 mr-4">
        <li className="nav-item">
          <a className="nav-link" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">About Us</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
    )
}


// rfc 
// rfce