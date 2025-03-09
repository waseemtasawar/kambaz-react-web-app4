import { createSlice } from "@reduxjs/toolkit";
import db from "../Database";
import { v4 as uuidv4 } from "uuid";
const initialState = {
  enrollments: db.enrollments || [],
};

const enrollmentsSlice = createSlice({
  name: "enrollments",
  initialState,
  reducers: {
    enrollStudent: (state, action) => {
      const newenrollment = { _id: uuidv4(), ...action.payload };
      state.enrollments.push(newenrollment);
      console.log(state.enrollments);
    },
    unenrollStudent: (state, action) => {
      const { userId, courseId } = action.payload;
      state.enrollments = state.enrollments.filter(
        (enrollment) => !(enrollment.course === courseId && enrollment.user === userId)
      );
    },
     
  },
});

export const { enrollStudent, unenrollStudent } = enrollmentsSlice.actions;
export default enrollmentsSlice.reducer;
