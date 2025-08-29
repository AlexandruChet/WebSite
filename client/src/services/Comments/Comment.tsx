import { useState } from "react";
import "./Comment.scss";

const Comment = () => {
  const [tasks, setTasks] = useState<string[]>(["Best", "WebSite", "Ever"]);
  const [newTask, setNewTask] = useState<string>("");

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    setNewTask(event.target.value);
  }

  function addTask() {
    if (newTask.trim() !== "") {
      setTasks((t) => [...t, newTask]);
      setNewTask("");
    }
  }

  function deleteTask(index: number) {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  }

  function moveTaskUp(index: number) {
    if (index > 0) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index - 1]] = [
        updatedTasks[index - 1],
        updatedTasks[index],
      ];
      setTasks(updatedTasks);
    }
  }

  function moveTaskDown(index: number) {
    if (index < tasks.length - 1) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index + 1]] = [
        updatedTasks[index + 1],
        updatedTasks[index],
      ];
      setTasks(updatedTasks);
    }
  }

  return (
    <main className="comment">
      <div className="comments-list">
        <h1>ToDo List</h1>
        <div>
          <input
            type="text"
            placeholder="Enter a task..."
            value={newTask}
            onChange={handleInputChange}
          />
          <button className="add-button" onClick={addTask}>
            Add
          </button>
        </div>
        <ol>
          {tasks.map((task, index) => (
            <li key={index}>
              <span className="text">{task}</span>
              <button
                onClick={() => deleteTask(index)}
                className="delete-button"
              >
                Delete
              </button>
              <button onClick={() => moveTaskUp(index)} className="move-button">
                ☝
              </button>
              <button
                onClick={() => moveTaskDown(index)}
                className="move-button"
              >
                👇
              </button>
            </li>
          ))}
        </ol>
      </div>
    </main>
  );
};

export default Comment;
