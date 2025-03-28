# -Advanced-React-To-Do-Application-with-API-Integration
                                   
A modern, feature-rich To-Do Application built with React, Redux Toolkit, and API integration. Users can manage their tasks, check real-time weather conditions, and experience a beautiful, interactive UI.
Features
📝 Task Management System
✔ Add, delete, and manage tasks dynamically
✔ Categorize tasks by priority (High, Medium, Low)
✔ Tasks are stored using Redux state management
✔ Persist tasks using LocalStorage

🌦️ Weather API Integration
✔ Fetches real-time weather data from OpenWeather API
✔ Automatically detects user’s location
✔ Users can search for weather in a specific city
✔ Displays temperature, humidity, wind speed, and conditions

🔐 User Authentication
✔ Login system using Redux (No backend required)
✔ Predefined credentials (See below)
✔ Prevents unauthorized access to the dashboard

🎨 Beautiful UI with Modern Design
✔ Glassmorphism UI with clean animations & transitions
✔ Responsive design (Works on desktop, tablet, and mobile)
✔ Dark mode-ready (Optional feature)

Technologies Used
Technology	Purpose
React.js-	Frontend framework for building UI
Redux Toolkit-	State management for tasks & authentication
Redux Thunk -	Middleware for handling API calls
React Router	-Navigation & protected routes
OpenWeather API	-Fetching real-time weather updates
LocalStorage	-Storing task data locally
CSS (Glassmorphism)-	Beautiful, responsive UI


Use the following credentials to log in:

1: username = admin , password = password
2: username = user1 , password = 12345


How It Works
1️⃣ User Login
Users enter admin as username and password as password

If credentials are correct, redirects to Dashboard

2️⃣ Adding a Task
Users type a task, select priority, and click "Add Task"

The task appears instantly in the task list

3️⃣ Managing Tasks
Delete tasks by clicking the delete button

Tasks are categorized by priority (High, Medium, Low)

4️⃣ Viewing Weather
The app detects user location automatically

Users can search for weather by city

Displays temperature, condition, humidity, wind speed

5️⃣ Logout
Clicking Logout redirects back to the login page

