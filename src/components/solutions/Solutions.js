import React, { useState } from 'react';
import GoBackArrow from '../../assets/images/go-back-arrow.webp';
import { useTranslation } from 'react-i18next';
import './solutions.css';

import { useSpring, animated } from 'react-spring';
import { useInView } from 'react-intersection-observer';
import { useMediaQuery } from '@react-hook/media-query';

const SolutionCard = ({ solution }) => {
  const [t] = useTranslation('global');
  const [isDescriptionVisible, setDescriptionVisible] = useState(false);

  const toggleDescription = () => {
    setDescriptionVisible(!isDescriptionVisible);
  };

  return (
    <div className='d-flex flex-column justify-content-center align-items-center solution-item'>
      <h4 className={`regular-title text-center solution-title ${isDescriptionVisible ? 'hidden' : ''}`}>{solution.title}</h4>
      <ul className={`m-0 p-0 solution-description ${isDescriptionVisible ? '' : 'hidden'}`}>
        <li className='light-text text-center text-black'>
          <p>{solution.fp}</p>
        </li>
        <div className='divider-container'>
          <div className='divider-solution'></div>
        </div>
        <li className='light-text text-center text-black'>
          <p>{solution.sp}</p>
        </li>
        <div className='divider-container'>
          <div className='divider-solution'></div>
        </div>
        <li className='light-text text-center text-black'>
          <p>{solution.tp}</p>
        </li>
      </ul>
      {isDescriptionVisible ? (
        <button className='btn bg-none border-0 text-center light-text fs-5 btn-solution' onClick={toggleDescription}>
          <img src={GoBackArrow} alt='Back Arrow' />
        </button>
      ) : (
        <button className='btn bg-none rounded-pill text-center light-text btn-solution' onClick={toggleDescription}>
          {t('solutions.seeMore')}
        </button>
      )}
    </div>
  );
};

const Solutions = () => {
  const [t] = useTranslation('global');
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

  const solutionsData = [
    {
      title: t('solutions.scouting'),
      fp: t('solutions.scoutingFp'),
      sp: t('solutions.scoutingSp'),
      tp: t('solutions.scoutingTp'),
    },
    {
      title: t('solutions.analysis'),
      fp: t('solutions.analysisFp'),
      sp: t('solutions.analysisSp'),
      tp: t('solutions.analysisTp'),
    },
    {
      title: t('solutions.improvement'),
      fp: t('solutions.improvementFp'),
      sp: t('solutions.improvementSp'),
      tp: t('solutions.improvementTp'),
    },
    {
      title: t('solutions.training'),
      fp: t('solutions.trainingFp'),
      sp: t('solutions.trainingSp'),
      tp: t('solutions.trainingTp'),
    },
    {
      title: t('solutions.kinesiology'),
      fp: t('solutions.kinesiologyFp'),
      sp: t('solutions.kinesiologySp'),
      tp: t('solutions.kinesiologyTp'),
    },
  ];

  return (
    <div className='d-flex flex-column justify-content-center align-items-center solutions' id='solutions'>
      <div className='col-lg-10 solutions-container'>
        {isNarrowScreen?
          <div className='d-flex flex-column justify-content-center align-items-center px-3'>
            <h1 className='text-white bold-title text-center p-0 m-0'>{t('solutions.solutionsTitle')}</h1>
            <p className='text-white extra-light-text text-center p-0 m-0'>{t('solutions.solutionsDesc')}</p>
          </div>
        :
          <animated.div className='d-flex flex-column justify-content-center align-items-center px-3' style={fromLeft} ref={ref}>
            <h1 className='text-white bold-title text-center p-0 m-0'>{t('solutions.solutionsTitle')}</h1>
            <p className='text-white extra-light-text text-center p-0 m-0'>{t('solutions.solutionsDesc')}</p>
          </animated.div>
        }
        {solutionsData.map((solution, index) => (
          isNarrowScreen?
            <div key={index}>
              <SolutionCard  solution={solution} />
            </div>
          :
            <animated.div key={index} style={index !== 2 ? fromRight : fromLeft} ref={ref}>
              <SolutionCard  solution={solution} />
            </animated.div>
        ))}
      </div>
    </div>
  );
};

export default Solutions;