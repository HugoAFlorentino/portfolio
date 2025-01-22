import ProjectsCard from './ProjectsCard';
import { projects } from '../data';
import SectionTitle from './SectionTitle';

const text = (
  <p>
    Web <span className="text-emerald-600">Creations</span>
  </p>
);

const Projects = () => {
  return (
    <section className="py-20 align-element scroll-mt-20" id="projects">
      <SectionTitle text={text} />
      <div className="py-16 grid lg:grid-cols-2 xl:grid-flow-col-3 gap-8">
        {projects.map((project) => {
          return <ProjectsCard key={project.id} {...project} />;
        })}
      </div>
    </section>
  );
};

export default Projects;
