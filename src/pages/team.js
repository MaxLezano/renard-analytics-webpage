import React, { useEffect } from 'react';
import Header from '../components/header/Header';
import Teamwork from '../components/teamwork/Teamwork';
import Footer from '../components/footer/Footer';

function Team() {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    scrollToTop();
  }, []);

  return (
    <>
      <Header />
      <Teamwork />
      <Footer />
    </>
  );
}

export default Team;