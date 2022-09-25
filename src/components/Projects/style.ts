import styled from 'styled-components';

export const ProjectsContent = styled.div`
#teste {
    display: flex;
    width: 500vw;
  }

  #oi {
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      max-width: 100%;
    }
  }
`;

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

    a {
      display: inline-block;
      margin-top: 3rem;
      position: relative;
      background: transparent;
      border: none;
      font-size: 1rem;
      color: ${({ theme }) => theme.colors.ascent};
      font-weight: 500;
      margin-left: .625rem;
      
      &::after {
        content: "";
        position: absolute;
        width: 100%;
        transform: scaleX(0);
        height: 1px;
        bottom: -7px;
        left: 0;
        background: linear-gradient(270deg, ${({theme }) => theme.colors.ascent} 50%, ${({ theme }) => theme.colors.whiteColor} 100%);
        transform-origin: bottom right;
        transition: transform 0.5s cubic-bezier(0.86, 0, 0.07, 1);
      }
      
      &:hover {
        &::after {
          transform: scaleX(1);
          transform-origin: bottom left;
          background: linear-gradient(270deg, ${({theme }) => theme.colors.ascent} 50%, ${({ theme }) => theme.colors.whiteColor} 100%);
          transition: transform 0.5s cubic-bezier(0.86, 0, 0.07, 1);
        }
      }
    }
`;

export const Teste = styled.div`


`