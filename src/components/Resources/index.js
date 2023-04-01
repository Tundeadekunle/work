import React from 'react';
import Loader from 'react-loaders';
import './index.scss';
import projectmanager from '../../assets/images/projectmanager.png';

const Resources = () => {
  return (
    <>
    <div className='container resources-page'>
      <div className="text-zone">
        <h1>Workie Resources</h1>
        <p>At Workie we have modern tech tools and personels that are naturally tallented, hardworking and efficient to execute every task and deliver appropriately.</p>
      </div>

      <div className="logo-zone">
        <img src={projectmanager} alt="image" className='resources-logo' />
      </div>
      </div>
      <Loader type='ball-rotate' />
      </>
  )
}

export default Resources