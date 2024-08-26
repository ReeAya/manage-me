export default function Sidebar() {
  return (
    <aside className="w-1/3 px-8 py-16 bg-zinc-500 text-stone-50 md:w-72 rounded-r-xl">
      <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">
        My projects
      </h2>
      <div>
        <button className="px-4 py-2 text-xs md:text-base rounded-md bg-zinc-200 text-zinc-600 hover:bg-zinc-600 hover:text-zinc-100">
          + Add new project
        </button>
      </div>
      <ul></ul>
    </aside>
  );
}
