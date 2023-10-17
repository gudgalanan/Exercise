import tasklist from "../data/tasklist";
import { Task } from "../data/task";

const useTasks = () => ({ data: tasklist, error: null });

export default useTasks;
