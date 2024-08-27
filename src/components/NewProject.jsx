import Input from "./Input";

export default function NewProject() {
  return (
    <div className="w-[35rem] mt-16">
      <menu className="flex items-center justify-end gap-4 my-4">
        <li className="">
          <button className="text-zinc-800 hover:text-zinc-950 rounded-md border px-6 py-2 border-zinc-600">
            Cancel
          </button>
        </li>
        <li>
          <button className="bg-zinc-800 text-zinc-50 hover:bg-zinc-950 px-6 py-2 rounded-md">
            Save
          </button>
        </li>
      </menu>
      <div>
        <Input label="Title" />
        <Input label="Description" textarea={true} />
        <Input label="Due Date" />
      </div>
    </div>
  );
}
