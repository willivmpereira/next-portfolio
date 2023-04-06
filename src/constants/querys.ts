import { gql } from '@apollo/client';

export const GET_PROJECTS = gql`
  query Projects {
    projects {
      slug
      title
      description {
        html
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

export const getProjectBySlug = (slug: string | string[]) => {
  return gql`
  query Projects {
    projects(where: {slug: "${slug}"}) {
      slug
      title
      description {
        html
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
};
