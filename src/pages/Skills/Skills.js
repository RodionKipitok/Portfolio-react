import Slider from '../../components/Slider/Slider';
import '../Skills/style.css';
const Skills = () => {
   return (
      <section className="skills" id="skills">
         <div className="container">
            <h2 className="skills__title">Skills</h2>
            <Slider />
         </div>
      </section>
   );
};

export default Skills;
