import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../NavBar/style.css';
import NavigationLink from './NavigationLink';
import { ReactComponent as MobileMenu } from '../../assets/img/burger-menu-svgrepo-com.svg';

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
        <div className="wrapper-modile-menu-logo-btnClose">
          <a className="nav-logo">
            <strong>Radion Kuchernuk</strong>
          </a>

          <nav className={` nav ${isOpen ? 'active' : ''}`}>
            <NavigationLink />
            <button
              type="button="
              className="nav__btn-mobile-menu--close"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              close
            </button>
          </nav>

          <button
            type="button"
            className="nav__btn-mobile-menu--open"
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >
            <MobileMenu className="icon-btn-menu" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
