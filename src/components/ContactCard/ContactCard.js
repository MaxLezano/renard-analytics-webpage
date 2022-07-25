import React from 'react'
import Button from '../Button/Button';
import './ContactCard.css';
import { useTranslation } from 'react-i18next';

function ContactCard() {
  const [t] = useTranslation('global');
  return (
    <div className='container contactCont'>
      <div className='row'>
        <div className='container mb-5 col-12 col-lg-6'>
          <div>
            <p className='hireSubtitle'>{t('contactCard.hireSubtitle')}</p>
            <h1 className='titleContact1'>{t('contactCard.titleContact1')}</h1>
            <h1 className='titleContact2'>{t('contactCard.titleContact2')}</h1>
            <p className='container col-12 col-lg-9 px-0 descContact'>{t('contactCard.descContact')}</p>
          </div>
          <form className='d-flex flex-column align-items-center'>
            <input type="text" className='mt-3 py-2 col-9 inputStyle' placeholder={t('contactCard.placeHoldName')} />
            <input type="text" className='mt-3 py-2 col-9 inputStyle' placeholder={t('contactCard.placeHoldSubject')} />
            <textarea type="text" className='mt-3 py-2 col-9 inputStyle' placeholder={t('contactCard.placeHoldBox')} />
            <Button description={t('contactCard.buttonForm')} className={'btn btn-danger mt-5 py-2 col-2'} />
          </form>
        </div>
      </div>
    </div>
  )
}

export default ContactCard