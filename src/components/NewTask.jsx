import { useState } from "react";
import Button from "./Button";

export default function NewTask({ onAdd }) {
  const [enteredTask, SetEnteredTask] = useState();

  function handleChange(event) {
    SetEnteredTask(event.target.value);
  }

  function handleClick() {
    onAdd(enteredTask);
    SetEnteredTask("");
  }
  return (
    <div className="flex items-center gap-4">
      <input
        type="text"
        className="w-64 px-2 py-1 rounded-sm bg-zinc-100"
        onChange={handleChange}
        value={enteredTask}
      />
      <Button onClick={handleClick}>Add Task</Button>
    </div>
  );
}
