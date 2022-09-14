import { ProjectsContent } from './style';
import { ProjectItem } from './ProjectItem';
import { PROJECTS } from '../../constants';

export const Projects = () => {
  
  return (
    <ProjectsContent>
      <div className="container">
        {PROJECTS.map(item => (
          <ProjectItem
            type={item.type}
            title={item.title}
            description={item.description}
            image={item.image}
            tags={item.tags}
          />
        ))}
      </div>
    </ProjectsContent>
  );
};
