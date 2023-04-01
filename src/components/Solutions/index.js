import React from 'react';
import './index.scss';
import Loader from 'react-loaders';
import peaceicon from '../../assets/images/peaceicon.png';

const Solutions = () => {
  return (
    <>
    <div className='container solutions-page'>
      <div className="text-zone">
        <h1>Workie Solutions</h1>
        <p>To every problems and challenges of your products and services we have suiting solutions. At Workie we provide soltions that gives you peace of mind.</p>
      </div>

      <div className="logo-zone">
        <img src={peaceicon} alt="image" className='solutions-logo' />
        </div>
      </div>
      <Loader type='ball-rotate' />
      </>
  )
}

export default Solutions