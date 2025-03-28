import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../store/taskSlice";

import "./TaskInput.css";
const TaskInput = () => {
  const [task, setTask] = useState("");
  const dispatch = useDispatch();
  const [priority, setPriority] = useState("Medium");
  const [error, setError] = useState("");

  const handleTask = () => {
    if (task.trim()) {
      dispatch(addTask({ text: task, priority }));
      setTask("");
      setPriority("Medium");
    }
    if (!task.trim()) {
      setError("Task cannot be empty!");
      return;
    }
  };

  return (
    <div className="task-input-container">
      <h2 className="heading">Add New Task</h2>

      <input
        type="text"
        placeholder="Enter Todo.."
        className="input-group"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <div className="input-group">
        <select
          id="prioritySelect"
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
        >
          <option>High</option>
          <option>Medium</option>
          <option>Low</option>
        </select>
      </div>
      <button className="button" onClick={handleTask}>
        Add Todo
      </button>
      {error && <p className="error-text">{error}</p>}
    </div>
  );
};

export default TaskInput;
