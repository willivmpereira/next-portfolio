import styled from 'styled-components';

export const ContactContent = styled.section`
  padding: 5rem 0;

  .content {
    max-width: 80%;
    margin-left: auto;

    h2 {
      font-size: 3rem;
      max-width: 35rem;

      span {
        animation: wave-animation 2.5s infinite;
        transform-origin: 70% 70%;
        display: inline-block;
      }
    }

    form {
      margin-top: 3rem;

      .display {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 2rem;

        .input__group {
          label {
            display: block;
            margin-bottom: 0.5rem;
          }

          input {
            width: 100%;
            border-color: transparent;
            outline: none;
            padding: 0.75rem;
            background-color: ${({ theme }) => theme.colors.whiteColor};

            &:focus {
              border: solid 2px ${({ theme }) => theme.colors.darkColor};
            }
          }

          select {
            display: inline-block;
            background-image: url(https://global-uploads.webflow.com/622a28e521e704987517a900/622a28e521e704317317a97c_dropdown.svg);
            background-position: 97% 50%;
            background-size: auto;
            background-repeat: no-repeat;
            background-attachment: scroll;
            color: ${({ theme }) => theme.colors.darkColor};
            width: 100%;
            border: solid 2px transparent;
            outline: none;
            padding: 0.75rem;
            appearance: none;

            &:focus {
              border: solid 2px ${({ theme }) => theme.colors.darkColor};
            }
          }

          textarea {
            width: 100%;
            border: 2px solid transparent;
            outline: none;
            padding: 0.75rem;
            background-color: ${({ theme }) => theme.colors.whiteColor};

            &:focus {
              border: solid 2px ${({ theme }) => theme.colors.darkColor};
            }
          }

          &:last-of-type {
            grid-column: 1 / 3;
          }
        }

        button {
          background-color: ${({ theme }) => theme.colors.darkColor};
          color: ${({ theme }) => theme.colors.whiteColor};
          padding: 0.75rem;
          border: solid 2px ${({ theme }) => theme.colors.darkColor};
          transition: all 0.75s ease-out;
          font-weight: 600;

          &:hover {
            background-color: transparent;
            color: ${({ theme }) => theme.colors.darkColor};
          }
        }
      }
    }
  }

  @keyframes wave-animation {
    0% {
      transform: rotate(0deg);
    }
    10% {
      transform: rotate(14deg);
    }
    20% {
      transform: rotate(-8deg);
    }
    30% {
      transform: rotate(14deg);
    }
    40% {
      transform: rotate(-4deg);
    }
    50% {
      transform: rotate(10deg);
    }
    60% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }
`;
