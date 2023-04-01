import React from 'react';
import './index.scss';
import { Link, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import code from '../../assets/images/code.png';
import { useState } from 'react';
import {
  faHome,
  faUser,
  faEnvelope,
  faSuitcase,
  faBars,
  faClose,
} from '@fortawesome/free-solid-svg-icons'


const NavBar = () => {
  const [showNav, setShowNav] = useState(false);

  return (
    <div className='bar nav-bar'>
      <Link className='logo'
        to="/"
        onClick={() => setShowNav(false)}>
          <img src={code} alt="Logo" className='' />
          
      </Link>
      
      <nav  className={showNav ? 'mobile-show':''}>
      <NavLink 
          exact="true"
          activeclassname="active"
          to="/"
          onClick={() => setShowNav(false)}
         >
          Home
        </NavLink>
      
        <NavLink 
          activeclassname="active"
          className="resources-link"
          to="/resources"
          onClick={() => setShowNav(false)}
          >
          Resources
        </NavLink>
      
      <NavLink 
          activeclassname="active"
          className="solutions-link"
          to="/solutions"
          onClick={() => setShowNav(false)}
          >
          Solutions
      </NavLink>
      
      <NavLink 
          activeclassname="active"
          className="pricing-link"
          to="/pricing"
          onClick={() => setShowNav(false)}
          >
          Pricing
        </NavLink>

        <NavLink 
          activeclassname="active"
          className="contact-link"
          to="/contact"
          onClick={() => setShowNav(false)}
          >
          Contact
      </NavLink>
      </nav> 

      <div className='btns'>
      <NavLink className="btn"
       to="login">
      <button>Log in</button>
      </NavLink>

      <NavLink className="btn"
       to="signup">
      <button>Sign up</button>
      </NavLink>
      </div>

      <FontAwesomeIcon 
          onClick={() => setShowNav(true)}
          icon={faBars}
          color="#ffd700"
          size="3x"
          className='hamburger-icon' />
    </div>
  )
}

export default NavBar