import navIcon1 from '../../assets/img/nav-icon1.svg';
import navIcon2 from '../../assets/img/nav-icon2.svg';
import navIcon3 from '../../assets/img/nav-icon3.svg';
const SocialLink = () => {
  return (
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
  );
};

export default SocialLink;
