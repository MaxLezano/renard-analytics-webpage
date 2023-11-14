import React, { useEffect } from 'react';
import Navbar from "../navbar/Navbar";
import MainBanner from "../mainBanner/MainBanner";
import About from "../about/About";
import Identity from "../identity/Identity";
import Areas from '../areas/Areas';
import Solutions from '../solutions/Solutions';
import Projects from '../projects/Projects';
import './main.css';

const Main = () => {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    scrollToTop();
  }, []);

  return (
    <div className="d-flex flex-column">
      <Navbar />
      <MainBanner />
      <About />
      <div className="divider"></div>
      <Identity />
      <div className="divider"></div>
      <Areas />
      <div className="divider"></div>
      <Solutions />
      <div className="divider"></div>
      <Projects />
    </div>
  );
};

export default Main;