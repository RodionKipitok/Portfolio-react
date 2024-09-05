import { useState } from 'react';
import { NavLink } from 'react-router-dom';

import SocialLink from './SocialLink';

function NavigationLink(props) {
   const [activelink, setActiveLink] = useState('home');

   return (
      <>
         <ul className="nav-list">
            <li className="nav-list__item">
               <NavLink
                  to="home"
                  className={
                     activelink === 'home'
                        ? 'nav-list__item-link active-link'
                        : 'nav-list__item-link'
                  }
                  onClick={() => {
                     setActiveLink('home');
                     props.setIsOpenMenuMobile(!props.isOpen);
                  }}
               >
                  Home
               </NavLink>
            </li>
            <li className="nav-list__item">
               <NavLink
                  to="projects"
                  className={
                     activelink === 'project'
                        ? 'nav-list__item-link active-link'
                        : 'nav-list__item-link'
                  }
                  onClick={() => {
                     setActiveLink('project');
                     props.setIsOpenMenuMobile(!props.isOpen);
                  }}
               >
                  Project
               </NavLink>
            </li>
            <li className="nav-list__item">
               <NavLink
                  to="skills"
                  className={
                     activelink === 'skills'
                        ? 'nav-list__item-link active-link'
                        : 'nav-list__item-link'
                  }
                  onClick={() => {
                     setActiveLink('skills');
                     props.setIsOpenMenuMobile(!props.isOpen);
                  }}
               >
                  Skills
               </NavLink>
            </li>
         </ul>
         <SocialLink />
         <NavLink to="feedback" className="btn-contact">
            <span> Let's contact</span>
         </NavLink>
      </>
   );
}

export default NavigationLink;
