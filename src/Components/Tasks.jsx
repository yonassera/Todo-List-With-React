export default function Tasks({ handleCheckBox, tasks, handleDelete }) {
  if (tasks.length === 0) {
    return <p className="no-tasks-text">No tasks yet.</p>;
  }
  return (
    <>
      <div className="tasks">
        {tasks.map((taskObj) => {
          return (
            <div className="task" key={taskObj.id}>
              <label>
                <input
                  checked={taskObj.isCompleted}
                  onChange={handleCheckBox}
                  data-id={taskObj.id}
                  type="checkbox"
                />
                {taskObj.isCompleted ? <s>{taskObj.text}</s> : taskObj.text}
              </label>
              <svg
                onClick={handleDelete}
                data-id={taskObj.id}
                className="del-btn"
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#e3e3e3"
              >
                <path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z" />
              </svg>
            </div>
          );
        })}
      </div>
    </>
  );
}
