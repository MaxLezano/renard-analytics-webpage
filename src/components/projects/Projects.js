import React from 'react';
import { useTranslation } from 'react-i18next';
import './projects.css';

import { useSpring, animated } from 'react-spring';
import { useInView } from 'react-intersection-observer';
import { useMediaQuery } from '@react-hook/media-query';

const Projects = () => {
  const [t] = useTranslation('global');

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

  const projects = [
    {
      title: t('projects.pipeline'),
      desc: t('projects.pipelineDesc')
    },
    {
      title: t('projects.superset'),
      desc: t('projects.supersetDesc')
    },
    {
      title: t('projects.reports'),
      desc: t('projects.reportsDesc')
    },
    {
      title: t('projects.videoAnalyst'),
      desc: t('projects.videoAnalystDesc')
    },
  ];

  return (
    <div className='products' id='products'>
      {isNarrowScreen?
        <h1 className='text-white bold-title text-center p-0 m-0'>
          {t('projects.developed')}
        </h1>
      :
        <animated.h1 className='text-white bold-title text-center p-0 m-0' style={fromTop} ref={ref}>
          {t('projects.developed')}
        </animated.h1>
      }
      {isNarrowScreen?
        <div className='col-10 col-lg-8 products-container'>
            {projects.map((project, index) => (
              <div className='container-product-item' key={index}>
                <div className='product-item'>
                  <h3 className='regular-title'>{project.title}</h3>
                  <p className='m-0 light-text'>{project.desc}</p>
                </div>
              </div>
            ))}
        </div>
      :
        <animated.div className='col-10 col-lg-8 products-container' style={fromBottom} ref={ref}>
            {projects.map((project, index) => (
              <div className='container-product-item' key={index}>
                <div className='product-item'>
                  <h3 className='regular-title'>{project.title}</h3>
                  <p className='m-0 light-text'>{project.desc}</p>
                </div>
              </div>
            ))}
        </animated.div>
      }
    </div>
  );
}

export default Projects;