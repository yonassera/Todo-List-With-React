import "./App.css";
import TodoInput from "./Components/TodoInput";
import Tasks from "./Components/Tasks";
import Header from "./Components/Header";
import Navigation from "./Components/Navigation";
import { useEffect, useState } from "react";

class TaskConstructor {
  constructor(text) {
    this.id = crypto.randomUUID();
    this.text = text;
    this.isCompleted = false;
  }
}

export default function App() {
  const [input, setInput] = useState("");
  const [tasksArray, setTasksArray] = useState([]);

  useEffect(() => {
    const savedData = localStorage.getItem("tasks");
    const tasks = JSON.parse(savedData) ?? [];
    setTasksArray(tasks);
  }, []);

  function createTask(text) {
    const taskObject = new TaskConstructor(text);
    const modTaskArray = [taskObject, ...tasksArray];
    setTasksArray(modTaskArray);
    localStorage.removeItem("tasks");
    localStorage.setItem("tasks", JSON.stringify(modTaskArray));
  }

  function deleteTask(taskId) {
    const modTaskArray = tasksArray.filter((taskObj) => taskObj.id !== taskId);
    setTasksArray(modTaskArray);
    localStorage.removeItem("tasks");
    localStorage.setItem("tasks", JSON.stringify(modTaskArray));
  }

  function toggleState(taskId) {
    const modTaskArray = tasksArray.map((taskObj) => {
      if (taskObj.id === taskId) {
        taskObj.isCompleted === true
          ? (taskObj.isCompleted = false)
          : (taskObj.isCompleted = true);
        return taskObj;
      }
      return taskObj;
    });
    setTasksArray(modTaskArray);
    localStorage.clear();
    localStorage.setItem("tasks", JSON.stringify(modTaskArray));
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if (input) {
      createTask(input);
      setInput("");
    }
  };

  const handleCheckBox = (event) => {
    const taskId = event.currentTarget.dataset.id;
    if (taskId) toggleState(taskId);
  };

  const handleInput = (event) => {
    setInput(event.currentTarget.value);
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
              <Navigation />
              <Tasks
                handleCheckBox={handleCheckBox}
                tasks={tasksArray}
                handleDelete={handleDelete}
              />
            </div>
            <button className="btn clear-btn">Clear Completed</button>
          </div>
        </div>
      </div>
    </>
  );
}
