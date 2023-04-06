import styled from 'styled-components';

interface BannerProjectContainerProps {
  imgUrl: string;
}

export const BannerProjectContainer = styled.div<BannerProjectContainerProps>`
  width: 100%;
  background: url(${props => props.imgUrl}) no-repeat top;
  background-size: cover;
  height: 25rem;
  position: relative;
  padding: 3rem 5rem;
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;

  > div.overlay {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    /* background: linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0.27494747899159666) 54%); */
    background: ${({ theme }) => theme.colors.gradient};
    opacity: 0.7;
  }

  section {
    z-index: 2;

    h1 {
      color: ${({ theme }) => theme.colors.whiteColor};
      font-size: 3rem;
    }

    h2 {
      color: ${({ theme }) => theme.colors.whiteColor};
      font-weight: 300;
      font-size: 2rem;
    }
  }
`;

export const ContentBanner = styled.div `
  p {
    margin: 1rem 0;
  }
  .tags {
    margin: 1rem 0;
    display: flex;
    align-items: center;
    gap: .75rem;

    li {
      border: dashed 1px #ccc;
      color: #ccc;
      padding: .25rem .5rem;
      border-radius: 14px;
      font-size: .85rem;
    }
  }
`
