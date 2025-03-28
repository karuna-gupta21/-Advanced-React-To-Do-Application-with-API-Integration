import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "./taskSlice";
import weatherReducer from "./weatherSlice";
import authReducer from "./authSlice";
const store = configureStore({
  reducer: {
    tasks: taskReducer,
    weather: weatherReducer,
    auth: authReducer,
  },
});

export default store;
