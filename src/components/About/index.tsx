import { ABOUT } from "../../constants/about"
import { AboutUs } from "./styles"
import Imagem from 'next/image'
import MyPhoto from '../../assets/img/me.webp'

export const About = () => {
    return (
        <AboutUs>
            <div className="container">
                <div className="display">
                    <div className="about__title">
                        <h4>Let's Connect</h4>
                        <h1>Who am i</h1>
                        <div className="photo__me">
                            <Imagem src="https://media.graphassets.com/xy6LMU3ySM6FYMJAh855?_gl=1*1ojau6z*_ga*OTgwNjIwNjkzLjE2NjM4NDc2Mjg.*_ga_G6FYGSYGZ4*MTY2NTE4OTk2MS4xMi4xLjE2NjUxOTA3OTcuNTcuMC4w" alt="Foto do William" width={350} height={466} />
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