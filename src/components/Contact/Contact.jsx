import { useInView } from 'react-intersection-observer';
import Form from './Form';
import man from '../../assets/img/contact-img.svg';
const Feedback = () => {
   const { ref, inView } = useInView({
      threshold: 0.5,
   });
   return (
      <>
         <section ref={ref} className="contact">
            <div className="container">
               <div className="contact__wrapper-img-and-form">
                  <div
                     className={`  ${
                        inView ? 'animate__zoomIn  animate__animated' : ''
                     }`}
                  >
                     <img src={man} alt="man" />
                  </div>
                  <div className="">
                     <h3 className="contact-heading">Get In Touch</h3>
                     <Form />
                  </div>
               </div>
            </div>
         </section>
      </>
   );
};

export default Feedback;
