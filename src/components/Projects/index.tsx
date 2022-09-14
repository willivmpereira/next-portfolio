import { ProjectsContent } from "./style"
import { ProjectItem } from "./ProjectItem"

export const Projects = () => {
    return (
        <ProjectsContent>
            <div className="container">
                <ProjectItem
                    type="Website"
                    title="Coffee Delivery"
                    description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, quia?"
                    image="https://img.freepik.com/vetores-gratis/pagina-inicial-do-web-design-dos-desenhos-animados_52683-70880.jpg?w=2000"
                    tags={['ReactJs', 'TypeScript', 'Styled Components']}
                />
                <ProjectItem
                    type="Website"
                    title="Coffee Delivery"
                    description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, quia?"
                    image="https://img.freepik.com/vetores-gratis/pagina-inicial-do-web-design-dos-desenhos-animados_52683-70880.jpg?w=2000"
                    tags={['ReactJs', 'TypeScript', 'Styled Components']}
                />
            </div>
        </ProjectsContent>
    )
}