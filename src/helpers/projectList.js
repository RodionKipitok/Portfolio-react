import freelancerLandingPage from '../assets/project/Portfolio.png';
import webStudio from '../assets/project/Web-Studio.png';
import Store from '../assets/project/Store.png';
import projImg2 from '../assets/img/project-img2.png';
import projImg3 from '../assets/img/project-img3.png';

const projects = [
   {
      id: 1,
      title: 'Freelancer landing page',
      description: 'Development',
      imgUrl: freelancerLandingPage,
      technologies: ['CSS3', 'HTML5', 'JavaScript'],
      linkCodeGitHub: 'https://github.com/RodionKipitok/Portfolio',
      linkGitHubPage: 'https://rodionkipitok.github.io/Portfolio/index.html',
   },
   {
      id: 2,
      title: 'Web Studio landing page',
      description: 'Development',
      imgUrl: webStudio,
      technologies: ['CSS3', 'HTML5', 'JavaScript'],
      linkCodeGitHub: 'https://github.com/RodionKipitok/Web-Studio',
      linkGitHubPage: 'https://rodionkipitok.github.io/Web-Studio/',
   },
   {
      id: 3,
      title: 'Store',
      description: 'Development',
      imgUrl: Store,
      technologies: ['REACT', 'REDUX', 'REACT-ROUTER-DOM', 'AXIOS'],
      linkCodeGitHub: 'https://github.com/RodionKipitok/Store',
      linkGitHubPage: 'https://rodionkipitok.github.io/Store/',
   },
   {
      id: 4,
      title: 'Business Startup',
      description: 'Design & Development',
      imgUrl: projImg3,
      technologies: [],
      linkCodeGitHub: '',
      linkGitHubPage: '',
   },
   {
      id: 5,
      title: 'Business Startup',
      description: 'Design & Development',
      imgUrl: projImg2,
      technologies: [],
      linkCodeGitHub: '',
      linkGitHubPage: '',
   },
   {
      id: 6,
      title: 'Business Startup',
      description: 'Design & Development',
      imgUrl: projImg3,
      technologies: [],
      linkCodeGitHub: '',
      linkGitHubPage: '',
   },
];

export default projects;
