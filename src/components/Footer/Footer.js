import React from 'react';
import logoImage from '../../assets/images/logo-white.png';
import { FacebookRounded, Twitter, YouTube } from '@mui/icons-material';
import { useTranslation } from 'react-i18next';
import Button from '../Button/Button';
import { Link } from 'react-router-dom';
import './Footer.css'
import ContactCard from '../ContactCard/ContactCard';

function Footer() {
  const [t] = useTranslation('global');
  
  const goToTop = () => {
    document.documentElement.scrollTop = 0;
  }

  return (
    <div className='container-fluid py-5 bgColor'>
      <div className='row d-flex justify-content-center'>
        <img className='p-3 col-9 col-sm-6 col-md-4 col-lg-2' src={logoImage} alt='logo' />
        <div className='d-flex justify-content-center p-2 mt-4'>
          <Link to='/' onClick={goToTop}>
            <Button className='btn border-0 text-white px-3' description={t('footer.home')} />
          </Link>
          <Link to='/about' onClick={goToTop}>
            <Button className='btn border-0 text-white px-3' description={t('footer.about')} />
          </Link>
          <Link to='/blog' onClick={goToTop}>
            <Button className='btn border-0 text-white px-3' description={t('footer.blog')} />
          </Link>
          <Button
            type='button'
            description={t('navbar.hire')}
            className={'btn border-0 text-white px-3'}
            dataBsToggle='modal'
            dataBsTarget='#hireModal'
          />
          <ContactCard />
        </div>
        <div className='d-flex justify-content-center mt-4'>
          <button className='btn text-white border-0 p-2 mx-3' href='/'><FacebookRounded /></button>
          <button className='btn text-white border-0 p-2 mx-3' href='/'><Twitter /></button>
          <button className='btn text-white border-0 p-2 mx-3' href='/'><YouTube /></button>
        </div>
      </div>
    </div>
  );
}

export default Footer;