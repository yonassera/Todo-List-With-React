export default function Navigation({ handleNavClick, filter, activeTasks }) {
  return (
    <>
      <nav>
        <div className="nav-btn-container">
          <button
            data-type="all"
            onClick={handleNavClick}
            className={filter === "all" ? "btn nav-btn active" : "btn nav-btn"}
          >
            All
          </button>
          <button
            data-type="active"
            onClick={handleNavClick}
            className={
              filter === "active" ? "btn nav-btn active" : "btn nav-btn"
            }
          >
            Active
          </button>
          <button
            data-type="completed"
            onClick={handleNavClick}
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
