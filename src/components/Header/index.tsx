import { Container } from './styles';
import React, {useRef, useEffect} from  'react';
import Image from 'next/image';
import { Power2, TimelineLite } from "gsap";


export function Header() {

  let hero: any = useRef(null);
  let slide: any = useRef(null);
  let logo: any = useRef(null);
  // let menu: any = useRef(null);
  let godown: any = useRef(null);

  let lt = new TimelineLite();
  

  useEffect(() => {
    lt.fromTo(hero,1, {height: "0%"}, {height: "80%", ease: Power2.easeInOut})
      .fromTo(hero, 1.2, {width: "100%"}, {width: "80%", ease: Power2.easeInOut}, "-=0.3")
      .fromTo(slide, 1.2, {x: "-100%"}, {x: "0%", ease: Power2.easeInOut}, "-=1.2")
      .fromTo(logo, 0.5, {opacity: 0, x: 30}, {opacity: 1, x: 0}, "-=0.5")
      // .fromTo(menu, 0.5, {opacity: 0, x: 30}, {opacity: 1, x: 0}, "-=0.5")
      .fromTo(godown, 0.5, {opacity: 0, y: 30}, {opacity: 1, y: 0}, "-=0.9")
    //lt.from(hero, 1, {css: {height: '0%'}});
    //lt.to(hero, 1, {css: {height: '80%'}});

    // lt.from(hero, 1.2, {css: {width: '100%'}});
    // lt.to(hero, 1.2, {css: {width: '80%'}});


    // lt.from(slide, 1.2, {css: {x: '-100%'}});
    // lt.to(slide, 1.2, {css: {x: '0%'}});

    // lt.from(logo, 0.5, {css: {opacity: '0', x: 30}});
    // lt.to(logo, 0.5, {css: {opacity: '1', x: 0}});
  })

  return (
    <Container>
      <header>
        <nav>
          <h3 ref={el => logo = el}>co.Blvck</h3>
          {/* <svg ref={el => menu = el} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" > 
            <path d="M12 5C11.4477 5 11 5.44772 11 6C11 6.55228 11.4477 7 12 7H20C20.5523 7 21 6.55228 21 6C21 5.44772 20.5523 5 20 5H12Z" fill="#1F1F1F" /> 
            <path d="M7 12C7 11.4477 7.44772 11 8 11H16C16.5523 11 17 11.4477 17 12C17 12.5523 16.5523 13 16 13H8C7.44772 13 7 12.5523 7 12Z" fill="#1F1F1F" /> 
            <path d="M3 18C3 17.4477 3.44772 17 4 17H12C12.5523 17 13 17.4477 13 18C13 18.5523 12.5523 19 12 19H4C3.44772 19 3 18.5523 3 18Z" fill="#1F1F1F" /> 
          </svg> */}
        </nav>
        <section>
          <div className="hero" ref={el => hero = el}>
            <Image
              src="https://wnka.co/wp-content/uploads/2018/01/travis-scott-astroworld-2019-cr-Julian-Bajsel-billboard-1548-compressed.jpg"
              alt="Banner"
              layout="fill"
            />
            <h1 className='headline' >co.Blvck</h1>
          </div>
        </section>
        <a className='go-down' ref={el => godown = el}></a>
      </header>
      <div className="slider" ref={el => slide = el}></div>
      {/* <section>
      <nav>
        <h3>co.Blvck</h3>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" > <path d="M12 5C11.4477 5 11 5.44772 11 6C11 6.55228 11.4477 7 12 7H20C20.5523 7 21 6.55228 21 6C21 5.44772 20.5523 5 20 5H12Z" fill="#1F1F1F" /> <path d="M7 12C7 11.4477 7.44772 11 8 11H16C16.5523 11 17 11.4477 17 12C17 12.5523 16.5523 13 16 13H8C7.44772 13 7 12.5523 7 12Z" fill="#1F1F1F" /> <path d="M3 18C3 17.4477 3.44772 17 4 17H12C12.5523 17 13 17.4477 13 18C13 18.5523 12.5523 19 12 19H4C3.44772 19 3 18.5523 3 18Z" fill="#1F1F1F" /> </svg>
      </nav>
      <section>
      <section className='home'>
            <div className='hero'>
                <img src="https://wnka.co/wp-content/uploads/2018/01/travis-scott-astroworld-2019-cr-Julian-Bajsel-billboard-1548-compressed.jpg" alt=""/>
                <h1 className='headline'>co.Blvck</h1>
            </div>
        </section>
      </section>
      <a href="#about_us" className='go-down'></a>
      </section>
      <div className="slider">

      </div> */}
    </Container>
  );
}
