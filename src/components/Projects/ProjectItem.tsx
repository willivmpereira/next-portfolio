import Link from "next/link"
import { Content } from "./style"

interface ProjectItemProps {
    type: string,
    title: string,
    description: string,
    image: string,
    tags: string[]
}

export const ProjectItem = ({type, title, description, image, tags}: ProjectItemProps) => {
    return (
        <Content>
            <div className="text-content">
                <h5>{type}</h5>
                <h4 className="portfolio-item-title">{title}</h4>
                <div className="textbox">
                    <p>{description}</p>
                </div>
                <div className="tecnologias">
                    {tags.map(tag => (
                        <span>{tag}</span>
                    )  )}
                </div>
            </div>
            <div className="imgContent">
                <Link href="/projeto">
                    <img src={image} alt="" />
                </Link>
            </div>
        </Content>
    )
}