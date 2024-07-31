import navIcon1 from '../../assets/img/nav-icon1.svg';
import navIcon2 from '../../assets/img/nav-icon2.svg';
import navIcon3 from '../../assets/img/nav-icon3.svg';
import '../Footer/style.css';

const Footer = () => {
   return (
      <footer className="footer">
         <div className="container">
            <div className='footer__align-items'>
               <a href="/" className="nav-logo">
                  <strong>Radion Kuchernuk</strong>
               </a>
               <div className="social-icon">
                  <a href="https://ua.linkedin.com/">
                     <img src={navIcon1} alt="link-linkedin" />
                  </a>
                  <a href="https://x.com">
                     <img src={navIcon2} alt="link-x" />
                  </a>
                  <a href="https://www.instagram.com/">
                     <img src={navIcon3} alt="link-instagram" />
                  </a>
               </div>
            </div>
         </div>
      </footer>
   );
};

export default Footer;
