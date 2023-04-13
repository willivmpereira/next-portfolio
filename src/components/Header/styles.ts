import styled from 'styled-components';

export const Container = styled.div`
  header {
    height: 100vh;

    nav {
      display: grid;
      grid-template-columns: 10% 1fr 1fr 10%;
      min-height: 10vh;
      color: white;
      align-items: center;

      h3 {
        grid-column: 2/3;
        font-size: 24px;
        font-family: ${({ theme }) => theme.text.secondary};
      }

      .hamburger {
        justify-self: end;
        max-width: 24px;
        z-index: 999;
        cursor: pointer;
      }
    }

    section {
      display: flex;
      height: 80vh;
      justify-content: center;
      align-items: center;

      .hero {
        height: 60%;
        width: 100%;
        position: relative;

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        h1 {
          font-family: ${({ theme }) => theme.text.secondary};
          font-size: 100px;
        }

        .headline {
          position: absolute;
          top: 70%;
          left: 10%;
          font-size: 100px;
          transform: translate(-20%, -70%);
          color: white;
          z-index: 3;
          text-shadow: 3px 3px 6px rgba(0, 0, 0, 0.1);
        }

        &::after {
          content: '';
          background: black;
          width: 100%;
          height: 100%;
          position: absolute;
          left: 0;
          opacity: 0.3;
          top: 0;
        }
      }
    }

    .go-down {
      width: 40px;
      height: 92px;
      display: block;
      margin-left: 5rem;
      position: absolute;
      margin-top: -5rem;
      transition: all 1s cubic-bezier(0.77, 0, 0.175, 1);
      background-color: transparent;
      border: none;

      &::before {
        width: 2px;
        height: 92px;
        right: 27px;
        content: '';
        display: block;
        position: absolute;
        background: ${({ theme }) => theme.colors.ascent};
        left: 50%;
        transform: translateX(-50%);
        pointer-events: none;
        top: 0;
        transition: all 1s cubic-bezier(0.77, 0, 0.175, 1);

      }

      &::after {
        content: '';
        position: absolute;
        left: 50%;
        bottom: -12px;
        border: solid transparent;
        content: ' ';
        height: 0;
        width: 0;
        margin-left: -1px;
        position: absolute;
        border-top-color: ${({ theme }) => theme.colors.ascent};
        border-width: 7px;
        margin-left: -7px;
      }
      &:hover {
        height: 122px;
      }
      &:hover {
        &:before {
          height: 122px;
        }
      }
    }
  }
  .slider {
    position: absolute;
    top: 0;
    left: 0;
    width: 75%;
    height: 100%;
    background: linear-gradient(to left, #1f1f1f, #000);
    z-index: -1;
  }
`;

export const MenuContainer = styled.div`
  opacity: 0;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  color: ${({ theme }) => theme.colors.whiteColor};
  height: 100vh;
  width: 100%;
  position: fixed;
  top: -100%;
  background-color: ${({ theme }) => theme.colors.darkColor};
  z-index: 999;
  padding: 0px 50px;

  .background {
    position: absolute;
    font-size: 14rem;
    font-weight: 400;
    color: rgba(255, 255, 255, 0.1);
    z-index: -1;

    @media screen and (max-width: 768px) {
      font-size: 8rem;
    }
  }

  .exit {
    position: absolute;
    top: 40px;
    right: 40px;
    cursor: pointer;
  }

  .menu-container {
    ul {
      list-style: none;
      .nav {
        margin-top: -20px;
        opacity: 0;

        .nav-link {
          color: #fff;
          font-size: 4rem;
          transition: 0.2s ease-in-out;
          text-align: left;
          transition: all 1.5s cubic-bezier(0.77, 0, 0.175, 1);

          &:hover {
            color: ${({ theme }) => theme.colors.ascent};
          }

          .numbers {
            font-size: 1.5rem;
          }
        }
      }
    }
  }
`;
