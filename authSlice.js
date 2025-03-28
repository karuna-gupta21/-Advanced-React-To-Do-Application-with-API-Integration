import { createSlice } from "@reduxjs/toolkit";

const users = [
  { username: "admin", password: "password" },
  { username: "user1", password: "12345" },
];
const authSlice = createSlice({
  name: "auth",
  initialState: { isAuthenticated: localStorage.getItem("auth") === "true" },

  reducers: {
    login: (state, action) => {
      const { username, password } = action.payload;
      const user = users.find(
        (u) => u.username === username && u.password === password
      );
      if (user) {
        state.isAuthenticated = true;
        state.currentUser = username;
        localStorage.setItem("auth", "true");
        localStorage.setItem("user", "username");
      }
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.currentUser = null;
      localStorage.removeItem("auth");
      localStorage.removeItem("user");
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
