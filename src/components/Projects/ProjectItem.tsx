import Link from "next/link"
import { Content } from "./style"

// interface ProjectItemProps {
//   slug: string;
//   title: string;
//   description: string;
//   id: string;
//   image: string[];
//   tags: string[];
//   type: string;
// }

export const ProjectItem = ({type, title, description, image, slug, tags}: any) => {
    return (
        <Content>
            <div className="text-content test">
                <h5>{title}</h5>
                <h4 className="portfolio-item-title">{type}</h4>
                <div className="textbox">
                    <p>{description.text}</p>
                </div>
                <div className="tecnologias">
                    {
                        tags[0].tag.map(itemTag => (
                            
                            <span key={itemTag} >{itemTag}</span>
                        ))
                    }
                </div>
                <Link href={`/projects/${slug}`}>
                    <a>Visualizar projeto</a>
                </Link>
            </div>
            <div className="imgContent test">
                <img src={image.url} alt="" />
            </div>
        </Content>
    )
}