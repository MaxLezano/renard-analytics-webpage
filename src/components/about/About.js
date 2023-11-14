import React, { useState, useEffect } from 'react';
import CardItem from '../cardItem/CardItem';
import { FeedOutlined, AccountTreeOutlined, TerminalOutlined, InsightsOutlined, 
  SchoolOutlined, EngineeringOutlined, ConnectWithoutContactOutlined } from '@mui/icons-material';
import AboutCards from '../../assets/images/aboutCards/aboutCards';
import { useTranslation } from 'react-i18next';
import './about.css';

import { useSpring, animated } from 'react-spring';
import { useInView } from 'react-intersection-observer';
import { useMediaQuery } from '@react-hook/media-query';

const About = () => {
  const [t] = useTranslation('global');
  const [activeIndex, setActiveIndex] = useState(0);
  const [itemsVisible, setItemsVisible] = useState(false);

  const isNarrowScreen = useMediaQuery('(max-width: 600px)');

  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  const fromTop = useSpring({
    opacity: inView && !isNarrowScreen ? 1 : 0,
    transform: inView && !isNarrowScreen ? 'translateY(0)' : 'translateY(-100%)',
    config: {
      duration: 500,
      tension: 180,
      friction: 18,
      mass: 1,
      clamp: true,
      precision: 0.1,
    },
  });

  const fromRight = useSpring({
    opacity: inView && !isNarrowScreen ? 1 : 0,
    transform: inView && !isNarrowScreen ? 'translateX(0)' : 'translateX(100%)',
    config: {
      duration: 500,
      tension: 180,
      friction: 18,
      mass: 1,
      clamp: true,
      precision: 0.1,
    },
  });

  const fromLeft = useSpring({
    opacity: inView && !isNarrowScreen ? 1 : 0,
    transform: inView && !isNarrowScreen ? 'translateX(0)' : 'translateX(-100%)',
    config: {
      duration: 500,
      tension: 180,
      friction: 18,
      mass: 1,
      clamp: true,
      precision: 0.1,
    },
  });

  const cardData = [
    { 
      iconItem: <TerminalOutlined />, 
      content: t('about.cardDataSolution') ,
      image: AboutCards.Solution
    },
    { 
      iconItem: <AccountTreeOutlined />, 
      content: t('about.cardDataExperience'),
      image: AboutCards.Experience
    },
    { 
      iconItem: <FeedOutlined />, 
      content: t('about.cardDataGeneration'),
      image: AboutCards.Generation
    },
    { 
      iconItem: <InsightsOutlined />, 
      content: t('about.cardDataManagement'),
      image: AboutCards.Management
    },
    { 
      iconItem: <SchoolOutlined />, 
      content: t('about.cardDataTraining'),
      image: AboutCards.Training
    },
    { 
      iconItem: <EngineeringOutlined />, 
      content: t('about.cardDataCustomer'),
      image: AboutCards.Customer
    },
    { 
      iconItem: <ConnectWithoutContactOutlined />, 
      content: t('about.cardDataConsultancy'),
      image: AboutCards.Consultancy
    },
  ];

  const handleToggleExpand = (index) => {
    if (activeIndex === index) {
      return;
    }
    setActiveIndex(index);
  };

  const toggleItemsVisibility = () => {
    setItemsVisible(!itemsVisible);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 600 && itemsVisible) {
        setItemsVisible(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [itemsVisible]);

  return (
    <div className='container-fluid d-flex flex-column justify-content-evenly align-items-center about' id='aboutUs'>
      {isNarrowScreen?
        <div className='col-lg-8 col-xxl-6 about-us'>
          <h2 className='text-white bold-title text-center fs-1'>{t('about.aboutUs')}</h2>
          <p className='text-white light-text text-center m-0'>{t('about.aboutUsDesc')}</p>
        </div>
      :
        <animated.div className='col-lg-8 col-xxl-6 about-us' ref={ref} style={fromTop}>
          <h2 className='text-white bold-title text-center fs-1'>{t('about.aboutUs')}</h2>
          <p className='text-white light-text text-center m-0'>{t('about.aboutUsDesc')}</p>
        </animated.div>
      }
      <div className='container d-flex justify-content-center align-items-center col-md-10 col-xl-12 title-card-container'>
        {isNarrowScreen?
          <div className='container-fluid col-md-4 we-offer'>
            <h3 className='text-white bold-title text-center fs-2'>{t('about.whatWeOffer')}</h3>
            <p className='text-white light-text text-center m-0'>{t('about.whatWeOfferDesc')}</p>
          </div>
        :
          <animated.div className='container-fluid col-md-4 we-offer' ref={ref} style={fromLeft}>
            <h3 className='text-white bold-title text-center fs-2'>{t('about.whatWeOffer')}</h3>
            <p className='text-white light-text text-center m-0'>{t('about.whatWeOfferDesc')}</p>
          </animated.div>
        }
        {isNarrowScreen?
          <div className='container-fluid col-md-10 col-xxl-8 card-container'>
            {cardData.map((card, index) => (
              <CardItem
                key={index}
                icon={card.iconItem}
                content={card.content}
                image={card.image}
                expanded={activeIndex === index}
                isMaximumWidth={activeIndex === index}
                onToggleExpand={() => handleToggleExpand(index)}
              />
            ))}
          </div>
        :
          <animated.div className='container-fluid col-md-10 col-xxl-8 card-container' ref={ref} style={fromRight}>
            {cardData.map((card, index) => (
              <CardItem
                key={index}
                icon={card.iconItem}
                content={card.content}
                image={card.image}
                expanded={activeIndex === index}
                isMaximumWidth={activeIndex === index}
                onToggleExpand={() => handleToggleExpand(index)}
              />
            ))}
          </animated.div>
        }
        <div className='container-fluid px-0 pb-2 items-container' style={{ display: itemsVisible ? 'block' : 'none' }}>
          {cardData.map((card, index) => (
            <div className='item py-4' key={index}>
              <span className='icon'>{card.iconItem}</span>
              <p className='text-white light-text mb-0'>{card.content}</p>
            </div>
          ))}
        </div>
        <div className='mb-4 px-4 py-3 regular-text toggle-button' onClick={toggleItemsVisibility}>
          {itemsVisible ? t('about.seeLess') : t('about.seeMore')}
        </div>
      </div>
    </div>
  );
};

export default About;