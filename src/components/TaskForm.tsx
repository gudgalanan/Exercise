const TaskForm = () => {
  return (
    <>
      <h1>New Task</h1>
      <form>
        <input type="text" id="title" />
        <label htmlFor="desc">
          <textarea id="desc"></textarea>
        </label>
        <div className="row">
          <label htmlFor="date">
            <input type="date" id="date" />
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
