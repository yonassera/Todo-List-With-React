import TodoItem from "./TodoItem";

export default function Tasks({ tasks, toggleState, deleteTask }) {
  if (tasks.length === 0) {
    return <p className="no-tasks-text">No tasks yet.</p>;
  }
  return (
    <>
      <div className="tasks">
        <TodoItem tasks={tasks} toggleState={toggleState} deleteTask={deleteTask} />
      </div>
    </>
  );
}
