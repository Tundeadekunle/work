import React from 'react';
import './index.scss';
import Loader from 'react-loaders';
import workspace from '../../assets/images/workspace.png';

const Pricing = () => {
  return (
    <>
    <div className='container pricing-page'>
      <div className="text-zone">
        <h1>Workie Pricing</h1>
        <p>Every package comes with it affordable price that is worth it at Workie. Starting from our basic package to the premium package you're going to like it.</p>
      </div>

      <div className="logo-zone">
        <img src={workspace} alt="image" className='pricing-logo' />
      </div>
      </div>
      <Loader type='ball-rotate' />

      </>
  )
}

export default Pricing