import React from 'react';
import './Form.css';
import image from './../../../images/img-9.svg'

const FormSuccess = () => {
  return (
    <div className='form-content-right'>
      <h1 className='form-success'>We have received your request!</h1>
      <img className='form-img-2' src={image} alt='success-image' />
    </div>
  );
};

export default FormSuccess;