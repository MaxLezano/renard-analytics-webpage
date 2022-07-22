import React from 'react';
import logoImage from '../../assets/images/logo-white.png';
import { FacebookRounded, Twitter, YouTube } from '@mui/icons-material';
import { useTranslation } from 'react-i18next';
import Button from '../Button/Button';
import { Link } from 'react-router-dom';

function Footer() {
  const [t] = useTranslation('global');

  return (
    <div className='container-fluid bg-dark py-5'>
      <div className='row d-flex justify-content-center'>
        <img className='p-3 col-9 col-lg-2' src={logoImage} alt="logo" />
        <div className='d-flex justify-content-center p-2 mt-4'>
          <Link to='/'>
            <Button className='btn border-0 text-white px-3' description={t('footer.home')} />
          </Link>
          <Link to='/about'>
            <Button className='btn border-0 text-white px-3' description={t('footer.about')} />
          </Link>
          <Link to='/contact-us'>
            <Button className='btn border-0 text-white px-3' description={t('footer.hire')} />
          </Link>
          <Link to='/blog'>
            <Button className='btn border-0 text-white px-3' description={t('footer.blog')} />
          </Link>
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