import { useRef } from "react";
import Input from "./Input";
import Modal from "./Modal";

export default function NewProject({ onAdd, onCancel }) {
  const title = useRef();
  const description = useRef();
  const dueDate = useRef();
  const modal = useRef();

  function handleSave() {
    const enteredTitle = title.current.value;
    const enteredDescription = description.current.value;
    const enteredDueDate = dueDate.current.value;

    if (
      enteredTitle.trim() === "" ||
      enteredDescription.trim() === "" ||
      enteredDueDate.trim() === ""
    ) {
      modal.current.open();
      //   exit after so onAdd does not run
      return;
    }
    onAdd({
      title: enteredTitle,
      description: enteredDescription,
      dueDate: enteredDueDate,
    });
  }
  return (
    <>
      <Modal buttonCaption="Close" ref={modal}>
        <h2 className="text-xl font-bold text-zinc-600 my-4">Invalid Input</h2>
        <p className="text-zinc-600 mb-4">
          Please enter a valid Title, Description and/or Due Date.
        </p>
      </Modal>
      <div className="w-[35rem] mt-16">
        <menu className="flex items-center justify-end gap-4 my-4">
          <li className="">
            <button
              onClick={onCancel}
              className="text-zinc-800 hover:text-zinc-950 rounded-md border px-6 py-2 border-zinc-600"
            >
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
    </>
  );
}
