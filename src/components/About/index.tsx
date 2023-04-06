import { ABOUT } from '../../constants/about';
import { AboutUs } from './styles';
import Imagem from 'next/image';
import MyPhoto from '../../assets/img/me.webp';
import TagsCanvas from 'react-tags-canvas';

export const About = () => {
  return (
    <AboutUs>
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
