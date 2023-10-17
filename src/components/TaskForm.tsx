import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
const schema = z.object({
  title: z.string().min(3),
  desc: z.string().min(3),
  date: z.date().min(new Date(), { message: "Too old" }),
  //   priority: z.enum("priority"),
});

type TaskFormData = z.infer<typeof schema>;

const TaskForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TaskFormData>({ resolver: zodResolver(schema) });
  return (
    <>
      <h1>New Task</h1>
      <form>
        <input {...register("title")} type="text" id="title" />
        <label htmlFor="desc">
          <textarea {...register("desc")} id="desc"></textarea>
        </label>
        <div className="row">
          <label htmlFor="date">
            <input type="date" id="date" {...register("date")} />
          </label>
          <label htmlFor="priority">
            <select id="priority">
              <option value="low">low</option>
              <option value="normal">normal</option>
              <option value="high">high</option>
            </select>
          </label>
        </div>
        <button type="submit">Add</button>
      </form>
    </>
  );
};

export default TaskForm;
