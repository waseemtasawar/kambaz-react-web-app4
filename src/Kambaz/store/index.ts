import { configureStore } from "@reduxjs/toolkit";
import modulesReducer from "../Courses/Modules/reducer";
import accountReducer from "../Account/reducer";
import coursesReducer from "../reducer";
import enrollmentsReducer from "./reducer";

const store = configureStore({
  reducer: {
    modulesReducer,
    accountReducer,
    coursesReducer,
    enrollmentsReducer,
  },
});

export default store;
