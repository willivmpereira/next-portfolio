import { ProjectsContent, Teste } from './style';
import { ProjectItem } from './ProjectItem';
import { PROJECTS } from '../../constants';

import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import { useEffect } from 'react';

interface IProjects {
  slug: string;
  title: string;
  description: string;
  image:string;
  type: string;
  tags: string[];
}

interface ProjectsProps {
  projects: IProjects[];
}

export const Projects = ({ projects }: ProjectsProps) => {
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const components = document.querySelectorAll('#oi');
    const container: HTMLElement = document.querySelector('#teste');

    gsap.to(components, {
      xPercent: -100 * (components.length - 1),
      ease: 'none',
      scrollTrigger: {
        trigger: container,
        pin: true,
        scrub: 1,
        snap: 1 / (components.length - 1),
        end: () => '+=' + container.offsetWidth
      }
    });
  }, []);

  return (
    <>
      <ProjectsContent>
          <div id="teste">
              {projects.map(item => (
                <div id="oi" key={item.slug}>
                  <div className="container">
                  <ProjectItem
                  type={item.type}
                  title={item.title}
                  description={item.description}
                  image={item.image}
                  tags={item.tags}
                  slug={item.type}
                />
                  </div>
                </div>
              ))}
          </div>
      </ProjectsContent>

      {/* <Teste>
      <div id='teste'>
        <div id="oi" className='one'>
          <img src="https://img.freepik.com/vetores-gratis/pagina-inicial-do-web-design-dos-desenhos-animados_52683-70880.jpg?w=2000" alt="" />
        </div>
        <div id="oi" className='two'>
          <img src="https://img.freepik.com/vetores-gratis/pagina-inicial-do-web-design-dos-desenhos-animados_52683-70880.jpg?w=2000" alt="" />
        </div>
        <div id="oi" className='three'>
          <img src="https://img.freepik.com/vetores-gratis/pagina-inicial-do-web-design-dos-desenhos-animados_52683-70880.jpg?w=2000" alt="" />
        </div>
      </div>
    </Teste> */}
    </>
  );
};
