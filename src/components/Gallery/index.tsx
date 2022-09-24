import { useEffect, useRef, useState } from 'react';
import { PROJECTS } from '../../constants';
import { SectionContainer } from './styles';
import {gsap} from 'gsap';
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import cn from 'classnames'
import useOnScreen from '../../hooks/useOnScreen';

function GalleryItem({src, title, type, description, updateActiveImage, index}: any) {

    const ref = useRef(null);

    const onScreen = useOnScreen(ref, 0.5);

    useEffect(() => {
        if (onScreen) {
          updateActiveImage(index);
        }
      }, [onScreen, index]);

    return(
        <div
            className={cn("gallery-item-wrapper", { "is-reveal": onScreen })}
            ref={ref}
            >
            <div/>
            <div className='gallery-item'>
                <div className='gallery-item-info'>
                    <h1 className='gallery-item-title'>{title}</h1>
                    <h6 className='gallery-item-subtitle'>{description}</h6>
                    <p className='gallery-item-subtitle'>{type}</p>
                </div>
                <div className='gallery-item-image'> </div>
            </div>
            <div />
        </div>

        
    )
}

export const Gallery = () => {
    const [activeImage, setActiveImage] = useState(1);
    const ref = useRef(null);
    
    gsap.registerPlugin(ScrollTrigger);
    useEffect(() => {
        setTimeout(() => {
        
        const sections = gsap.utils.toArray('.gallery-item-wrapper');
        // const teste: HTMLElement = document.querySelector('#teste');

        gsap.to(sections, {
            xPercent: -100 * (sections.length - 1),
            ease: "none",
            scrollTrigger: {
                // se for mudar trocar ref.current por um id que coloca no SectionContainer id='teste'
              trigger: ref.current,
              start: "top top",
            //   scroller: "#main-container",
              pin: true,
              scrub: 0.5,
              snap: 1 / (sections.length - 1),
              end: () => `+=${ref.current.offsetWidth}`,
            },
          });
          ScrollTrigger.refresh();
    });
    }, []);

    const handleUpdateActiveImage = (index) => {
        setActiveImage(index + 1)
    };

    return(
        <SectionContainer id='teste'>
            <section className="section-wrapper gallery-wrap">
                <div className="gallery" ref={ref}>
                    <div className="gallery-counter">
                        <span>{activeImage}</span>
                        <span className='divider'/>
                        <span>{PROJECTS.length}</span>

                    </div>
                    
                    {PROJECTS.map((image, index) =>(
                        <GalleryItem
                            key={image.type}
                            index={index}
                            {...image}
                            updateActiveImage={handleUpdateActiveImage}
                        />
                    ))}
                </div>
            </section>
        </SectionContainer>
    )
}