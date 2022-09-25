import { HomeContainer } from '../styles/HomeStyles';
import { Header } from '../components/Header';
import { About } from '../components/About';
import { Projects } from '../components/Projects';
import { Contact } from '../components/Contact';
import { GetStaticProps } from 'next';
import { MyServices } from '../components/MyServices';
import { client } from '../lib/apollo';
import { Gallery } from '../components/Gallery';
import { GET_PROJECTS } from '../constants/querys';
import React from 'react';

interface IProjects {
  slug: string;
  title: string;
  description: string[];
  id: string;
  image: string[];
  tags: string[];
  typeprojects: string;
}
interface HomeProjects {
  projectss: IProjects[];
  projects: any;
}

export default function Home({ projects }: HomeProjects) {
  

  return (
    <>
        <div
          
        >
          <HomeContainer className="main-container"
          id="main-container"
          data-scroll-container
         >
            <Header />
            <About />
            <Gallery projects={projects.projects} />
            <MyServices />
            {/* <Projects projects={projects.projects} /> */}
            <Contact />
          </HomeContainer>
        </div>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await client.query({
    query: GET_PROJECTS
  });

  return {
    props: {
      projects: data
    },
    revalidate: 86400
  };
};
