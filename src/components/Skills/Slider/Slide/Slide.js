import SlideImage from './SlideImage';
import SlideTitle from './SlideTitle';
const Slide = ({ data: { url, title } }) => {
  return (
    <div>
      <SlideImage src={url} alt={title} />
      <SlideTitle title={title} />
    </div>
  );
};

export default Slide;
