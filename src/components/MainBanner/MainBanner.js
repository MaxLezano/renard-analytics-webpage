import React from 'react';
import Button from '../../components/Button/Button';
import './MainBanner.css';
import { useTranslation } from 'react-i18next';

function MainBanner() {
	const [t] = useTranslation('global');

	return (
		<div className='bgImage'>
			<div className='container-fluid bgBlue'>
				<div className='container col-10 contBanner'>
					<span className='subtitleBanner'>{t('mainBanner.subtitleBanner')}</span>
					<div className='titles'>
						<h1 className='mt-3 titleBanner'>{t('mainBanner.titleBanner')}</h1>
						<div className='boxTitle'>
							<h1 className='px-3 titleBannerPasion'>{t('mainBanner.titleBannerPasion')}</h1>
						</div>
						<Button description={t('mainBanner.ourProducts')} className={"btn btn-light mt-5 fontButton"} />
					</div>
				</div>
			</div>
		</div>
	)
}

export default MainBanner;