import { ABOUT } from "../../constants/about"
import { AboutUs } from "./styles"
import Imagem from 'next/image'

export const About = () => {
    return (
        <AboutUs>
            <div className="container">
                <div className="display">
                    <div className="about__title">
                        <h4>Let's Connect</h4>
                        <h1>Who am i</h1>
                        <div className="photo__me">
                            <Imagem src="https://i.imgur.com/HdW5ULT.jpeg" alt="Foto do William" width={350} height={466} />
                        </div>
                    </div>
                    <div className="about__description">
                        <p dangerouslySetInnerHTML={{ __html: ABOUT.description }}>
                        </p>
                    </div>
                </div>
            </div>
        </AboutUs>
    )
}