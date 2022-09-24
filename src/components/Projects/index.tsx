import { ProjectsContent, Teste } from './style';
import { ProjectItem } from './ProjectItem';
import { PROJECTS } from '../../constants';

import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import { useEffect } from 'react';

interface IProjects {
  slug: string;
  title: string;
  description: string[];
  id: string;
  image: string[];
  tags: string[];
  type: string;
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
                <div id="oi" key={item.id} >
                  <div className="container">
                  <ProjectItem
                  type={item.type}
                  title={item.title}
                  description={item.description}
                  image={item.image}
                  tags={item.tags}
                  slug={item.slug}
                  id={item.id}
                />
                  </div>
                </div>
              ))}
          </div>
      </ProjectsContent>
    </>
  );
};
