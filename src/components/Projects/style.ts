import styled from 'styled-components';

export const ProjectsContent = styled.div``;

export const Content = styled.div`
  
    position: relative;
    display: grid;
    gap: 0.625rem;
    grid-template-columns: repeat(12, 1fr);
    align-items: center;
    margin: 5rem 0;

    &:nth-child(even) {
        .test {
            &:last-child {
                background-color: red;
                order:-1;
            }
        }
    }

    .text-content {
      position: relative;
      grid-area: 1 / 1 / -1 / 7;
      /* order: -1; */

      h5 {
        color: ${({ theme }) => theme.colors.ascent};
        font-size: 1.25rem;
      }

      h4 {
        font-weight: 600;
        color: #141414;
      }

      .textbox {
        box-shadow: 0 10px 30px -15px rgb(2 12 27 / 70%);
        position: relative;
        z-index: 2;
        padding: 1.5rem;
        border-radius: 4px;
        background-color: #141414;
        color: #f8f8fa;
        font-size: 1rem;
        margin: 0.625rem 0;
      }

      .tecnologias {
        span {
          padding: 2px 0.625rem;
          color: #141414;
          font-weight: 600;
        }
      }
    }

    .imgContent {
      grid-area: 1 / 6 / -1 / -1;
      position: relative;
      z-index: 1;

      img {
        box-shadow: 0 10px 30px -15px rgb(2 12 27 / 70%);
        transform: scale(0.95);
        transition: all 0.75s ease-out;

        &:hover {
          transform: scale(1);
        }
      }
    }
`;

export const Teste = styled.div`

  #teste {
    display: flex;
    width: 500vw;
  }

  #oi {
    width: 100vw;
    height: 100vh;

    img {
      max-width: 750px;
    }
  }
`