import React from "react";
import { Link } from "react-router-dom";
import Button from "../../Button";
import logoImage from "../../../assets/images/logo-white.png";
import "./Navbar.css";
import { useTranslation } from 'react-i18next';

function Navbar() {
  const [t, i18n] = useTranslation('global');

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
        <div className="collapse navbar-collapse py-2 bgBurguer" id="navbarNavAltMarkup">
          <div className="navbar-nav text-center">
            <Link className="nav-link textNav" aria-current="page" to="/about">
              {t('navbar.aboutUs')}
            </Link>
            <Link className="nav-link textNav" to="/blog">
            {t('navbar.blog')}
            </Link>
          </div>
          <Link to='/contact-us'>
            <Button
              description={t('navbar.hire')}
              className={"btn btn-danger px-5 py-2 mx-5 my-2"}
            />
          </Link>
          <div className="dropdown-center">
            <button className="btn btn-light" type="button" data-bs-toggle="dropdown" aria-expanded="false">
              {t('navbar.language')}
            </button>
            <ul className="dropdown-menu text-center">
              <li><button className='btn dropdown-item border-0' onClick={() => i18n.changeLanguage('es')}>Español</button></li>
              <li><button className='btn dropdown-item border-0' onClick={() => i18n.changeLanguage('en')}>Inglés</button></li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
