import styled from 'styled-components';

interface GalleryItemContentProps {
  imgUrl: string;
}

export const SectionContainer = styled.div`
  .gallery-wrap {
    background-color: ${({ theme }) => theme.colors.ascent};
    margin-left: -5vw;
    margin-right: -5vw;
    position: relative;
    overflow: hidden;

    @media screen and (max-width: 768px){
      margin: 0;
    }
  }

  .gallery-counter {
    position: absolute;
    top: 10%;
    left: 100px;
    z-index: 1;
    line-height: 16px;
    color: ${({ theme }) => theme.colors.whiteColor};
    font-weight: 600;
    font-size: 16px;
    display: inline-block;
    mix-blend-mode: difference;
    -webkit-font-smoothing: antialiased;

    @media screen and (max-width: 768px){
      top: 5%;
    }

    .divider {
      content: '';
      background-color: ${({ theme }) => theme.colors.whiteColor};
      width: 6.25vw;
      margin: 7px 10px;
      height: 1px;
      display: inline-block;
    }
  }

  .gallery {
    height: 100vh;
    padding: 10vh 0;
    width: 400%;
    display: flex;
    flex-wrap: nowrap;

    }
`;

export const GalleryItemContent = styled.div<GalleryItemContentProps>`

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
      color: ${({ theme }) => theme.colors.whiteColor};
      background-color: ${({ theme }) => theme.colors.darkColor};
      padding: 1rem;

      .gallery-info-title {
        line-height: 6vw;
        font-weight: 600;
        font-size: 6vw;
        -webkit-font-smoothing: antialiased;
      }

      a {
        color: ${({ theme }) => theme.colors.whiteColor}
      }

      .gallery-info-subtitle {
        position: relative;
        line-height: 6vw;
        color: transparent;
        font-weight: 400;
        font-size: 6vw;
        -webkit-font-smoothing: antialiased;
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
      background: url(${props => props.imgUrl});
      background-size: cover;
      background-position: center;
      transform-origin: center;
      width: 100%;
      height: 100%;
      will-change: transform;
      transform: scale(0.7);
      transition: all 1.5s cubic-bezier(0.77, 0, 0.175, 1);
      filter: grayscale(100%) sepia(20%) brightness(80%);

      @media screen and (max-width: 768px){
      width: 70vw;
    }
    }
`