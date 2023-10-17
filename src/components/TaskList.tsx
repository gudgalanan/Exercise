import { useState } from "react";
import useTasks from "../hooks/useTasks";

const TaskList = () => {
  const { data, error } = useTasks();
  const [selectedTasks, setSelectedTasks] = useState<string[]>([]);

  const handleSelectedTasks = (taskId: string) => {
    if (selectedTasks.includes(taskId)) {
      setSelectedTasks(selectedTasks.filter((id) => id !== taskId));
    } else {
      setSelectedTasks([...selectedTasks, taskId]);
    }
  };
  return (
    <>
      <h1>To Do List</h1>
      <ul>
        {data.map((task) => (
          <li key={task.id}>
            <input
              type="checkbox"
              checked={selectedTasks.includes(task.id)}
              onChange={() => handleSelectedTasks(task.id)}
            />
            <span>{task.title}</span>
            <button>Detail</button>
            <button>Remove</button>
          </li>
        ))}
      </ul>
      {selectedTasks.length > 0 && (
        <div className="bulk-box">
          <span>Bulk Action:</span>
          <button>Remove</button>
          <button>Done</button>
        </div>
      )}
    </>
  );
};

export default TaskList;
