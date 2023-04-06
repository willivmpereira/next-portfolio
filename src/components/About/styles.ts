import styled from 'styled-components';

export const AboutUs = styled.div`
  position: relative;
  padding: 5rem 0;
  background-color: ${({ theme }) => theme.colors.whiteColor};

  .display {
    display: grid;
    grid-template-columns: 1fr 1fr;
    position: relative;
    z-index: 2;

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

      .blob {
        display: block;
        position: relative;
        max-width: 350px;
        max-height: 350px;
        width: 100%;
        height: 100%;
        overflow: hidden;
        border-radius: 48% 52% 68% 32%/42% 28% 72% 58%;
        background: linear-gradient(to right, rgba(220, 53, 90, 0.15), rgba(31, 31, 31, 0.15), rgba(250, 250, 250, 0.15));
        background-size: 500% 100%;
        animation: blobber 30s 0s linear infinite, cobler 30s 0s linear infinite alternate;

        &:after {
          content: "";
          display: block;
          position: absolute;
          top: 5px;
          right: 5px;
          bottom: 5px;
          left: 5px;
          background-color: #000;
          background-image: url(https://media.graphassets.com/xy6LMU3ySM6FYMJAh855?_gl=1*1ojau6z*_ga*OTgwNjIwNjkzLjE2NjM4NDc2Mjg.*_ga_G6FYGSYGZ4*MTY2NTE4OTk2MS4xMi4xLjE2NjUxOTA3OTcuNTcuMC4w);
          background-repeat: no-repeat;
          background-size: cover;
          background-position: center;
          mix-blend-mode: multiply;
          animation: blobber 30s 0s ease-in-out infinite, wobbler 15s 0s linear infinite alternate;
        }
      }

      @keyframes blobber {
    0%  { border-radius: 48% 52% 68% 32% / 42% 28% 72% 58%; }
    5%  { border-radius: 48% 52% 41% 59% / 66% 37% 63% 34%; }
    10% { border-radius: 69% 31% 71% 29% / 67% 31% 69% 33%; }
    15% { border-radius: 60% 40% 71% 29% / 63% 65% 35% 37%; }
    20% { border-radius: 61% 39% 51% 49% / 57% 58% 42% 43%; }
    25% { border-radius: 66% 34% 25% 75% / 47% 30% 70% 53%; }
    30% { border-radius: 32% 68% 38% 62% / 65% 60% 40% 35%; }
    35% { border-radius: 63% 37% 41% 59% / 35% 38% 62% 65%; }
    40% { border-radius: 57% 43% 49% 51% / 55% 71% 29% 45%; }
    45% { border-radius: 47% 53% 34% 66% / 65% 36% 64% 35%; }
    50% { border-radius: 44% 56% 32% 68% / 69% 26% 74% 31%; }
    55% { border-radius: 28% 72% 37% 63% / 71% 44% 56% 29%; }    
    60% { border-radius: 38% 62% 35% 65% / 74% 53% 47% 26%; }
    65% { border-radius: 73% 27% 46% 54% / 54% 47% 53% 46%; }
    70% { border-radius: 75% 25% 47% 53% / 49% 53% 47% 51%; }
    75% { border-radius: 62% 38% 43% 57% / 55% 60% 40% 45%; }
    80% { border-radius: 41% 59% 65% 35% / 73% 50% 50% 27%; }
    85% { border-radius: 55% 45% 57% 43% / 73% 61% 39% 27%; }
    90% { border-radius: 74% 26% 33% 67% / 40% 65% 35% 60%; }
    95% { border-radius: 58% 42% 57% 43% / 53% 45% 55% 47%; }
    100%{ border-radius: 48% 52% 68% 32% / 42% 28% 72% 58%; }
}

@keyframes cobler {
	0% {
        background-position: 0% 0%;
    }
    100% {
        background-position: 100% 0%;
    }
}

@keyframes wobbler {
    0%  {
        transform: rotateZ(8deg);
    }
    100% {
        transform: rotateZ(-8deg);
    }
}
    }
    .about__description {
      position: relative;
      z-index: 1;

      p {
        margin-top: 2rem;
        line-height: 1.7;
      }
    }
  }

  .stroke {
      position: absolute;
      left: 0;

      h2 {
        -webkit-text-stroke-color: #20201f;
        text-transform: uppercase;
        font-size: 28.6rem;
        -webkit-text-fill-color: transparent;
        -webkit-text-stroke-width: 1px;
        position: absolute;
        margin: 0;
        opacity: 0.15;
      }
    }
`;
