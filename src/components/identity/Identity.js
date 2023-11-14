import React, { useState, useEffect } from 'react';
import CardCarousel from '../cardCarousel/CardCarousel';
import { useTranslation } from 'react-i18next';
import './identity.css';

import { useSpring, animated } from 'react-spring';
import { useInView } from 'react-intersection-observer';
import { useMediaQuery } from '@react-hook/media-query';

const Identity = () => {
  const [t] = useTranslation('global');
  const [valuesVisible, setValuesVisible] = useState(false);

  const isNarrowScreen = useMediaQuery('(max-width: 600px)');

  const [ref, inView] = useInView({
    triggerOnce: true,
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

  const fromBottom = useSpring({
    opacity: inView && !isNarrowScreen ? 1 : 0,
    transform: inView && !isNarrowScreen ? 'translateY(0)' : 'translateY(100%)',
    config: {
      duration: 500,
      tension: 180,
      friction: 18,
      mass: 1,
      clamp: true,
      precision: 0.1,
    },
  });

  const values = [
    {
      title: t('identity.valuesEmpathy'),
      content: t('identity.valuesEmpathyDesc')
    },
    {
      title: t('identity.valuesMutualGrowth'),
      content: t('identity.valuesMutualGrowthDesc')
    },
    {
      title: t('identity.valuesTransparency'),
      content: t('identity.valuesTransparencyDesc')
    },
    {
      title: t('identity.valuesContImp'),
      content: t('identity.valuesContImpDesc')
    },
    {
      title: t('identity.valuesQuality'),
      content: t('identity.valuesQualityDesc')
    },
    {
      title: t('identity.valuesTeamwork'),
      content: t('identity.valuesTeamworkDesc')
    },
  ];

  const toggleValuesVisibility = () => {
    setValuesVisible(!valuesVisible);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 600 && valuesVisible) {
        setValuesVisible(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [valuesVisible]);

  return (
    <div className='container-fluid d-flex flex-column justify-content-center align-items-center gap-5 identity' id='identity'>
      <div className='d-flex align-items-center justify-content-evenly pt-5 mision-vision'>
        {isNarrowScreen?
          <div className='col-12 col-md-5 col-lg-4 mision'>
            <h2 className='text-white bold-title text-center fs-1'>{t('identity.mission')}</h2>
            <p className='text-white light-text text-center m-0'>{t('identity.missionDesc')}</p>
          </div>
        :
          <animated.div className='col-12 col-md-5 col-lg-4 mision' ref={ref} style={fromLeft}>
            <h2 className='text-white bold-title text-center fs-1'>{t('identity.mission')}</h2>
            <p className='text-white light-text text-center m-0'>{t('identity.missionDesc')}</p>
          </animated.div>
        }
        {isNarrowScreen?
          <div className='col-12 col-md-5 col-lg-4 vision'>
            <h2 className='text-white bold-title text-center fs-1'>{t('identity.vision')}</h2>
            <p className='text-white light-text text-center m-0'>{t('identity.visionDesc')}</p>
          </div>
        :
          <animated.div className='col-12 col-md-5 col-lg-4 vision' ref={ref} style={fromRight}>
            <h2 className='text-white bold-title text-center fs-1'>{t('identity.vision')}</h2>
            <p className='text-white light-text text-center m-0'>{t('identity.visionDesc')}</p>
          </animated.div>
        }
      </div>
      {isNarrowScreen?
        <div className='container-fluid d-flex flex-column justify-content-evenly align-items-center gap-2'>
          <h2 className='text-white bold-title text-center fs-1 mb-0 pb-3'>{t('identity.ourValues')}</h2>
          <CardCarousel values={values} />
          <div className='container-fluid px-0 pb-2' style={{ display: valuesVisible ? 'block' : 'none' }}>
            {values.map((value, index) => (
              <div className='py-4 d-flex flex-column text-center value-container' key={index}>
                <h3 className='regular-title'>{value.title}</h3>
                <p className='text-white light-text mb-0'>{value.content}</p>
              </div>
            ))}
          </div>
          <div className='mb-4 px-4 py-3 regular-text toggle-button' onClick={toggleValuesVisibility}>
            {valuesVisible ? t('identity.seeLess') : t('identity.seeMore')}
          </div>
        </div>
      :
        <animated.div className='container-fluid d-flex flex-column justify-content-evenly align-items-center gap-2' ref={ref} style={fromBottom}>
          <h2 className='text-white bold-title text-center fs-1 mb-0 pb-3'>{t('identity.ourValues')}</h2>
          <CardCarousel values={values} />
          <div className='container-fluid px-0 pb-2' style={{ display: valuesVisible ? 'block' : 'none' }}>
            {values.map((value, index) => (
              <div className='py-4 d-flex flex-column text-center value-container' key={index}>
                <h3 className='regular-title'>{value.title}</h3>
                <p className='text-white light-text mb-0'>{value.content}</p>
              </div>
            ))}
          </div>
          <div className='mb-4 px-4 py-3 regular-text toggle-button' onClick={toggleValuesVisibility}>
            {valuesVisible ? t('identity.seeLess') : t('identity.seeMore')}
          </div>
        </animated.div>
      }
    </div>
  );
};

export default Identity;