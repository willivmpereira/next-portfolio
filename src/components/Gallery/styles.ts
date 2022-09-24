import styled from 'styled-components';

export const SectionContainer = styled.div`
  .gallery-wrap {
    background-color: ${({ theme }) => theme.colors.ascent};
    margin-left: -5vw;
    margin-right: -5vw;
    position: relative;
  }

  .gallery-counter {
    position: absolute;
    top: 10%;
    left: 100px;
    z-index: 1;
    mix-blend-mode: difference;
    line-height: 16px;
    color: #dbd8d6;

    font-weight: 600;

    font-size: 16px;
    -webkit-font-smoothing: antialiased;
    display: inline-block;

    .divider {
      content: '';
      background-color: white;
      width: 6.25vw;
      margin: 7px 10px;
      height: 1px;
      display: inline-block;
    }
  }

  .gallery {
    height: 80vh;

    padding: 10vh 0;
    width: 400%;
    display: flex;
    flex-wrap: nowrap;

    .gallery-item {
      width: 100%;
      height: 100%;
      position: relative;
      will-change: transform;
    }

    .gallery-item-info {
      position: absolute;
      bottom: 10%;
      z-index: 1;
      transform: translateX(-20%);
      color: #dbd8d6;
      color: white;
      .gallery-info-title {
        line-height: 6vw;
        font-weight: 600;

        font-size: 6vw;
        -webkit-font-smoothing: antialiased;
      }

      .gallery-info-subtitle {
        position: relative;
        line-height: 6vw;
        color: transparent;
        font-weight: 400;
        font-size: 6vw;
        -webkit-font-smoothing: antialiased;
        -webkit-text-stroke: 2px #dbd8d6;
      }

      .gallery-info-category {
        position: relative;
        line-height: 24px;
        font-weight: 400;
        font-size: 24px;
        -webkit-font-smoothing: antialiased;
        margin-top: 2vh;
      }
    }
    .gallery-item-wrapper {
      aspect-ratio: 16/9;
      height: 100%;
      display: grid;
      grid-template-columns: 20vw 1fr 200px;
      width: 100vw;

      &.is-reveal {
        .gallery-item-image {
          transform: scale(1);
          filter: none;
        }
      }
    }
    .gallery-item-image {
      background: url(https://raw.githubusercontent.com/rogerrm95/coffee-delivery/main/src/assets/capa.png);
      background-size: cover;
      background-position: center;
      transform-origin: center;
      width: 100%;
      height: 100%;
      will-change: transform;
      transform: scale(0.7);
      transition: all 1.5s cubic-bezier(0.77, 0, 0.175, 1);
      filter: grayscale(100%) sepia(20%) brightness(80%);
    }
  }
`;