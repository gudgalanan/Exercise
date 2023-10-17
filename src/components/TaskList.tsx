import { useState } from "react";
import useTasks from "../hooks/useTasks";

const TaskList = () => {
  const { data, error } = useTasks();
  const [tasks, setTasks] = useState(data);
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
              <button>Detail</button>
              <button onClick={() => removeTask(task.id)}>Remove</button>
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
