import { useSelector, useDispatch } from "react-redux";
import { removeTask } from "../store/taskSlice";
import { FaTrash } from "react-icons/fa";
import "./TaskList.css";
const TaskList = () => {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();
  const getTasksByPriority = (priority) =>
    tasks.filter((task) => task.priority === priority);
  return (
    <div className="task-list-container">
      <h2 className="heading">📋 Your Tasks</h2>
      {tasks.length === 0 ? (
        <p className="no-tasks">No tasks available.</p>
      ) : null}
      {["High", "Medium", "Low"].map((priority) => (
        <div
          key={priority}
          className={`task-section ${priority.toLowerCase()}`}
        >
          <h3 className="priority-header">
            {priority === "High"
              ? "🔥 High Priority"
              : priority === "Medium"
              ? "⚡ Medium Priority"
              : " ✅ Low Priority"}
          </h3>
          {getTasksByPriority(priority).length === 0 ? (
            <p className="no-tasks">No {priority} priority tasks.</p>
          ) : (
            getTasksByPriority(priority).map((task) => (
              <div key={task.id} className="task-item">
                <span>{task.text}</span>
                <button onClick={() => dispatch(removeTask(task.id))}>
                  <FaTrash />
                </button>
              </div>
            ))
          )}
        </div>
      ))}
    </div>
  );
};

export default TaskList;
