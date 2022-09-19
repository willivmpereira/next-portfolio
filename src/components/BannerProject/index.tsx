import { BannerProjectContainer } from "./styled"

interface BannerProjectProps {
    title: 'string',
    type: 'string',
    imgUrl: 'string'
}

export const BannerProject = ({title, type, imgUrl}) => {
    return(
        <BannerProjectContainer imgUrl={imgUrl}>
            <div className="overlay"/>
            <section>
                <h1>{title}</h1>
                <h2>{type}</h2>
            </section>
        </BannerProjectContainer>
    )
}