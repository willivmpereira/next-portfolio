import styled from 'styled-components';

export const MyServicesContainer = styled.section`
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  background-color: #f6f5f8;
  padding: 5rem 0;

  .display {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    justify-content: center;
    gap: 2rem;

    .detail_me {
      max-width: 554px;
      width: 100%;
      animation: down 1.5s cubic-bezier(0.77, 0, 0.175, 1);

      &.animation {
        animation: up 1s cubic-bezier(0.77, 0, 0.175, 1);
      }

      h2 {
        font-size: 2rem;
      }

      h4 {
        font-size: 20px;
        margin-top: 1rem;
      }

      p {
        line-height: 1.6;
        margin-top: 1rem;
      }
    }

    .icons {
      max-width: 554px;
      width: 100%;

      ul {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 1rem;
        list-style: none;
        padding: 0;
        justify-content: center;

        li {
          width: 100px;
          height: 100px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          overflow: hidden;
          transition: all 1.5s cubic-bezier(0.77, 0, 0.175, 1);

          cursor: pointer;

          &:hover {
            img {
              transform: translateY(-20px);
              opacity: 1;
              transition: all 1.5s cubic-bezier(0.77, 0, 0.175, 1);
            }

            .overlay {
              transform: translateY(0);
              opacity: 1;
            }
          }

          .overlay {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: url(https://i.imgur.com/HdW5ULT.jpeg);
            background-position: bottom;
            background-size: cover;
            background-repeat: no-repeat;
            transition: 0.5s;
            transform: translateY(100px);
            transition: all 1.5s cubic-bezier(0.77, 0, 0.175, 1);
            border-radius: 50%;
          }
        }
      }
    }

    @media screen and (max-width: 768px) {
      grid-template-columns: 1fr;
    }
  }

  @keyframes up {
    0% {
      transform: translateY(50px);
      opacity: 0;
    }

    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }

  @keyframes down {
    0% {
      transform: translateY(50px);
      opacity: 0;
    }

    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }
`;
