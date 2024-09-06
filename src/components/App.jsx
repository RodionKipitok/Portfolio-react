import NavBar from './NavBar/Header';
import Hero from '../pages/Hero/Hero';
import Skills from '../pages/Skills/Skills';
import Projects from '../pages/Projects/Projects';
import Project from './/../pages/Project';
import Footer from './Footer/Footer';

import ScrollToTop from 'utils/ScrollToTop';

import { Routes, Route } from 'react-router-dom';

export const App = () => {
   return (
      <div className="page">
         <ScrollToTop />
         <NavBar />

         <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/home" element={<Hero />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/project/:id" element={<Project />} />
         </Routes>

         <Footer />
      </div>
   );
};
