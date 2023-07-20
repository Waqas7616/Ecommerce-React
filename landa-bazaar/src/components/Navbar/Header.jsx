import React from 'react'

import './Header.css'
import logo from '../../images/logo.png'

function Header() {
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <a class="navbar-brand" href="/"><img src={logo} alt="" /></a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="/home">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/home">Shop</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/home">About Us</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/home">Contact</a>
            </li>

          </ul>
          <div class="d-flex gap-2" >

            <i class="fa-solid fa-bag-shopping"></i>
            <i class="fa-regular fa-heart"></i>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Header
