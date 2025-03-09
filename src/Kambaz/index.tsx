import { Routes, Route, Navigate, useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addCourse, deleteCourse, updateCourse } from "./reducer";
import KambazNavigation from "./Navigation";
import Account from "./Account";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
import ProtectedRoute from "./Account/ProtectedRoute";
import "./styles.css";

export default function Kambaz() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const courses = useSelector((state: any) => state.coursesReducer?.courses || []);
  const enrollments = useSelector((state: any) => state.enrollmentsReducer?.enrollments || []);
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const [course, setCourse] = useState<any>({});
  const { cid } = useParams();

  const handleDeleteCourse = (courseId: string) => {
    if (currentUser?.role === "FACULTY") {
      dispatch(deleteCourse(courseId));
    }
  };

  const handleAddCourse = (newCourse: any) => {
    if (!currentUser || currentUser.role !== "FACULTY") return;

    const newCourseWithId = {
      ...newCourse,
      _id: `RS${Math.floor(Math.random() * 1000)}`,
      author: currentUser._id,
    };
    dispatch(addCourse(newCourseWithId));
  };

  const handleUpdateCourse = (updatedCourse: any) => {
    if (currentUser?.role === "FACULTY") {
      dispatch(updateCourse(updatedCourse));
    }
  };
  useEffect(() => {
    if (currentUser?.role === "STUDENT" && cid) {
      const isEnrolled = enrollments.some((enrollment: { user: string; course: string }) =>
        enrollment.user === currentUser._id && enrollment.course === cid
      );
      if (!isEnrolled) {
        navigate("/Kambaz/Dashboard", { replace: true });
      }
    }
  }, [cid, currentUser, enrollments, navigate]);

  return (
    <div id="wd-kambaz">
      <KambazNavigation />
      <div className="wd-main-content-offset p-3">
        <Routes>
          <Route path="/" element={<Navigate to="Account" />} />
          <Route path="/Account/*" element={<Account />} />
          <Route
            path="/Dashboard"
            element={
              <ProtectedRoute>
                <Dashboard
                  courses={courses}
                  course={course}
                  setCourse={setCourse}
                  addNewCourse={handleAddCourse}
                  deleteCourse={handleDeleteCourse}
                  updateCourse={handleUpdateCourse}
                />
              </ProtectedRoute>
            }
          />
          <Route
            path="/Courses/:cid/*"
            element={
              <ProtectedRoute>
                <Courses courses={courses} />
              </ProtectedRoute>
            }
          />
        </Routes>
      </div>
    </div>
  );
}
