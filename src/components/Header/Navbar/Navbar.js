import React from "react";
import { Link } from "react-router-dom";
import Button from "../../Main/../Button";
import logoImage from "../../../assets/images/logo-white.png";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark">
      <div className="container-fluid py-3 col-lg-9">
        <img
          className="navbar-brand col-9 col-lg-2"
          src={logoImage}
          alt="logo"
        />
        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse bgBurguer"
          id="navbarNavAltMarkup"
        >
          <div className="navbar-nav align-items-center contTextNav">
            <Link className="nav-link textNav" aria-current="page" to="/about">
              ¿Quienes Somos?
            </Link>
            <Link className="nav-link textNav" aria-current="page" to="/blog">
              Blog
            </Link>
          </div>
          <Link to='/contact-us'>
            <Button
              description={"Contratar"}
              className={"btn btn-danger my-3 px-5"}
            />
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
