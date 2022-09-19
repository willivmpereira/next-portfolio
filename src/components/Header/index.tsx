import React, { useRef, useEffect } from 'react';
import Image from 'next/image';
import { Container } from './styles';
import gsap, { Power2, TimelineLite } from "gsap";

export function Header() {

  let hero: any = useRef(null);
  let slide: any = useRef(null);
  let logo: any = useRef(null);
  let menu: any = useRef(null);
  let godown: any = useRef(null);


  useEffect(() => {

    let lt = gsap.timeline();

    lt.fromTo(hero,1, {height: "0%"}, {height: "80%", ease: Power2.easeInOut})
      .fromTo(hero, 1.2, {width: "100%"}, {width: "80%", ease: Power2.easeInOut}, "-=0.3")
      .fromTo(slide, 1.2, {x: "-100%"}, {x: "0%", ease: Power2.easeInOut}, "-=1.2")
      .fromTo(logo, 0.5, {opacity: 0, x: 30}, {opacity: 1, x: 0}, "-=0.5")
      //.fromTo(menu, 0.5, {opacity: 0, x: 30}, {opacity: 1, x: 0}, "-=0.5")
      .fromTo(godown, 0.5, {opacity: 0, y: 30}, {opacity: 1, y: 0}, "-=0.9");
    
  })

  return (
    <Container>
      <header>
        <nav>
          <h3 ref={el => logo = el}>William</h3>
        </nav>
        <section>
          <div className="hero" ref={el => hero = el}>
            <Image
              src="https://wnka.co/wp-content/uploads/2018/01/travis-scott-astroworld-2019-cr-Julian-Bajsel-billboard-1548-compressed.jpg"
              alt="Banner"
              layout="fill"
            />
            <h1 className="headline">William</h1>
          </div>
        </section>
        <button className="go-down" ref={el => godown = el}></button>
      </header>
      <div className="slider" ref={el => slide = el}></div>
    </Container>
  );
}
