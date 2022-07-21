import React from 'react';
import logoImage from '../../../assets/images/logo-white.png';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark">
      <div className="container-fluid py-3 col-lg-9">
        <img className='navbar-brand col-9 col-lg-2' src={logoImage} alt="logo"/>
        <button className="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse bgBurguer" id="navbarNavAltMarkup">
          <div className="navbar-nav align-items-center contTextNav">
            <a className="nav-link textNav" aria-current="page" href="/#">¿Quienes Somos?</a>
            <a className="nav-link textNav" href="/#">Blog</a>
          </div>
          <button type="button" className="btn btn-danger my-3 px-5">Contratar</button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;