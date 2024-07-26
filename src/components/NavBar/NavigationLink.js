import { useState } from 'react';
import SocialLink from './SocialLink';

function NavigationLink(props) {
   const [activelink, setActiveLink] = useState('home');
   console.log(props);
   return (
      <>
         <ul className="nav-list">
            <li className="nav-list__item">
               <a
                  href="#home"
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
               </a>
            </li>
            <li className="nav-list__item">
               <a
                  href="#project"
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
               </a>
            </li>
            <li className="nav-list__item">
               <a
                  href="#skills"
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
               </a>
            </li>
         </ul>
         <SocialLink />
         <button type="button" className="btn-contact">
            <span> Let's contact</span>
         </button>
      </>
   );
}

export default NavigationLink;
