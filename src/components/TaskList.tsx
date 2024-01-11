import { useState } from "react";
import TaskDetail from "./TaskDetail";
import { Task } from "../App";

interface Props {
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}

const TaskList = ({ tasks, setTasks }: Props) => {
  const [searchText, setSearchText] = useState("");

  const removeTask = (taskId: string) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const handleSearching = (e: any) => {
    setSearchText(e.target.value);
  };

  const [selectedTaskId, setSelectedTaskId] = useState<string | null>(null);

  const openTaskDetail = (taskId: string) => {
    setSelectedTaskId(taskId);
  };

  const closeTaskDetail = () => {
    setSelectedTaskId(null);
  };

  const updateTask = (updatedTask: Task) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === updatedTask.id ? { ...task, ...updatedTask } : task
      )
    );
  };

  return (
    <>
      <h1>To Do List</h1>
      <input
        type="text"
        placeholder="Searching..."
        value={searchText}
        onChange={handleSearching}
      />
      <ul>
        {tasks
          .filter((task) =>
            task.title.toLowerCase().includes(searchText.toLowerCase())
          )
          .map((task) => (
            <li className="taskItem" key={task.id}>
              <span>{task.title}</span>
              <button onClick={() => openTaskDetail(task.id)}>Detail</button>
              <button onClick={() => removeTask(task.id)}>Remove</button>
              {selectedTaskId === task.id && (
                <TaskDetail
                  tasks={task}
                  onUpdate={updateTask}
                  onClose={closeTaskDetail}
                />
              )}
            </li>
          ))}
      </ul>
    </>
  );
};

export default TaskList;
