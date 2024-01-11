import { useState } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import task from "./data/tasklist";

export interface Task {
  id: string;
  title: string;
  completed: boolean;
}
function App() {
  const [tasks, setTasks] = useState<Task[]>(task);
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
