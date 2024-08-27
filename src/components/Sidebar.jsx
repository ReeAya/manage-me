import Button from "./Button";

export default function Sidebar({
  onStartAddingProject,
  projects,
  onSelectProject,
  selectedProjectID,
}) {
  return (
    <aside className="w-1/3 px-8 py-16 bg-zinc-500 text-stone-50 md:w-72 rounded-r-xl">
      <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">
        My projects
      </h2>
      <div>
        <Button onClick={onStartAddingProject}> + Add new project</Button>
      </div>
      <ul className="mt-8">
        {projects.map((project) => {
          let cssClasses =
            "w-full text-left px-2 py-1 rounded-sm my-1  hover:text-zinc-200 hover:bg-zinc-800";

          if (project.id === selectedProjectID) {
            cssClasses += " bg-zinc-800 text-zinc-200";
          } else {
            cssClasses += " text-zinc-300";
          }
          return (
            <li key={project.id}>
              <button
                className={cssClasses}
                onClick={() => onSelectProject(project.id)}
              >
                {project.title}
              </button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
