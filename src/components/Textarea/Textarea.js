import React, { useEffect } from 'react';
import './textarea.css';

function Textarea({ classNameSpan, descriptionTextarea, classNameTextarea, nameTextarea, idTextarea, onChange, textareaValue }) {

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
    <div className='cont-text-area col-10 pt-1'>
      <label>
        <span id='textareaSelector' className={`${classNameSpan}`}>{descriptionTextarea}</span>
        <textarea className={classNameTextarea} name={nameTextarea} id={idTextarea} onChange={onChange} value={textareaValue} />
      </label>
    </div>
  );
}

export default Textarea;