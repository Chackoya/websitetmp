import React from 'react';
import './Footer.css';
//import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-containerv2'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Follow us!
        </p>

      </section>
    
      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
            <Link to='/' className='social-logo'>
            PIXELBARAS

            </Link>
          </div>
          
          <div className='social-icons'>
            <Link
              className='social-icon-link twitter'
              to={{pathname:"https://twitter.com/"}}
              target='_blank'
              aria-label='Twitter'
            >
              <i className='fab fa-twitter' />
            </Link>
            <Link
              className='social-icon-link discord'
              to={{pathname:"https://discord.com/"}}
              target='_blank'
              aria-label='Discord'
            >
              <i className='fab fa-discord' />
            </Link>

            <Link
              className='social-icon-link discord'
              to={{pathname:"https://telegram.com/"}}
              target='_blank'
              aria-label='Telegram'
            >
              <i className='fab fa-telegram' />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
