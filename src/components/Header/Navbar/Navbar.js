import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Button from "../../Button/Button";
import logoImage from "../../../assets/images/logo-white.png";
import "./Navbar.css";
import { useTranslation } from 'react-i18next';
import spainFlag from '../../../assets/images/spain-flag.png';
import usaFlag from '../../../assets/images/usa-flag.png';
import ContactCard from "../../ContactCard/ContactCard";

function Navbar() {
  const [t, i18n] = useTranslation('global');
  const [isHome, setIsHome] = useState(false);

  useEffect(() => {
    if (window.location.pathname !== '/') {
      setIsHome(true);
    } else {
      setIsHome(false);      
    }
  }, []);

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
          <div className='navbar-nav text-center'>
            {isHome? <Link className="nav-link textNav" aria-current="page" to="/">{t('navbar.home')}</Link> : null}
            <Link className="nav-link textNav" aria-current="page" to="/about">
              {t('navbar.aboutUs')}
            </Link>
            <Link className="nav-link textNav" to="/blog">
            {t('navbar.blog')}
            </Link>
          </div>
          <Button
            type="button"
            description={t('navbar.hire')}
            className={"btn btn-danger px-5 py-2 mx-5 my-2"}
            dataBsToggle="modal"
            dataBsTarget="#hireModal"
          />
          <ContactCard />
          <div className="dropdown-center">
            <button className="btn btn-light" type="button" data-bs-toggle="dropdown" aria-expanded="false">
              {t('navbar.language')}
            </button>
            <div className="dropdown-menu text-center mt-2 boxLang">
              <li className="d-flex justify-content-center">
                <img src={spainFlag} className='btn dropdown-item flagLang' alt="spain flag" onClick={() => i18n.changeLanguage('es')} />
              </li>
              <li className="d-flex justify-content-center">
                <img src={usaFlag} className='btn dropdown-item flagLang' alt="usa flag" onClick={() => i18n.changeLanguage('en')} />
              </li>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
