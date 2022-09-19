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
                            <img src="https://preview.redd.it/2zp0fvem63y51.jpg?auto=webp&s=e4efdea2dd10be127a97a97f4f5691d776ce724a" alt="" />
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