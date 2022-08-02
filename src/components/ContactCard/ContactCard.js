import React from 'react'
import Button from '../Button/Button';
import Input from '../Input/Input';
import Textarea from '../Textarea/Textarea';
import './ContactCard.css';
import { useTranslation } from 'react-i18next';

function ContactCard() {
  const [t] = useTranslation('global');
  return (
    <div className='modal fade contactCont' id="hireModal" aria-labelledby="hireModalLabel" aria-hidden="true">
      <div className='modal-dialog'>
        <div className='modal-content shadow-lg border-0'>
          <div className='modal-header border-0 flex-column' id="hireModalLabel">
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            <p className='hireSubtitle'>{t('contactCard.hireSubtitle')}</p>
            <h1 className='titleContact1'>{t('contactCard.titleContact1')}</h1>
            <h1 className='titleContact2'>{t('contactCard.titleContact2')}</h1>
            <p className='container col-12 col-lg-9 px-0 descContact'>{t('contactCard.descContact')}</p>
          </div>
          <form className='modal-body pb-4 d-flex flex-column align-items-center'>
            <Input typeInput="text" classNameSpan='fst-italic' labelText={t('contactCard.placeHoldName')} />
            <Input typeInput="text" classNameSpan='fst-italic' labelText={t('contactCard.placeHoldSubject')} />
            <Textarea classNameSpan='fst-italic' descriptionTextarea={t('contactCard.placeHoldBox')}/>
            <Button description={t('contactCard.buttonForm')} className={'btn btn-danger mt-5 py-2 col-4'} />
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactCard;