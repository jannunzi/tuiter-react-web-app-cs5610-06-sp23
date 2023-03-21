import { configureStore } from "@reduxjs/toolkit";
import tuitsReducer from "./tuits-reducer";
import usersReducer from "./users-reducer";

const store = configureStore({
  reducer: {
    tuits: tuitsReducer,
    users: usersReducer,
  },
});

export default store;
