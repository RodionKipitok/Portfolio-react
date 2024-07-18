import { useState, useEffect ,useCallback } from 'react';
import './style.css';
import astronaut from '../../assets/img/header-img.svg';
const Hero = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = ['web developer'];
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 2000;

  

  const tick = useCallback( () => {
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
  }
)

useEffect(() => {
  const ticker = setInterval(() => {
    tick();
  }, delta);

  return () => {
    clearInterval(ticker);
  };
}, [delta, tick]);
  return (
    <section className="banner" id="home">
      <div className="container">
        <div className="aligh-items-center row">
          <div className="banner__title">
            <span className="tagline">Welcome to my Portfolio</span>
            <h1>
              Hi! I'm Radion <span>{text}</span>
            </h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
            <button type="button">Let's contact</button>
          </div>
          <div>
            <img src={astronaut} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
