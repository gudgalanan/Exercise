import { useState } from "react";
import { Task } from "../data/task";

interface Props {
  tasks: Task;
  onUpdate: (updatedTask: Task) => void;
  onClose: () => void;
}

const TaskForm = ({ tasks, onUpdate, onClose }: Props) => {
  const [title, setTitle] = useState(tasks.title);
  const [desc, setDesc] = useState(tasks.desc);
  const [date, setDate] = useState(tasks.date);
  const [priority, setPriority] = useState(tasks.priority);

  const handleUpdateTask = () => {
    const updatedTask: Task = {
      ...tasks,
      title,
      desc,
      date,
      priority,
    };
    onUpdate(updatedTask);
    onClose();
  };

  return (
    <>
      <h1>New Task</h1>
      <form onSubmit={handleUpdateTask}>
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
        <button type="submit">Update</button>
      </form>
    </>
  );
};

export default TaskForm;
