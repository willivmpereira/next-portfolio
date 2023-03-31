import React, { useRef, useEffect } from 'react';
import Image from 'next/image';
import { Container, MenuContainer } from './styles';
import gsap, { Power2, TimelineLite } from "gsap";
import { IconContext } from "react-icons";
import { CgMenuMotion, CgClose } from 'react-icons/cg';
import { BACKGROUND } from '../../constants/background';


export function Header() {

  const date = new Date();
  const month = date.getMonth();
  const day = date.getDate()

  const backgroundToday = BACKGROUND[month].days[day].urlImage

  let hero: any = useRef(null);
  let slide: any = useRef(null);
  let logo: any = useRef(null);
  let menu: any = useRef(null);
  let godown: any = useRef(null);
  let menuGG: any = useRef(null);


  useEffect(() => {

    let lt = gsap.timeline();

    lt.fromTo(hero,1, {height: "0%"}, {height: "80%", ease: Power2.easeInOut})
      .fromTo(hero, 1.2, {width: "100%"}, {width: "80%", ease: Power2.easeInOut}, "-=0.3")
      .fromTo(slide, 1.2, {x: "-100%"}, {x: "0%", ease: Power2.easeInOut}, "-=1.2")
      .fromTo(logo, 0.5, {opacity: 0, x: 30}, {opacity: 1, x: 0}, "-=0.5")
      .fromTo(menu, 0.5, {opacity: 0, x: 30}, {opacity: 1, x: 0}, "-=0.5")
      .fromTo(godown, 0.5, {opacity: 0, y: 30}, {opacity: 1, y: 0}, "-=0.9");

      const hamburger = document.querySelector('.hamburger');
      const exit = document.querySelector('.exit');

      let t1 = gsap.timeline({paused: true});
      t1.to(menuGG, 1, {opacity: 1, duration: 1, top: 0, ease: Power2.easeInOut})
      t1.to(".nav", 1, {opacity: 1, duration: 0.6, stagger: 0.3, marginTop: 0, ease: Power2.easeInOut})

      hamburger.addEventListener('click', () => {
        t1.play().timeScale(1)
      })

      exit.addEventListener('click', () => {
        t1.play().timeScale(3)
        t1.reverse()
      })
    
  })

  return (
    <Container>
      <header>
        <nav>
          <h3 ref={el => logo = el}>William</h3>
          <div ref={el => menu = el} className='hamburger'>
            <IconContext.Provider value={{ color: "#000", size: "1.5rem" }}>
            <CgMenuMotion/>
            </IconContext.Provider>
          </div>

        </nav>
        <MenuContainer ref={el => menuGG = el}>
            <div className="background">Menu</div>
            <div className="exit">
            <IconContext.Provider value={{ color: "#FFF", size: "1.5rem" }}>
              <CgClose/>
            </IconContext.Provider>
            </div>
            <div className="menu-container">
                <ul className="nav-list">
                    <li className="nav">
                        <a href="#" className="nav-link">
                            Home 
                            <span className="numbers">01</span>
                        </a>
                    </li>
                    <li className="nav">
                        <a href="#" className="nav-link">
                            Projects 
                            <span className="numbers">02</span>
                        </a>
                    </li>
                    <li className="nav">
                        <a href="#" className="nav-link">
                            Contact 
                            <span className="numbers">03</span>
                        </a>
                    </li>
                </ul>
            </div>
        </MenuContainer>
        <section>
          <div className="hero" ref={el => hero = el}>
            <Image
              src={backgroundToday}
              alt="Banner Header"
              layout="fill"
            />
            <h1 className="headline">Bonsoir</h1>
          </div>
        </section>
        <button aria-label="Go down" className="go-down" ref={el => godown = el}></button>
      </header>
      <div className="slider" ref={el => slide = el}></div>
    </Container>
  );
}
