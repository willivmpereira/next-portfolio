import Link from "next/link"
import { Content } from "./style"

interface ProjectItemProps {
    type: string,
    title: string,
    description: string,
    image: string,
    tags: string[],
    slug: string
}

export const ProjectItem = ({type, title, description, image, tags, slug}: ProjectItemProps) => {
    return (
        <Content>
            <div className="text-content test">
                <h5>{title}</h5>
                <h4 className="portfolio-item-title">{type}</h4>
                <div className="textbox">
                    <p>{description}</p>
                </div>
                <div className="tecnologias">
                    {
                        tags.map(itemTag => (
                            
                            <span>{itemTag}</span>
                        ))
                    }
                </div>
                <Link href={`/${slug}`}>
                    <a>Visualizar projeto</a>
                </Link>
            </div>
            <div className="imgContent test">
                <img src={image} alt="" />
            </div>
        </Content>
    )
}