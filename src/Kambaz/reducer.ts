import { createSlice } from "@reduxjs/toolkit";
import db from "./Database";
import { v4 as uuidv4 } from "uuid";

const initialState = {
  courses: db.courses,
};

const coursesSlice = createSlice({
  name: "courses",
  initialState,
  reducers: {
    setCourses: (state, action) => {
      state.courses = action.payload;
    },
    addCourse: (state, action) => {
      const newCourse = { _id: uuidv4(), ...action.payload };
      state.courses.push(newCourse);
    },
    deleteCourse: (state, action) => {
      state.courses = state.courses.filter((c) => c._id !== action.payload);
    },
    updateCourse: (state, action) => {
      state.courses = state.courses.map((c) =>
        c._id === action.payload._id ? action.payload : c
      );
    },
  },
});

export const { setCourses, addCourse, deleteCourse, updateCourse } =
  coursesSlice.actions;
export default coursesSlice.reducer;
