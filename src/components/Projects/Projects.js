import ProjectCard from './ProjectCard';

import projImg2 from '../../assets/img/project-img2.png';
import projImg3 from '../../assets/img/project-img3.png';
import '../Projects/style.css';
const Projects = () => {
  const projects = [
    {
      title: 'Business Startup',
      description: 'Design & Development',
      imgUrl: projImg2,
    },
    {
      title: 'Business Startup',
      description: 'Design & Development',
      imgUrl: projImg2,
    },
    {
      title: 'Business Startup',
      description: 'Design & Development',
      imgUrl: projImg3,
    },
    {
      title: 'Business Startup',
      description: 'Design & Development',
      imgUrl: projImg3,
    },
    {
      title: 'Business Startup',
      description: 'Design & Development',
      imgUrl: projImg2,
    },
    {
      title: 'Business Startup',
      description: 'Design & Development',
      imgUrl: projImg3,
    },
  ];
  return (
    <section className="project" id="project">
      <div className="container">
        <div className="wrapper-content">
          <div className="project__titel">
            <h2>Projects</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s.
            </p>
          </div>

          <ul>
            <li className="item-one">
              <a href='/'>Page 1</a>
            </li>
            <li className="item-two">
              <a href='/'>Page 2</a>
            </li>
            <li className="item-three">
              <a href='/'>Page 3</a>
            </li>
          </ul>

          <div className="project__dashboard">
            {projects.map((project, index) => {
              return <ProjectCard key={index} {...project} />;
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
