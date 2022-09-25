import styled from 'styled-components';

export const AboutUs = styled.div`
  padding: 5rem 0 0;
  background-color: ${({ theme }) => theme.colors.whiteColor};

  .display {
    display: grid;
    grid-template-columns: 1fr 1fr;

    @media screen and (max-width: 768px) {
      grid-template-columns: 1fr;
    }

    .about__title {
      h4 {
        font-weight: 500;
        color: ${({ theme }) => theme.colors.ascent};
      }

      h1 {
        font-size: 3rem;
        font-weight: 700;
        line-height: 1.3;
        margin: 2rem 0;
      }

      .photo__me {
        margin-bottom: 2rem;
        img {
          max-width: 350px;
          will-change: transform;
          transform: scale(0.85);
          transition: all 1.5s cubic-bezier(0.77, 0, 0.175, 1);
          filter: grayscale(100%) sepia(20%) brightness(80%);

          &:hover {
            transform: scale(1);
            filter: none;
          }
        }
      }
    }
    .about__description {
      p {
        margin-top: 2rem;
        line-height: 1.7;
      }
    }
  }
`;
