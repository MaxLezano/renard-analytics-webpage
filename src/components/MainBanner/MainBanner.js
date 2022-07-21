import React from 'react';
import Button from '../Button';
import './MainBanner.css';

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
						<Button description={"Nuestros Productos"} className={"btn btn-light py-3 px-4 mt-5 ms-5 fontButton"} />
					</div>
				</div>
			</div>
		</div>
	)
}

export default MainBanner;