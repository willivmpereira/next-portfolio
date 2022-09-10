import { Container } from './styles';
import React, {useRef, useEffect} from  'react';
import Image from 'next/image';



export function Header() {


  return (
    <Container>
      <header>
        <nav>
          <h3>co.Blvck</h3>
         
        </nav>
        <section>
          <div className="hero">
            <Image
              src="https://wnka.co/wp-content/uploads/2018/01/travis-scott-astroworld-2019-cr-Julian-Bajsel-billboard-1548-compressed.jpg"
              alt="Banner"
              layout="fill"
            />
            <h1 className='headline' >co.Blvck</h1>
          </div>
        </section>
        <a className='go-down' ></a>
      </header>
      <div className="slider" ></div>
      {/* <section>
      <nav>
        <h3>co.Blvck</h3>
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
