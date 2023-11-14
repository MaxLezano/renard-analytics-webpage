import React, { useEffect } from 'react';
import './input.css';

function Input({ classNameInput, classNameSpan, nameInput, typeInput, idInput, labelText, onChange, inputValue }) {
  
  useEffect(() => {
    const inputSelector = document.querySelectorAll('#inputSelector');
    
    inputSelector.forEach(element => {
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
    <div className='cont-input col-10 pt-1'>
      <label>
        <span id='inputSelector' className={`${classNameSpan}`}>{labelText}</span>
        <input className={classNameInput} type={typeInput} name={nameInput} id={idInput} onChange={onChange} value={inputValue} />
      </label>
    </div>
  );
}

export default Input;