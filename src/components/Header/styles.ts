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

      &::before {
        width: 2px;
        height: 92px;
        right: 27px;
        content: '';
        display: block;
        position: absolute;
        background: ${({ theme }) => theme.colors.ascent};
        left: 50%;
        -webkit-transform: translateX(-50%);
        -ms-transform: translateX(-50%);
        transform: translateX(-50%);
        pointer-events: none;
        top: 0;
        -webkit-transition: 0.3s all ease;
        -o-transition: 0.3s all ease;
        transition: 0.3s all ease;
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

/* .section {
        display: flex;
            height: 80vh;
            justify-content: center;
            align-items: center;
        nav {
        display: grid;
        grid-template-columns: 10% 1fr 1fr 10%;
        min-height: 10vh;
        color: white;
        align-items: center;

        h3 {
            grid-column: 2/3;
            font-size: 24px;
            font-family: ${({theme}) => theme.text.secondary};
        }

        svg {
            justify-self: end;
            max-width: 24px;
            z-index: 999;
            cursor: pointer;
        }
    }

    section {
        &.home {
            display: flex;
            height: 80vh;
            justify-content: center;
            align-items: center;

            &.hero {
                height: 60%;
                width: 100%;
                position: relative;

                &::after {
                    content: "";
                    background: #000;
                    width: 100%;
                    height: 100%;
                    position: absolute;
                    left: 0;
                    opacity: 0.3;
                    top: 0;
                }

                h1 {
                    font-family: ${({ theme }) => theme.text.secondary};
                }

                img {
                    object-fit: cover;
                }
            }
        }
    }

    .go-down{
        width: 40px;
        height: 92px;
        display: block;
        margin-left: 5rem;
        position: absolute;
        margin-top: -5rem;

        &::before {
            width: 2px;
            height: 92px;
            right: 27px;
            content: "";
            display: block;
            position: absolute;
            background: ${({ theme }) => theme.colors.ascent};
            left: 50%;
            -webkit-transform: translateX(-50%);
            -ms-transform: translateX(-50%);
            transform: translateX(-50%);
            pointer-events: none;
            top: 0;
            -webkit-transition: .3s all ease;
            -o-transition: .3s all ease;
            transition: .3s all ease;
        }

        &::after {
            content: '';
            position: absolute;
            left: 50%;
            bottom: -12px;
            border: solid transparent;
            content: " ";
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

            &::before {
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
        background: linear-gradient(to left, #1F1F1F, #000);
        z-index: -1;
    } */
