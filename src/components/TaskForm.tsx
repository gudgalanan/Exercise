import { FormEvent, useState } from "react";
import { Task } from "../App";

interface Props {
  onAdd: (newTask: Task) => void;
}

const TaskForm = ({ onAdd }: Props) => {
  const [title, setTitle] = useState("");

  const handleCreateTask = (event: FormEvent) => {
    event.preventDefault();
    const newTask = {
      id: Date.now().toString(),
      title,
      completed: false,
    };
    onAdd(newTask);
  };
  return (
    <>
      <h1>New Task</h1>
      <form onSubmit={handleCreateTask}>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          id="title"
        />
        <button type="submit">Add</button>
      </form>
    </>
  );
};

export default TaskForm;
