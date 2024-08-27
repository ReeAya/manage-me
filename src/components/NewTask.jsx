import { useState, useRef } from "react";
import Button from "./Button";
import Modal from "./Modal";

export default function NewTask({ onAdd }) {
  const [enteredTask, SetEnteredTask] = useState("");
  const modal = useRef();
  function handleChange(event) {
    SetEnteredTask(event.target.value);
  }

  function handleClick() {
    if (enteredTask.trim() === "") {
      modal.current.open();
      return;
    }
    onAdd(enteredTask);
    SetEnteredTask("");
  }
  return (
    <>
      <Modal buttonCaption="Close" ref={modal}>
        <h2 className="text-xl font-bold text-zinc-600 my-4">Invalid Input</h2>
        <p className="text-red-700 mb-4">Please enter valid text.</p>
      </Modal>
      <div className="flex items-center gap-4">
        <input
          type="text"
          className="w-64 px-2 py-1 rounded-sm bg-zinc-100"
          onChange={handleChange}
          value={enteredTask}
        />
        <Button onClick={handleClick}>Add Task</Button>
      </div>
    </>
  );
}
