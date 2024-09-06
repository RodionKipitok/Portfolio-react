import navIcon1 from '../../assets/img/nav-icon1.svg';
import navIcon2 from '../../assets/img/nav-icon2.svg';
import navIcon3 from '../../assets/img/nav-icon3.svg';
const SocialLink = () => {
   return (
      <div className="social-icon">
         <a href="https://www.linkedin.com/in/radion-kuchernyuk-b755b1206/">
            <img src={navIcon1} alt="link-linkedin" />
         </a>
         <a href="https://x.com/Rodion80158024">
            <img src={navIcon2} alt="link-x" />
         </a>
         <a href="https://www.instagram.com/">
            <img src={navIcon3} alt="link-instagram" />
         </a>
      </div>
   );
};

export default SocialLink;
