export interface Task {
  id: string;
  title: string;
  desc?: string;
  date?: string;
  priority: string;
  completed: boolean;
}
