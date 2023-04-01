import React from 'react';
import { useRef, useState, useEffect, useContext } from 'react';

import './index.scss';
import Loader from 'react-loaders';
import business from '../../assets/images/business.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLinkedin,
  faGithub,
  faYoutube,
  faSkype,
} from '@fortawesome/free-brands-svg-icons';

const Home = () => {
  return (
  <>
    <div className='container home-page'>
      <div className="text-zone">
        <h1>At Workie we make your work easier</h1>
        <span>Integrate your work at Workie</span>
        <br />
        <span className='btns-span'>
          <button className='btn-1'>Start free trial</button>
          <button className='btn-2'>Get a demo</button>
        </span>
      </div>
      
        <div className="logo-zone">
          <img src={business} alt="Business" className='home-logo' />
        </div>

        
      </div>
      
      <Loader type='ball-rotate' />
      </>
  )
}

export default Home