import React from 'react';
import './mainBanner.css';
import { useTranslation } from 'react-i18next';

import { useSpring, animated } from 'react-spring';
import { useInView } from 'react-intersection-observer';
import { useMediaQuery } from '@react-hook/media-query';

function MainBanner() {
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

	return (
		<div className='main-banner' id='mainBanner'>
      {isNarrowScreen?
        <div className='container col-10 cont-banner'>
          <span className='subtitle-banner regular-text'>{t('mainBanner.subtitleBanner')}</span>
          <h1 className='mt-3 title-banner bold-text'>{t('mainBanner.titleBanner')}</h1>
          <h1 className='px-3 title-banner-pasion bold-text'>{t('mainBanner.titleBannerPasion')}</h1>
          <div>
            <a className='regular-text btn-our-products' href='#solutions'>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                {t('mainBanner.ourProducts')}
            </a>
          </div>
        </div>
      :
        <animated.div className='container col-10 cont-banner' ref={ref} style={fromTop}>
          <span className='subtitle-banner regular-text'>{t('mainBanner.subtitleBanner')}</span>
          <h1 className='mt-3 title-banner bold-text'>{t('mainBanner.titleBanner')}</h1>
          <h1 className='px-3 title-banner-pasion bold-text'>{t('mainBanner.titleBannerPasion')}</h1>
          <div>
            <a className='regular-text btn-our-products' href='#solutions'>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                {t('mainBanner.ourProducts')}
            </a>
          </div>
        </animated.div>
      }
		</div>
	)
}

export default MainBanner;