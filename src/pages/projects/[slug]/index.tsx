
import { BannerProject } from "../../../components/BannerProject"
import { ProjectContainer } from "./styled"
import { GetStaticPaths, GetStaticProps } from 'next';
import { gql, useQuery } from '@apollo/client';
import { client } from '../../../lib/apollo';


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


export default function ProjectSlug({ projects }: HomeProjects)  {
    console.log(projects)

    return (
        <ProjectContainer>
            <BannerProject 
                title="Coffee Delivery"
                type="WebApp"
                imgUrl="https://i.postimg.cc/rpCkmjyT/coffee-delivery.png"
            />
            
        </ProjectContainer>
    )
}

export const getStaticPaths: GetStaticPaths = async () => {

    return {
        paths: [], //indicates that no page needs be created at build time
        fallback: 'blocking'
    }
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