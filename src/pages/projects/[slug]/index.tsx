
import { BannerProject } from "../../components/BannerProject"
import { ProjectContainer } from "./styled"

export default function ProjectSlug()  {
    return (
        <ProjectContainer>
            <BannerProject 
                title="Coffee Delivery"
                type="WebApp"
                imgUrl="https://i.postimg.cc/rpCkmjyT/coffee-delivery.png"
            />
            
        </ProjectContainer>
    )
}