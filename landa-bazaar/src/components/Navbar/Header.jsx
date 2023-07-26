import React from 'react'

import './Header.css'
import logo from '../../images/logo.png'

function Header() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="/"><img src={logo} alt="" /></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/home">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/home">Shop</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/home">About Us</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/home">Contact</a>
            </li>

          </ul>
          <div className="d-flex gap-2" >

            <i className="fa-solid fa-bag-shopping"></i>
            <i className="fa-regular fa-heart"></i>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Header
