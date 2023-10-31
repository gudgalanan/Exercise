import { useState } from "react";
import { Task } from "../data/task";
import TaskDetail from "./TaskDetail";

interface Props {
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}

const TaskList = ({ tasks, setTasks }: Props) => {
  const [selectedTasks, setSelectedTasks] = useState<string[]>([]);
  const [searchText, setSearchText] = useState("");

  //Handle selected tasks
  const handleSelectedTasks = (taskId: string) => {
    if (selectedTasks.includes(taskId)) {
      setSelectedTasks(selectedTasks.filter((id) => id !== taskId));
    } else {
      setSelectedTasks([...selectedTasks, taskId]);
    }
  };

  // Function to handle  remove task
  const removeTask = (taskId: string) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  // Function to handle bulk remove
  const handleBulkRemove = () => {
    setTasks(tasks.filter((task) => !selectedTasks.includes(task.id)));
    setSelectedTasks([]);
  };

  // Function to handle search
  const handleSearching = (e: any) => {
    setSearchText(e.target.value);
  };

  // const [showTaskDetail, setShowTaskDetail] = useState(false); // State to control the visibility of TaskDetail
  const [selectedTaskId, setSelectedTaskId] = useState<string | null>(null); // Store the selected task ID

  const openTaskDetail = (taskId: string) => {
    setSelectedTaskId(taskId);
  };

  // Function to close the TaskDetail component
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
              <input
                type="checkbox"
                checked={selectedTasks.includes(task.id)}
                onChange={() => handleSelectedTasks(task.id)}
              />
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
      {selectedTasks.length > 0 && (
        <div className="bulkBox">
          <span>Bulk Action:</span>
          <button onClick={handleBulkRemove}>Remove</button>
          <button>Done</button>
        </div>
      )}
    </>
  );
};

export default TaskList;
