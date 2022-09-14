import styled from "styled-components";

export const AboutUs = styled.div`
    padding: 5rem 0;
    background-color: ${({ theme }) => theme.colors.whiteColor};

    .display {
        display: grid;
        grid-template-columns: 1fr 1fr;

        @media screen and (max-width: 768px) {
            grid-template-columns: 1fr;
        }

        .about__title{
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

            .status {
                display: flex;
                gap: 2rem;

                .projects {
                    text-align: center;
                }
                .clients {
                    text-align: center;
                }
            }

        }
        .about__description {
            p {
                margin-top: 2rem;
                line-height: 1.7;

            }
        }
    }
`