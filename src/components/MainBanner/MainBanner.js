import React from 'react';
import './MainBanner.css';
// import Button from '../Button/Button';

function MainBanner() {
	return (
		<div className='bgImage'>
			<div className='container-fluid bgBlue'>
				<div className='container col-10 contBanner'>
					<span className='subtitleBanner'>Estamos construyendo el futuro del deporte.</span>
					<div className='titles'>
						<h1 className='mt-3 titleBanner'>Acompañamos</h1>
						<div className='boxTitle'>
							<h1 className='px-3 titleBannerPasion'>A la pasión</h1>
						</div>
					</div>
				</div>
			</div>
			{/* <Button /> */}
		</div>
	)
}

export default MainBanner;