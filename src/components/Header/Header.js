import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from '../button/Button';
import logoImageWhite from '../../assets/images/logo-white.png';
import { useTranslation } from 'react-i18next';
import spainFlag from '../../assets/images/spain-flag.png';
import usaFlag from '../../assets/images/usa-flag.png';
import ContactCard from '../contactCard/ContactCard';
import { Public as PublicIcon } from '@mui/icons-material';
import Divider from '@mui/material/Divider';
import './header.css';

function Navbar() {
  const [t, i18n] = useTranslation('global');
  const [isTransparent, setIsTransparent] = useState(false);
  const [isHome, setIsHome] = useState(false);

  const handleNavbarHover = () => {
    const scrollTop = window.scrollY;
    if (scrollTop > 0) {
      setIsTransparent(!isTransparent);
    }
  };
  
  useEffect(() => {  
    window.addEventListener('scroll', handleScroll);
  
    const isHomePath = window.location.pathname === '/';
    setIsHome(isHomePath);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  const handleScroll = () => {
    const scrollTop = window.scrollY;
    if (scrollTop > 0) {
      setIsTransparent(true);
    } else {
      setIsTransparent(false);
    }
  };

  return (
    <nav 
      onMouseEnter={handleNavbarHover} 
      onMouseLeave={handleNavbarHover}
      className={`
      navbar navbar-expand-lg container-fluid py-0 home-header
        ${isTransparent ? 'scroll-down-black' : ''}
      `}
      id='navbarClassColor'
    >
      <div className='container-fluid py-1 col-11'>
        {
          isHome?
            <a href='#mainBanner' className='navbar-brand mx-0 py-1 px-2 white-logo'>
              <img className='col-12' src={logoImageWhite} alt='logo' height='60vh'/>
            </a>
          :
            <Link to='/' className='navbar-brand mx-0 py-1 px-2 white-logo'>
              <img className='col-12' src={logoImageWhite} alt='logo' height='60vh'/>
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
          <span className='navbar-toggler-icon inverter-burger-color'></span>
        </button>
        <div className='collapse navbar-collapse mt-2 py-2 border-0 bg-burguer' id='navbarNavAltMarkup'>
          {
            isHome?
              null
            :
              <Link to='/' className='nav-link px-3 text-nav light-text btn-login'>{t('header.home')}</Link>
          }
          <a className='nav-link px-3 text-nav light-text btn-login' href='https://superset.renardanalytics.com.ar/login/' target='blank'>
            {t('header.login')}
          </a>
          <Button
            type='button'
            description={t('header.contact')}
            className='btn px-3 py-2 mx-2 my-1 contact bold-text contact-white'
            dataBsToggle='modal'
            dataBsTarget='#contactModal'
          />
          <ContactCard />
          <Divider orientation="vertical" variant="middle" flexItem className='mx-2 text-white' sx={{ borderRight: '2px solid' }} />
          <div className='dropdown-center icon-action'>
            <button className='btn border-0 px-2' type='button' data-bs-toggle='dropdown' aria-expanded='false'>
              <PublicIcon className='public-icon'/>
            </button>
            <div className='dropdown-menu text-center mt-2 box-lang'>
              <li className='d-flex justify-content-center'>
                <img src={spainFlag} className='btn dropdown-item flag-lang' alt='spain flag' onClick={() => {i18n.changeLanguage('es')}} />
              </li>
              <li className='d-flex justify-content-center'>
                <img src={usaFlag} className='btn dropdown-item flag-lang' alt='usa flag' onClick={() => {i18n.changeLanguage('en')}} />
              </li>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
