import { useState, useEffect } from 'react';
import '../NavBar/style.css';
import NavigationLink from './NavigationLink';
import React from 'react';

const NavBar = () => {
   const [isOpen, setIsOpen] = useState(false);
   const [scrolled, setScrolled] = useState(false);

   useEffect(() => {
      const onScroll = () => {
         if (window.scrollY > 50) {
            setScrolled(true);
         } else {
            setScrolled(false);
         }
      };

      window.addEventListener('scroll', onScroll);

      return () => window.removeEventListener('scroll', onScroll);
   }, []);

   return (
      <header className={` header ${scrolled ? 'scrolled' : ''}`}>
         <div className="container">
            <div className="wrapper-position">
               <a href="/" className="nav-logo">
                  <strong>Radion Kuchernuk</strong>
               </a>
               <nav
                  className={`nav ${isOpen ? 'open' : ''} ${
                     isOpen ? 'scrolled' : ''
                  }`}
               >
                  <NavigationLink isOpen={isOpen} setIsOpenMenuMobile={setIsOpen} />
               </nav>
               <div className={`burger ${isOpen ? 'active' : ''}`}>
                  <button
                     className="burger-button"
                     type="button"
                     onClick={() => {
                        setIsOpen(!isOpen);
                     }}
                  >
                     <span className="burger-line"></span>
                     <span className="burger-line"></span>
                     <span className="burger-line"></span>
                  </button>
               </div>
            </div>
         </div>
      </header>
   );
};

export default NavBar;

// className={`nav ${isOpen ? 'open' : ''}`}

// className={`burger ${isOpen ? 'active' : ''}`}
