import { BannerProject } from '../../components/BannerProject';
import { ProjectContainer } from './styled';
import { GetStaticPaths, GetStaticProps } from 'next';
import { client } from '../../lib/apollo';
import { getProjectBySlug, GET_PROJECTS } from '../../constants/querys';

interface IProject {
  slug: string;
  title: string;
  description: {
    text: string;
  }
  id: string;
  image: {
    url: string;
  };
  tags: string[];
  typeprojects: string;
}

interface HomeProjects {
  project: IProject;
}

export const ProjectSlug = ({ project }: HomeProjects) => {
  return (
    <ProjectContainer>
      <BannerProject
        title={project.title}
        type={project.typeprojects}
        imgUrl={project.image.url}
        description={project.description.text}
      />
    </ProjectContainer>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await client.query({ query: GET_PROJECTS });

  const paths = data.projects.map((project: any) => ({
    params: { slug: project.slug }
  }));

  return {
    paths,
    fallback: false
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params;

  const { data } = await client.query({
    query: getProjectBySlug(slug)
  });

  return {
    props: {
      project: data.projects[0]
    },
    revalidate: 86400
  };
};