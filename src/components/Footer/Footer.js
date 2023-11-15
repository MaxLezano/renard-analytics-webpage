import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from '../button/Button';
import ContactCard from '../contactCard/ContactCard';
import Divider from '@mui/material/Divider';
import { Instagram } from '@mui/icons-material';
import { useTranslation } from 'react-i18next';
import './footer.css'

function Footer() {
  const [t] = useTranslation('global');
  const [isHome, setIsHome] = useState(false);

  useEffect(() => {
    const isHomePath = window.location.pathname === '/';
    setIsHome(isHomePath);
  }, []);

  return (
    <div className='container-fluid d-flex flex-column footer-bg px-0'>
      <div className='d-flex align-items-center px-5 py-2 footer-menu'>
        {
          isHome?
            <a href='#mainBanner' className='text-decoration-none footer-text btn-teamwork'>{t('footer.home')}</a>
          :
            <Link to='/' className='text-decoration-none footer-text btn-teamwork'>{t('footer.home')}</Link>
        }
        <Divider orientation="vertical" variant="middle" flexItem className='mx-2 text-white' sx={{ borderRight: '2px solid' }} />
        <Button 
          className='footer-text btn-teamwork'
          type='button'
          description={t('footer.contact')}
          dataBsToggle='modal'
          dataBsTarget='#contactModal'
        />
        <ContactCard />
        <Divider orientation="vertical" variant="middle" flexItem className='mx-2 py-2 text-white' sx={{ borderRight: '2px solid' }} />
        <Link className='text-decoration-none footer-text btn-teamwork' to='/team'>{t('footer.teamwork')}</Link>
      </div>
      <div className='container-fluid px-5 py-1 foot-footer-gb'>
        <p className='m-0 px-2 light-italic-text foot-footer-text'>{t('footer.copyright')}</p>
        <div className='px-3 social-footer'>
          <button className='btn border-0 social-icon instagram' href='/'><Instagram /></button>
        </div>
      </div>
    </div>
  );
}

export default Footer;