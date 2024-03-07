import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { WhiteLogo, WhiteLogoText } from "../assets/images";

function NavBar() {
  return (
    <div>
        <nav className="navbar">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
                <img src={WhiteLogoText} width={150} height={50} />
            </a>
            {/* <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarBtns" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button> */}

    <div class="d-flex " id="navbarBtns">
      <button className="btn btn-primary me-4 px-3">Sign Up</button>
      <button class="btn btn-outline-primary px-3" type="submit">Login</button>
      </div>
          </div>
        </nav>     
    </div>
  )
}

export default NavBar;