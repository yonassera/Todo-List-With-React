export default function Navigation({ filterTasks, filter, activeTasks }) {
  return (
    <>
      <nav>
        <div className="nav-btn-container">
          <button
            onClick={() => filterTasks("all")}
            className={filter === "all" ? "btn nav-btn active" : "btn nav-btn"}
          >
            All
          </button>
          <button
            onClick={() => filterTasks("active")}
            className={
              filter === "active" ? "btn nav-btn active" : "btn nav-btn"
            }
          >
            Active
          </button>
          <button
            onClick={() => filterTasks("completed")}
            className={
              filter === "completed" ? "btn nav-btn active" : "btn nav-btn"
            }
          >
            Completed
          </button>
        </div>
        <p className="task-left">
          {activeTasks === 1
            ? activeTasks + " task left"
            : activeTasks + " tasks left"}
        </p>
      </nav>
    </>
  );
}
