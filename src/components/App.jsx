import NavBar from './NavBar/Header';
import Hero from './Hero/Hero';
import Skills from './Skills/ Skills';
import Projects from './Projects/Projects';
import Project from './/../pages/Project';
import Feedback from './Contact/Feedback';
import Footer from './Footer/Footer';

import ScrollToTop from 'utils/ScrollToTop';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export const App = () => {
   return (
      <div className='page'>
         <Router>
            <ScrollToTop />
            <NavBar />

            <Routes>
               <Route path="/home" element={<Hero />} />
               <Route path="/skills" element={<Skills />} />
               <Route path="/projects" element={<Projects />} />
               <Route path="/project/:id" element={<Project />} />
               <Route path="/feedback" element={<Feedback />} />
            </Routes>

            <Footer />
         </Router>
      </div>
   );
};
