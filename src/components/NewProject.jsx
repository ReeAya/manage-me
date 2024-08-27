import { useRef } from "react";
import Input from "./Input";

export default function NewProject({ onAdd }) {
  const title = useRef();
  const description = useRef();
  const dueDate = useRef();

  function handleSave() {
    const enteredTitle = title.current.value;
    const enteredDescription = description.current.value;
    const enteredDueDate = dueDate.current.value;
    // add validation

    onAdd({
      title: enteredTitle,
      description: enteredDescription,
      dueDate: enteredDueDate,
    });
  }
  return (
    <div className="w-[35rem] mt-16">
      <menu className="flex items-center justify-end gap-4 my-4">
        <li className="">
          <button className="text-zinc-800 hover:text-zinc-950 rounded-md border px-6 py-2 border-zinc-600">
            Cancel
          </button>
        </li>
        <li>
          <button
            onClick={handleSave}
            className="bg-zinc-800 text-zinc-50 hover:bg-zinc-950 px-6 py-2 rounded-md"
          >
            Save
          </button>
        </li>
      </menu>
      <div>
        <Input type="text" ref={title} label="Title" />
        <Input ref={description} label="Description" textarea={true} />
        <Input type="date" ref={dueDate} label="Due Date" />
      </div>
    </div>
  );
}
