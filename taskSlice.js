import { createSlice } from "@reduxjs/toolkit";

const taskSlice = createSlice({
  name: "tasks",
  initialState: JSON.parse(localStorage.getItem("tasks")) || [],
  reducers: {
    addTask: (state, action) => {
      const newTask = {
        id: Date.now(),
        text: action.payload.text,
        priority: action.payload.priority,
      };
      state.push(newTask);
      localStorage.getItem("tasks", JSON.stringify(state));
    },
    removeTask: (state, action) => {
      const updateTask = state.filter((task) => task.id !== action.payload);
      localStorage.setItem("tasks", JSON.stringify(updateTask));
      return updateTask;
    },
  },
});

export const { addTask, removeTask } = taskSlice.actions;
export default taskSlice.reducer;
