import { useEffect, useRef, useState } from 'react';
import { SectionContainer } from './styles';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { GalleryItems } from './GalleryItem';

export const Gallery = ({ projects }: any) => {
  console.log(projects);

  const [activeImage, setActiveImage] = useState(1);
  const ref = useRef(null);

  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    setTimeout(() => {
      const sections = gsap.utils.toArray('.gallery-item-wrapper');

      gsap.to(sections, {
        xPercent: -100 * (sections.length - 1),
        ease: 'none',
        scrollTrigger: {
          trigger: ref.current,
          start: 'top top',
          pin: true,
          scrub: 0.5,
          snap: 1 / (sections.length - 1),
          end: () => `+=${ref.current.offsetWidth}`
        }
      });
      ScrollTrigger.refresh();
    });
  }, []);

  const handleUpdateActiveImage = index => {
    setActiveImage(index + 1);
  };

  return (
    <SectionContainer>
      <section className="section-wrapper gallery-wrap">
        <div className="gallery" ref={ref}>
          <div className="gallery-counter">
            <span>{activeImage}</span>
            <span className="divider" />
            <span>{projects.length}</span>
          </div>

          {projects.map((image, index) => (
            <GalleryItems
              title={image.title}
              type={image.typeprojects}
              key={image.id}
              index={index}
              imgUrl={image.image.url}
            //   {...image}
              updateActiveImage={handleUpdateActiveImage}
            />
          ))}
        </div>
      </section>
    </SectionContainer>
  );
};
