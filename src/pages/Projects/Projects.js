import { NavLink } from 'react-router-dom';

import ProjectCard from '../../components/PorjectCard/ProjectCard';
import projectsList from '../../helpers/projectList';

import '../Projects/style.css';
const Projects = () => {
   return (
      <section className="projects" id="project">
         <div className="container">
            <div className="wrapper-content">
               <div className="project__titel">
                  <h2>Projects</h2>
                  <p>
                     Projects. This section showcases all my projects. Each
                     project card includes a brief description and title. Click
                     on the card to view the project in detail.
                  </p>
               </div>

               <ul className="list-links-page-project">
                  <li className="item-one">
                     <a
                        className="list-links-page-project__link"
                        data-link="Page 1"
                        href="/"
                     >
                        Page 1
                     </a>
                  </li>
                  <li className="item-two">
                     <a
                        className="list-links-page-project__link"
                        data-link="Page 2"
                        href="/"
                     >
                        Page 2
                     </a>
                  </li>
                  <li className="item-three">
                     <a
                        className="list-links-page-project__link"
                        data-link="Page 3"
                        href="/"
                     >
                        Page 3
                     </a>
                  </li>
               </ul>

               <div className="project__dashboard">
                  {projectsList.map((project, index) => {
                     return (
                        <NavLink key={project.id} to={`/project/${index}`}>
                           <ProjectCard {...project} />
                        </NavLink>
                     );
                  })}
               </div>
            </div>
         </div>
      </section>
   );
};

export default Projects;
