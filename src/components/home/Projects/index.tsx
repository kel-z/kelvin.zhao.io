import ProjectItem from "./ProjectItem";
import projects from "./ProjectsList";

const Projects = () => {
  projects.sort((a, b) => a.order - b.order);

  return (
    <div className="my-5">
      <h1 className="text-center text-3xl font-semibold">Passion Projects</h1>
      <div className="w-full max-w-full border-b border-t border-neutral-800 bg-neutral-900">
        <div className="flex flex-wrap justify-center gap-2 p-3 shadow-inner">
          {projects.map((project, index) => (
            <ProjectItem project={project} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
