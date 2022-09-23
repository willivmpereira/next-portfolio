import { HomeContainer } from '../styles/HomeStyles';
import { Header } from '../components/Header';
import { About } from '../components/About';
import { Projects } from '../components/Projects';
import { Contact } from '../components/Contact';
import { GetStaticProps } from 'next';
import { getPrismicClient } from '../services/primic';
import Prismic from '@prismicio/client';
import { MyServices } from '../components/MyServices';
import { gql, useQuery } from '@apollo/client';
import { client } from '../lib/apollo';

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
  projects: IProjects[];
}

export default function Home({ projects }: HomeProjects) {
  return (
    <HomeContainer>
      <Header />
      <About />
      <MyServices />
      <Projects projects={projects.projects} />
      <Contact />
    </HomeContainer>
  );
}

const GET_PROJECTS = gql`
query Projects {
  projects {
    slug
    title
    description {
      text
    }
    id
    image {
      url
    }
    tags {
      tag
    }
  	typeprojects
  }
}
  `;

export const getStaticProps: GetStaticProps = async () => {

    const { data } = await client.query({
      query: GET_PROJECTS
    })

  return {
    props: {
      projects: data
    },
    revalidate: 86400
  };
};
