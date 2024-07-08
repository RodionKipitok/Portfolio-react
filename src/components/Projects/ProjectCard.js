import '../Projects/style.css';
const ProjectCard = ({ title, description, imgUrl }) => {
  return (
    <div className="proj-imgbx">
      <img src={imgUrl} />
      <div className="proj-txtx">
        <h4>{title}</h4>
        <span>{description}</span>
        <a></a>
      </div>
    </div>
  );
};

export default ProjectCard;
