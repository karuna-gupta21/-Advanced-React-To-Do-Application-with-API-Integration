import { useState } from "react";
import { useDispatch } from "react-redux";
import { logout } from "../store/authSlice";
import { useNavigate } from "react-router-dom";
import TaskInput from "../Components/TaskInput";
import TaskList from "../Components/TaskList";
import WeatherInfo from "../Components/WeatherInfo";
import "./Dashboard.css";
import { FaSignOutAlt, FaTasks, FaCloudSun } from "react-icons/fa";

const Dashboard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState("tasks");

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  return (
    <div className="dashboard-container">
      <div className="sidebar">
        <h2>Task Manager</h2>
        <ul>
          <li
            className={activeSection === "tasks" ? "active" : ""}
            onClick={() => setActiveSection("tasks")}
          >
            <FaTasks /> Tasks
          </li>
          <li
            className={activeSection === "weather" ? "active" : ""}
            onClick={() => setActiveSection("weather")}
          >
            <FaCloudSun /> Weather
          </li>
        </ul>
        <button className="logout-btn" onClick={handleLogout}>
          <FaSignOutAlt /> Logout
        </button>
      </div>

      <div className="main-content">
        <h1 className="dashHeading">Welcome to Your Dashboard</h1>
        {activeSection === "tasks" ? (
          <div className="widget-container">
            <div className="widget">
              <TaskInput />
              <TaskList />
            </div>
          </div>
        ) : (
          <div className="widget weather-widget">
            <WeatherInfo />
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
