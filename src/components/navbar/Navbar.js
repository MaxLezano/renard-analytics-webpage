import React, { useState, useEffect } from 'react';
import { useMediaQuery } from '@react-hook/media-query';
import './navbar.css';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('mainBanner');
  const isNarrowScreen = useMediaQuery('(max-width: 600px)');

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const aboutUs = document.getElementById('aboutUs');
    const identity = document.getElementById('identity');
    const areas = document.getElementById('areas');
    const solutions = document.getElementById('solutions');
    const products = document.getElementById('products');

    if (scrollPosition < aboutUs.offsetTop) {
      setActiveSection('mainBanner');
    } else if (scrollPosition < identity.offsetTop) {
      setActiveSection('aboutUs');
    } else if (scrollPosition < areas.offsetTop) {
      setActiveSection('identity');
    } else if (scrollPosition < solutions.offsetTop) {
      setActiveSection('areas');
    } else if (scrollPosition < products.offsetTop) {
      setActiveSection('solutions');
    } else {
      setActiveSection('products');
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const navigationPoints = document.querySelectorAll('.navigation-point');

    navigationPoints.forEach(point => {
      const sectionId = point.getAttribute('href').substring(1);
      point.classList.toggle('active-section-nav', activeSection === sectionId);
    });
  }, [activeSection]);

  return (
    isNarrowScreen?
      null
    :
      <div className='navigation-points-container'>
        <a className='rounded-circle navigation-point' aria-current='page' href='#mainBanner'>A</a>
        <a className='rounded-circle navigation-point' aria-current='page' href='#aboutUs'>A</a>
        <a className='rounded-circle navigation-point' aria-current='page' href='#identity'>A</a>
        <a className='rounded-circle navigation-point' aria-current='page' href='#areas'>A</a>
        <a className='rounded-circle navigation-point' aria-current='page' href='#solutions'>A</a>
        <a className='rounded-circle navigation-point' aria-current='page' href='#products'>A</a>
      </div>
  );
}

export default Navbar;