import { FormEvent, useState } from "react";
import { Task } from "../data/task";

interface Props {
  onAdd: (newTask: Task) => void;
}

const TaskForm = ({ onAdd }: Props) => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [date, setDate] = useState(new Date().toISOString().split("T")[0]);
  const [priority, setPriority] = useState("normal");

  const handleCreateTask = (event: FormEvent) => {
    event.preventDefault();
    const newTask = {
      id: Date.now().toString(),
      title,
      desc,
      date,
      priority,
      completed: false,
    };
    console.log(newTask);
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
        <label htmlFor="desc">
          <textarea
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            id="desc"
          ></textarea>
        </label>
        <div className="row">
          <label htmlFor="date">
            <input
              type="date"
              id="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              min={new Date().toISOString().split("T")[0]}
            />
          </label>
          <label htmlFor="priority">
            <select
              id="priority"
              value={priority}
              onChange={(e) => setPriority(e.target.value)}
            >
              <option value="low">low</option>
              <option value="normal">normal</option>
              <option value="high">high</option>
            </select>
          </label>
        </div>
        <button type="submit">Add</button>
      </form>
    </>
  );
};

export default TaskForm;
