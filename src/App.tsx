import { useState } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import { Task } from "./data/task";
import useTasks from "./hooks/useTasks";

function App() {
  const { data } = useTasks(); // Get the initial tasks from the useTasks hook.

  const [tasks, setTasks] = useState<Task[]>(data); // Initialize tasks state with initial data.

  const addTask = (newTask: Task) => {
    setTasks([...tasks, newTask]);
  };

  return (
    <>
      <TaskForm onAdd={addTask} />
      <TaskList tasks={tasks} setTasks={setTasks} />
    </>
  );
}

export default App;
