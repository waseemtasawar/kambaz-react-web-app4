import { configureStore } from "@reduxjs/toolkit";
import modulesReducer from "./Courses/Modules/reducer";
import accountReducer from "./Account/reducer";
import coursesReducer from "./reducer";
import assignmentsReducer from "./Assignments/reducer";
import enrollmentsReducer from "./store/reducer";
const store = configureStore({
  reducer: {
    modulesReducer,
    accountReducer,
    coursesReducer,
    assignmentsReducer,
    enrollmentsReducer,
  },
});

export default store;
