// import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../NavBar/style.css';

import navIcon1 from '../../assets/img/nav-icon1.svg';
import navIcon2 from '../../assets/img/nav-icon2.svg';
import navIcon3 from '../../assets/img/nav-icon3.svg';

const NavBar = () => {
  return (
    <nav className="nav">
      <div className="container">
        <div className="wrapper-nav-center">
          <Link to="/" className="nav-logo">
            <strong>Radion Kuchernuk</strong>
          </Link>
          <div className="wrapper-nav">
            <ul className="nav-list">
              <li className="nav-list__item">
                <Link className="nav-list__item-link" to="/home">
                  Home
                </Link>
              </li>
              <li className="nav-list__item">
                <Link className="nav-list__item-link" to="project">
                  Project
                </Link>
              </li>
              <li className="nav-list__item">
                <Link className="nav-list__item-link" to="/skills">
                  Skills
                </Link>
              </li>
            </ul>
            <div className="social-icon">
              <a href="#">
                <img src={navIcon1} alt="" />
              </a>
              <a href="#">
                <img src={navIcon2} alt="" />
              </a>
              <a href="#">
                <img src={navIcon3} alt="" />
              </a>
            </div>
            <button type="button" className="btn-contact">
              <span> Let's contact</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
