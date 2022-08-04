import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from '../../Button/Button';
import logoImageWhite from '../../../assets/images/logo-white.png';
import logoImageBlack from '../../../assets/images/logo-black.png';
import { useTranslation } from 'react-i18next';
import spainFlag from '../../../assets/images/spain-flag.png';
import usaFlag from '../../../assets/images/usa-flag.png';
import ContactCard from '../../ContactCard/ContactCard';
import './Navbar.css';

function Navbar() {
  const [t, i18n] = useTranslation('global');
  const [isHome, setIsHome] = useState(false);

  useEffect(() => {
    if (window.location.pathname !== '/') {
      setIsHome(true);
    } else {
      document.getElementById('navbarClassColor').className += ' navbar-dark';
      setIsHome(false);      
    }
  }, []);

  return (
    <nav className='navbar navbar-expand-lg py-0' id='navbarClassColor'>
      <div className='container-fluid py-3 col-lg-10'>
        {
          isHome?
            <Link reloadDocument to='/' className='navbar-brand mx-0 py-0 px-2 col-9 col-sm-6 col-md-4 col-lg-2'>
              <img className='col-12' src={logoImageBlack} alt='logo'/>
            </Link>
          :
            <Link reloadDocument to='/' className='navbar-brand mx-0 py-0 px-2 col-9 col-sm-6 col-md-4 col-lg-2'>
              <img className='col-12' src={logoImageWhite} alt='logo'/>
            </Link>
        }
        <button
          className='navbar-toggler border-0'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarNavAltMarkup'
          aria-controls='navbarNavAltMarkup'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse mt-2 py-2 bgBurguer' id='navbarNavAltMarkup'>
          <div className='navbar-nav text-center'>
            {
              isHome?
                <Link reloadDocument className='nav-link text-black textNav' aria-current='page' to='/'>{t('navbar.home')}</Link>
              :
                null
            }
            {
              isHome?
                <Link reloadDocument className='nav-link text-black textNav' aria-current='page' to='/about'>{t('navbar.aboutUs')}</Link>
              :
                <Link reloadDocument className='nav-link textNav' aria-current='page' to='/about'>{t('navbar.aboutUs')}</Link>
            }
            {
              isHome?
                <Link reloadDocument className='nav-link text-black textNav' to='/blog'>{t('navbar.blog')}</Link>
              :
                <Link reloadDocument className='nav-link textNav' to='/blog'>{t('navbar.blog')}</Link>
            }
          </div>
          <Button
            type='button'
            description={t('navbar.hire')}
            className={'btn btn-danger px-5 py-2 mx-5 my-2'}
            dataBsToggle='modal'
            dataBsTarget='#hireModal'
          />
          <ContactCard />
          <div className='dropdown-center'>
            <button className='btn btn-light' type='button' data-bs-toggle='dropdown' aria-expanded='false'>
              {t('navbar.language')}
            </button>
            <div className='dropdown-menu text-center mt-2 boxLang'>
              <li className='d-flex justify-content-center'>
                <img src={spainFlag} className='btn dropdown-item flagLang' alt='spain flag' onClick={() => i18n.changeLanguage('es')} />
              </li>
              <li className='d-flex justify-content-center'>
                <img src={usaFlag} className='btn dropdown-item flagLang' alt='usa flag' onClick={() => i18n.changeLanguage('en')} />
              </li>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
