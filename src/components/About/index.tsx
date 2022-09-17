import { ABOUT } from "../../constants/about"
import { AboutUs } from "./styles"

export const About = () => {
    return (
        <AboutUs>
            <div className="container">
                <div className="display">
                    <div className="about__title">
                        <h4>Let's Connect</h4>
                        <h1>Conectando<br/>você ao<br/>seu público</h1>
                        <div className="status">
                            <div className="projects">
                                <h4>105+</h4>
                                <span>Projetos</span>
                            </div>
                            <div className="clients">
                                <h4>13+</h4>
                                <span>Clientes</span>
                            </div>
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