import React from 'react'
import {Link} from 'react-router-dom'
export default function Usernav() {
    return (
        <>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Pizza Hub</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="about">About</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="contact">Contact</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="cart">Cart</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="userlogin">Login</Link>
        </li>
        
      </ul>
      
    </div>
  </div>
</nav>

        </>
    )
}
