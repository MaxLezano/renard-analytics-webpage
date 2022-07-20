import React from 'react';
import logoImage from '../../../assets/images/logo-white.png';

function Navbar() {
  return (
    <div className='container-fluid col-10 py-4'>
      <div className='row justify-content-between'>
        <img className='col-3' src={logoImage} alt="logo" />
        <div className='col-6 d-flex justify-content-end align-items-center'>
          <a className='text-decoration-none text-white p-3' href="/">¿Quienes Somos?</a>
          <a className='text-decoration-none text-white p-3' href="/">Blog</a>
          <button type="button" class="btn btn-warning my-3 ms-3">Contratar</button>
        </div>
      </div>
    </div>
  )
}

export default Navbar;