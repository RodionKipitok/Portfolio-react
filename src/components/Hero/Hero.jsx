import { useState, useEffect, useCallback } from 'react';
import { useInView } from 'react-intersection-observer';
import './style.css';
import astronaut from '../../assets/img/header-img.svg';
const Hero = () => {
   const [loopNum, setLoopNum] = useState(0);
   const [isDeleting, setIsDeleting] = useState(false);

   const [text, setText] = useState('');
   const [delta, setDelta] = useState(300 - Math.random() * 100);
   const period = 2000;

   const { ref, inView } = useInView({
      threshold: 0.5,
   });

   console.log(inView);

   const tick = useCallback(() => {
      const toRotate = ['web developer'];
      const i = loopNum % toRotate.length;
      const fullText = toRotate[i];
      let updatedText = isDeleting
         ? fullText.substring(0, text.length - 1)
         : fullText.substring(0, text.length + 1);
      setText(updatedText);

      if (isDeleting) {
         setDelta(prevDelta => prevDelta / 2);
      }

      if (!isDeleting && updatedText === fullText) {
         setIsDeleting(true);
         setDelta(period);
      } else if (isDeleting && updatedText === '') {
         setIsDeleting(false);
         setLoopNum(loopNum + 1);
         setDelta(500);
      }
   }, [isDeleting, loopNum, text, period]);

   useEffect(() => {
      const ticker = setInterval(() => {
         tick();
      }, delta);

      return () => {
         clearInterval(ticker);
      };
   }, [delta, tick]);
   return (
      <section ref={ref} className="banner" id="home">
         <div className="container">
            <div className="align-items-center row">
               <div className="banner__title">
                  <span className="tagline">Welcome to my Portfolio</span>
                  <h1>
                     Hi! I'm Radion <span className="profession">{text}</span>
                  </h1>
                  <p>
                     This website provides my contact information, portfolio of
                     works, and a list of my skills and tools. You can leave me
                     a message through the contact form.
                  </p>
                  <button type="button">Let's contact</button>
               </div>
               <div
                  className={inView ? 'animate__zoomIn  animate__animated' : ''}
               >
                  <img src={astronaut} alt="astronaut" />
               </div>
            </div>
         </div>
      </section>
   );
};

export default Hero;
