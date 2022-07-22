import React from 'react';
import logoImage from '../../assets/images/logo-white.png';
import { FacebookRounded, Twitter, YouTube } from '@mui/icons-material';
import { useTranslation } from 'react-i18next';

function Footer() {
  const [t] = useTranslation('global');

  return (
    <div className='container-fluid bg-dark py-5'>
      <div className='row d-flex justify-content-center'>
        <img className='p-3 col-9 col-lg-2' src={logoImage} alt="logo" />
        <div className='text-center p-2 mt-4'>
          <a className='text-decoration-none text-white px-3' href='/'>{t('footer.home')}</a>
          <a className='text-decoration-none text-white px-3' href='/'>{t('footer.about')}</a>
          <a className='text-decoration-none text-white px-3' href='/'>{t('footer.hire')}</a>
          <a className='text-decoration-none text-white px-3' href='/'>{t('footer.blog')}</a>
        </div>
        <div className='d-flex justify-content-center mt-4'>
          <button className='btn text-white border-0 p-2 mx-3' href="/"><FacebookRounded /></button>
          <button className='btn text-white border-0 p-2 mx-3' href="/"><Twitter /></button>
          <button className='btn text-white border-0 p-2 mx-3' href="/"><YouTube /></button>
        </div>
      </div>
    </div>
  );
}

export default Footer;