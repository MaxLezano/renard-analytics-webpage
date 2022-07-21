import React, {useState, useEffect} from 'react';
import Navbar from './Navbar/Navbar';
import './Header.css';

function Header(){

  const [ headerClass , setHeaderClass ] = useState('header');

  useEffect(() => {
    const handleScroll = () => { 
      if (window.pageYOffset > 1) {
        setHeaderClass('header_scrolled');
      } else {
        setHeaderClass('header');
      }
    }
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, []);

  return(
    <div className={headerClass}>
      <Navbar/>
    </div>
  );
}

export default Header;