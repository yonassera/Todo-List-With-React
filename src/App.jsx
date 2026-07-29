import "./App.css";
import TodoInput from "./Components/TodoInput";
import Tasks from "./Components/Tasks";
import Header from "./Components/Header";
import Navigation from "./Components/Navigation";
import { useEffect, useState } from "react";

export default function App() {
  const [input, setInput] = useState("");
  const [tasksArray, setTasksArray] = useState([]);
  const [filteredTasks, setFilteredTasks] = useState([]);
  const [filter, setFilter] = useState("all");
  const [activeTasks, setActiveTasks] = useState();

  useEffect(() => {
    const savedData = localStorage.getItem("tasks");
    const tasks = JSON.parse(savedData) ?? [];
    setTasksArray(tasks);
  }, []);

  useEffect(() => {
    filterTasks(filter);
    calculateTaskLeft();
    localStorage.setItem("tasks", JSON.stringify(tasksArray));
  }, [tasksArray]);

  function createTask() {
    const taskObject = {
      id: crypto.randomUUID(),
      text: input,
      isCompleted: false,
    };
    const tempTaskArray = [taskObject, ...tasksArray];
    setTasksArray(tempTaskArray);
  }

  function deleteTask(taskId) {
    const tempTaskArray = tasksArray.filter((taskObj) => taskObj.id !== taskId);
    setTasksArray(tempTaskArray);
  }

  function toggleState(taskId) {
    const tempTaskArray = tasksArray.map((taskObj) => {
      if (taskObj.id === taskId) {
        return { ...taskObj, isCompleted: !taskObj.isCompleted };
      }
      return taskObj;
    });
    setTasksArray(tempTaskArray);
  }

  function calculateTaskLeft() {
    const activeTasks = tasksArray.filter(
      (taskObj) => taskObj.isCompleted === false,
    );
    setActiveTasks(activeTasks.length);
  }

  function filterTasks(type) {
    setFilter(type);
    if (type === "active") {
      const tempArray = tasksArray.filter(
        (taskObj) => taskObj.isCompleted === false,
      );
      setFilteredTasks(tempArray);
    } else if (type === "completed") {
      const tempArray = tasksArray.filter(
        (taskObj) => taskObj.isCompleted === true,
      );
      setFilteredTasks(tempArray);
    } else if (type === "all") {
      const tempArray = tasksArray;
      setFilteredTasks(tempArray);
    }
  }

  function clearCompleted() {
    const tempArray = tasksArray.filter(
      (taskObj) => taskObj.isCompleted !== true,
    );
    setTasksArray(tempArray);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if (input) {
      createTask();
      setInput("");
    }
  };

  const handleInput = (event) => {
    const text = event.currentTarget.value;
    setInput(text);
  };

  const handleDelete = (event) => {
    const taskId = event.currentTarget.dataset.id;
    if (taskId) deleteTask(taskId);
  };

  return (
    <>
      <div className="main-container">
        <div className="container">
          <Header />
          <div className="task-body">
            <TodoInput
              handleInput={handleInput}
              handleSubmit={handleSubmit}
              input={input}
            />
            <div className="task-container">
              <Navigation
                filterTasks={filterTasks}
                filter={filter}
                activeTasks={activeTasks}
              />
              <Tasks
                toggleState={toggleState}
                tasks={filteredTasks}
                deleteTask={deleteTask}
              />
            </div>
            <button onClick={clearCompleted} className="btn clear-btn">
              Clear Completed
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
