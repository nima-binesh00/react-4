import { useState, useEffect } from "react";
import "./Todolist.css";
export default function ToDoApp() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  useEffect(() => {
    const fetchTasks = async () => {
      const res = await fetch(
        "https://jsonplaceholder.typicode.com/todos?_start=0&_limit=5"
      );
      const data = await res.json();
      const formatted = data.map((task) => ({
        id: task.id,
        title: task.title,
        completed: task.completed,
      }));
      setTasks(formatted);
    };

    fetchTasks();
  }, []);

  const addTask = () => {
    if (newTask.trim() === "") return;

    const newItem = {
      id: Date.now(),
      title: newTask,
      completed: false,
    };

    setTasks([newItem, ...tasks]);
    setNewTask("");
  };

  const toggleComplete = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="container mt-5" style={{ maxWidth: "600px" }}>
      <h2 className="text-center mb-4">ToDo List</h2>
      <div className="input-group mb-3">
        <input
          className="form-control"
          placeholder="New Task"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button className="btn " onClick={addTask}>
          Add
        </button>
      </div>

      <ul className="list-group">
        {tasks.map((task) => (
          <li
            key={task.id}
            className="list-group-item d-flex justify-content-between align-items-center li-items"
          >
            <div>
              <input
                type="checkbox"
                className="form-check-input me-2"
                checked={task.completed}
                onChange={() => toggleComplete(task.id)}
              />
              <span
                style={{
                  textDecoration: task.completed ? "line-through" : "none",
                }}
              >
                {task.title}
              </span>
            </div>
            <button
              className="btn btn-danger btn-sm"
              onClick={() => deleteTask(task.id)}
            >
              <i className="bi bi-trash"></i>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
