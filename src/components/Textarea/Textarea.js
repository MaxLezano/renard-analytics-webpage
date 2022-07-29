import React, { useEffect } from 'react';
import './Textarea.css';

function Textarea({ classNameSpan, descriptionTextarea, classNameTextarea, nameTextarea, idTextarea }) {

  useEffect(() => {
    const textareaSelector = document.querySelectorAll('#textareaSelector');
    
    textareaSelector.forEach(element => {
      element.nextElementSibling.onfocus = () => {
        element.className += ' top focus';
        element.parentNode.className = 'focus';
      };
      element.nextElementSibling.onblur = () => {
        element.nextElementSibling.value = element.nextElementSibling.value.trim();
        if (element.nextElementSibling.value.trim().length === 0) {
          element.className = classNameSpan;
        } else {
          element.className = `top ${classNameSpan}`;
        }
        element.parentNode.className = '';
      }
    });
  }, [classNameSpan]);

  return (
    <div className='cont-text-area col-10'>
      <label>
        <span id='textareaSelector' className={`${classNameSpan}`}>{descriptionTextarea}</span>
        <textarea className={classNameTextarea} name={nameTextarea} id={idTextarea} />
      </label>
    </div>
  );
}

export default Textarea;