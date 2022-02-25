import React, { useState, useEffect } from 'react';

import { Link } from 'react-scroll';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            PixelBaras
            
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>

            <li className='nav-item'>
              <Link
                to='about'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                About
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='portfolio'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Collection
              </Link>
            </li>

            <li>
              <Link
                to='roadmap'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Roadmap
              </Link>
            </li>
            <li>
              <Link
                to='faq'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                FAQ
              </Link>
            </li>
          </ul>
        
        </div>
      </nav>
    </>
  );
}

export default Navbar;