import ProjectCard from './ProjectCard';
import projectImg from '../../assets/project/rodionkipitok.github.io_Portfolio_.png'
import projImg2 from '../../assets/img/project-img2.png';
import projImg3 from '../../assets/img/project-img3.png';
import '../Projects/style.css';
const Projects = () => {
   const projects = [
      {
         title: 'Freelancer landing page',
         description: 'Design & Development',
         imgUrl: projectImg,
      },
      {
         title: 'Business Startup',
         description: 'Development',
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
