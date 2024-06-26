import { Link } from 'react-router-dom';
import SocialLink from './SocialLink';
const NavigationLink = () => {
  return (
    <div className="wrapper-nav-center">
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
        <SocialLink />
        <button type="button" className="btn-contact">
          <span> Let's contact</span>
        </button>
      </div>
    </div>
  );
};

export default NavigationLink;
