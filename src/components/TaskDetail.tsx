import { useState } from "react";
import { Task } from "../App";

interface Props {
  tasks: Task;
  onUpdate: (updatedTask: Task) => void;
  onClose: () => void;
}

const TaskDetail = ({ tasks, onUpdate, onClose }: Props) => {
  const [title, setTitle] = useState(tasks.title);

  const handleUpdateTask = () => {
    const updatedTask: Task = {
      ...tasks,
      title,
    };
    onUpdate(updatedTask);
    onClose();
  };

  return (
    <form onSubmit={handleUpdateTask}>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        type="text"
        id="title"
      />
      <button type="submit">Update</button>
    </form>
  );
};

export default TaskDetail;
