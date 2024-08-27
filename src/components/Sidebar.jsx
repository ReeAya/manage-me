import Button from "./Button";

export default function Sidebar({ onStartAddingProject }) {
  return (
    <aside className="w-1/3 px-8 py-16 bg-zinc-500 text-stone-50 md:w-72 rounded-r-xl">
      <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">
        My projects
      </h2>
      <div>
        <Button onClick={onStartAddingProject}> + Add new project</Button>
      </div>
      <ul></ul>
    </aside>
  );
}
