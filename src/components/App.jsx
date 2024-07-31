import NavBar from './NavBar/Header';
import Hero from './Hero/Hero';
import Skills from './Skills/ Skills';
import Projects from './Projects/Projects';
import Feedback from './Contact/Contact';

export const App = () => {
   return (
      <div>
         <NavBar />
         <Hero />
         <Skills />
         <Projects />
         <Feedback />
      </div>
   );
};
