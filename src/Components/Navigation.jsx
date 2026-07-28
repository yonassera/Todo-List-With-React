export default function Navigation() {
  return (
    <>
      <nav>
        <div className="nav-btn-container">
          <button className="btn nav-btn">Active</button>
          <button className="btn nav-btn">Completed</button>
          <button className="btn nav-btn">All</button>
        </div>
        <p className="task-left">{"4"} tasks left</p>
      </nav>
    </>
  );
}
