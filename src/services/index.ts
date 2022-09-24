import { gql } from '@apollo/client';
import { client } from '../lib/apollo';

export const getProjects = async () => {
  const query = gql`
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

  const { data } = await client.query({
    query: query
  });
  return { data };
};

export const getProjectsDetails = async (slug) => {
    const query = gql`
    query Projects {
      projects(where:{slug:$slug}) {
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

  const {data} = await client.query({
    query: query,
    
  });

  return data && slug

}