import { useState, useEffect } from 'react';
import axios from '../../../assets/icon/axios-plain-wordmark.svg';
import bash from '../../../assets/icon/bash-original.svg';
import css3 from '../../../assets/icon/css3-original-wordmark.svg';
import html5 from '../../../assets/icon/html5-original-wordmark.svg';
import javaScript from '../../../assets/icon/javascript-original.svg';
import materialui from '../../../assets/icon/materialui-original.svg';
import react from '../../../assets/icon/react-original-wordmark.svg';
import npm from '../../../assets/icon/npm-original-wordmark.svg';
import redux from '../../../assets/icon/redux-original.svg';
import Arrow1 from '../../../assets/img/arrow1.svg';
import Arrow2 from '../../../assets/img/arrow2.svg';
const initialSkills = [
  {
    id: 1,
    name: 'HTML5',
    url: html5,
  },
  {
    id: 2,
    name: 'CSS3',

    url: css3,
  },
  {
    id: 3,
    name: 'JavaScript',

    url: javaScript,
  },
  {
    id: 4,
    name: 'REACT',

    url: react,
  },
  {
    id: 5,
    name: 'AXIUS',
    url: axios,
  },
  {
    id: 6,
    name: 'Materialui',
    url: materialui,
  },
  {
    id: 7,
    name: 'Npm',
    url: npm,
  },
  {
    id: 8,
    name: 'Redux',
    url: redux,
  },
  {
    id: 9,
    name: 'bush',
    url: bash,
  },
];

const Slider = () => {
  const [skills] = useState(initialSkills);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const lastIndex = skills.length - 1;
    if (currentIndex < 0) {
      setCurrentIndex(lastIndex);
    }
    if (currentIndex > lastIndex) {
      setCurrentIndex(0);
    }
  }, [currentIndex, skills]);
  // useEffect(() => {
  //   let slide = setInterval(
  //     () => setCurrentIndex(prevState => prevState + 1),
  //     5000
  //   );

  //   return () => {
  //     clearInterval(slide);
  //   };
  // }, [currentIndex]);

  return (
    <>
      <div className="slider-container">
        <div className="slider__track">
          {skills.map((skill, slideIndex) => {
            let position = 'nextSlide';
            if (slideIndex === currentIndex) {
              position = 'activeSlide';
            }

            if (
              slideIndex === currentIndex - 1 ||
              (currentIndex === 0 && slideIndex === skills.length - 1)
            ) {
              position = 'lastSlide';
            }

            return (
              <article key={skill.id} className={position}>
                <img className="slide-img" src={skill.url} alt={skill.name} />
                <h4 className="text">{skill.name}</h4>
              </article>
            );
          })}
          <button
            type="button"
            className="slider__btn-prev"
            onClick={() => setCurrentIndex(prevState => prevState - 1)}
          >
            <img src={Arrow1} alt="" />
          </button>
          <button
            type="button"
            className="slider__btn-next"
            onClick={() => setCurrentIndex(prevState => prevState + 1)}
          >
            <img src={Arrow2} alt="" />
          </button>
        </div>
      </div>
    </>
  );
};

export default Slider;
