import React from 'react';
import logoImage from '../../assets/images/logo-white.png';
import { FacebookRounded, Twitter, YouTube } from '@mui/icons-material';
import './Footer.css';

function Footer() {
  return (
    <div className='container-fluid py-5 bgColor'>
      <div className='row d-flex justify-content-center'>
        <img className='p-3 col-9 col-lg-2' src={logoImage} alt="logo" />
        <div className='text-center p-2 mt-4'>
          <a className='text-decoration-none text-white px-3' href='/'>Home</a>
          <a className='text-decoration-none text-white px-3' href='/'>Acerca de</a>
          <a className='text-decoration-none text-white px-3' href='/'>Contacto</a>
          <a className='text-decoration-none text-white px-3' href='/'>Blog</a>
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