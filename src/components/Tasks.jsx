import NewTask from "./NewTask";

export default function Tasks({ tasks, onAdd, onDelete }) {
  return (
    <section className="">
      <h2 className="text-2xl font-bold text-zinc-700 mb-4 uppercase">Tasks</h2>
      <NewTask onAdd={onAdd} />
      {tasks.length === 0 && (
        <p className="text-zinc-800 my-4">
          This project does not have any tasks
        </p>
      )}
      {
        <ul className="p-4 mt-8 rounded-sm bg-zinc-100">
          {tasks.map((task) => (
            <li key={task.id} className="flex justify-between my-4">
              <span className="text-zinc-900 ">{task.text}</span>
              <button
                className="text-zinc-900  hover:text-red-700"
                onClick={() => onDelete(task.id)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      }
    </section>
  );
}
