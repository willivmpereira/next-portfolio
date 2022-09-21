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
                        <div className="photo__me">
                            <img src="https://i.imgur.com/HdW5ULT.jpeg" alt="" />
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