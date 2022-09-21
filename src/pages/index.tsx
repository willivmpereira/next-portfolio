import { HomeContainer } from '../styles/HomeStyles'
import { Header } from "../components/Header";
import { About } from '../components/About';
import { Projects } from '../components/Projects';
import { Contact } from '../components/Contact';
import { GetStaticProps } from 'next';
import { getPrismicClient } from '../services/primic';
import Prismic from '@prismicio/client'
import { MyServices } from '../components/MyServices';

interface IProjects {
  slug: string;
  title: string;
  description: string;
  image:string;
  type: string;
  tags: string[];
}

interface HomeProjects {
  projects: IProjects[];
}

export default function Home({ projects }: HomeProjects) {
  return (
    <HomeContainer>
      <Header/>
      <About/>
      <MyServices/>
      <Projects projects={projects}/>
      <Contact/>
    </HomeContainer>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient();

  const projectsResponse = await prismic.query(
    [Prismic.Predicates.at('document.type', 'project')],
    { orderings: '[document.frist_publication_date desc]'}
  );

  const projects = projectsResponse.results.map(project => ({
    slug: project.uid,
    title: project.data.title,
    description: project.data.description,
    image: project.data.image.url,
    type: project.data.type,
    tags: project.tags,
  }))

  return {
    props: {
      projects
    },
    revalidate: 86400
  }
} 
