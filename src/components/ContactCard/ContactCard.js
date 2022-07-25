import React from 'react'
import Button from '../Button/Button';
import './ContactCard.css';

function ContactCard() {
  return (
    <div className='container contactCont'>
      <div className='row'>
        <div className='container mb-5 col-12 col-lg-6'>
          <div>
            <p className='hireSubtitle'>Contactar</p>
            <h1 className='titleContact1'>Todas sus consultas son</h1>
            <h1 className='titleContact2'>bienvenidas!</h1>
            <p className='container col-12 col-lg-9 px-0 descContact'>
              Estamos a su disposición por cualquier consulta via correo electrónico a 
              <b> renardanalytics@gmail.com </b>
              o través de cualquiera de nuestras redes sociales.
            </p>
          </div>
          <form className='d-flex flex-column align-items-center'>
            <input type="text" className='mt-3 py-2 col-9 inputStyle' placeholder='Nombre y Apellido' />
            <input type="text" className='mt-3 py-2 col-9 inputStyle' placeholder='Asunto' />
            <textarea type="text" className='mt-3 py-2 col-9 inputStyle' placeholder='Escriba su mensaje aquí' />
            <Button description={'Enviar'} className={'btn btn-danger mt-5 py-2 col-2'} />
          </form>
        </div>
      </div>
    </div>
  )
}

export default ContactCard