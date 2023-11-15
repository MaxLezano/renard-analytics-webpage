import React, { useState } from 'react';
import Button from '../button/Button';
import Input from '../input/Input';
import Textarea from '../textarea/Textarea';
import Alerts from '../alert/Alerts';
import './contactCard.css';
import { useTranslation } from 'react-i18next';
import axios from 'axios';

function ContactCard({onClick}) {
  const [t] = useTranslation('global');
  const [formData, setFormData] = useState({
    name: '',
    subject: '',
    message: '',
  });
  const [emailStatus, setEmailStatus] = useState(false);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/send-email', formData);
      setEmailStatus(true);
      setFormData({
        name: '',
        subject: '',
        message: '',
      });
    } catch (error) {
      setEmailStatus(false);
    }
  };
  
  return (
    <div className='modal fade contact-cont' id="contactModal" aria-labelledby="hireModalLabel" aria-hidden="true">
      <div className='modal-dialog my-0'>
        <div className='modal-content shadow-lg border-0'>
          <div className='modal-header border-0 flex-column' id="hireModalLabel">
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={onClick} id='closeModalBtn'></button>
            <p className='contact-subtitle regular-text'>{t('contactCard.hireSubtitle')}</p>
            <h1 className='title-contact-blue bold-text'>{t('contactCard.titleContactBlue')}</h1>
            <h1 className='title-contact-orange bold-text'>{t('contactCard.titleContactOrange')}</h1>
            <p className='container col-12 col-lg-9 px-0 desc-contact light-text'>
              {t('contactCard.descContactStart')}
              <b className='bold-text desc-contact'>
                {t('contactCard.renardMail')}
              </b>
              {t('contactCard.descContactEnd')}
            </p>
          </div>
          {/* <form className='modal-body pb-5 pt-0 d-flex flex-column align-items-center' onSubmit={handleSubmit}>
            <Input
              typeInput="text"
              classNameSpan={`light-italic-text ${formData.name.trim().length === 0 ? '' : ' top'}`}
              labelText={t('contactCard.placeHoldName')}
              nameInput="name"
              onChange={handleInputChange}
              inputValue={formData.name}
            />
            <Input
              typeInput="text"
              classNameSpan={`light-italic-text ${formData.subject.trim().length === 0 ? '' : ' top'}`}
              labelText={t('contactCard.placeHoldSubject')}
              nameInput="subject"
              onChange={handleInputChange}
              inputValue={formData.subject}
            />
            <Textarea
              classNameSpan={`light-italic-text ${formData.message.trim().length === 0 ? '' : ' top'}`}
              descriptionTextarea={t('contactCard.placeHoldBox')}
              nameTextarea="message"
              onChange={handleInputChange}
              textareaValue={formData.message}
            />
            <Button description={t('contactCard.buttonForm')} className={'mt-5 py-2 col-4 regular-text btn-send'} type="submit" />
          </form> */}
        </div>
      </div>
      <Alerts open={emailStatus} severity={emailStatus? 'success' : 'error'} />
    </div>
  );
}

export default ContactCard;