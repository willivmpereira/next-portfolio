import { ABOUT } from '../../constants/about';
import { AboutUs } from './styles';
import Imagem from 'next/image';
import MyPhoto from '../../assets/img/foto60.jpg';
import TagsCanvas from 'react-tags-canvas';

export const About = (props) => {
  return (
    <AboutUs>
      <Imagem src={MyPhoto} alt="Picture of the author"
      width="350px"
      height="300px" layout="responsive" />
      <div className="container">
        <div className="display">
          <div className="about__title">
            <h4>Let's Connect</h4>
            <h1>Me, Myself & I</h1>
            <div className="blob"></div>
          </div>
          <div className="about__description">
            <p dangerouslySetInnerHTML={{ __html: ABOUT.description }}></p>
          </div>
          <div className="stroke">
            <h2>william</h2>
          </div>
        </div>
      </div>
    </AboutUs>
  );
};
