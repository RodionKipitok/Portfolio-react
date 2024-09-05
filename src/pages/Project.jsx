import { useParams } from 'react-router-dom';

import projectList from '../helpers/projectList';

import '../pages/styles.css';

function Project() {
   const { id } = useParams();
   const project = projectList[id];

   const {
      imgUrl,
      linkGitHubPage,
      linkCodeGitHub,
      technologies,
      title,
   } = project;

   return (
      <section className="section-project">
         <div className="container-project">
            <div className="project-detalis">
               <h1 className="projects__headline">{title}</h1>
               <img
                  className="project-detalis__cover"
                  src={imgUrl}
                  alt={title}
               />
               <div className="project-ditalis-disc">
                  {technologies.map(item => (
                     <p>{item}</p>
                  ))}
               </div>
               <div className="wrapper-link">
                  <a href={linkCodeGitHub} className="btn-outline">
                     <img
                        className="btn-outline-img"
                        src="https://img.icons8.com/nolan/64/github.png"
                        alt="github"
                     />
                     GitHub repo
                  </a>
                  <a href={linkGitHubPage} className="btn-outline">
                     <img
                        className="btn-outline-img"
                        src="https://img.icons8.com/color/48/domain--v1.png"
                        alt="domain--v1"
                     />
                     GitHub page
                  </a>
               </div>
            </div>
         </div>
      </section>
   );
}

export default Project;

