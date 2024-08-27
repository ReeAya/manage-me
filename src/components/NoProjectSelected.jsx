import noProjectImage from "../assets/memo.png";
import Button from "./Button";

export default function NoProjectSelected({ onStartAddingProject }) {
  return (
    <div className="mt-24 text-center w-2/3">
      <img
        className="w-16 h-16 object-contain mx-auto"
        src={noProjectImage}
        alt="An empty task list"
      />
      <h2 className="text-xl font-bold text-zinc-600 my-4">
        No Project Selected
      </h2>
      <p className="text-zinc-500 mb-4">
        Select a project or get started with a new one!
      </p>
      <p className="mt08">
        <Button
          className="bg-zinc-800 text-zinc-50 hover:bg-zinc-950 px-6 py-2 rounded-md"
          onClick={onStartAddingProject}
        >
          Create New Project
        </Button>
      </p>
    </div>
  );
}
