import React from 'react';
import './index.scss';
import Loader from 'react-loaders';


const Contact = () => {
  return (
    <>
    <div className='container contact-page'>
        <div className="text-zone">
          <h1>Workie Contact</h1>
        
        <div className='contact-form'>
            <form>
              <ul>
                
                    <li>
                  <input
                    className='li'
                    type="text"
                      name='name'
                      placeholder='Name'
                      required />
                    </li>
                    <li>
                  <input
                    className='li'
                    type="email"
                      name='email'
                      placeholder='Email'
                      required />
                    </li>
                
                
                    <li>
                  <input
                    className='li'
                    type="text"
                      name='subject'
                      placeholder='Subject'
                      required />
                    </li>
                
                
                    <li>
                    <textarea 
                      name='message'
                      placeholder='Message'
                      required />
                    </li>
                    <li>
                      <input type="submit" className="flat-button" value="SEND" />
                    </li>
                
          
              </ul>
            </form>
          </div>
          </div>
      </div>
      <Loader type='ball-rotate' />
      </>
  )
}

export default Contact