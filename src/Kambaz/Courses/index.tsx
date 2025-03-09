import { Navigate, Route, Routes, useParams, useLocation } from "react-router-dom";
import { FaAlignJustify } from "react-icons/fa6";
import { useSelector } from "react-redux";
import CourseNavigation from "./Navigation";
import Modules from "./Modules";
import Home from "../Home";
import Assignments from "../Assignments";
import AssignmentEditor from "../Assignments/Editor";
import ProtectedRoute from "../Account/ProtectedRoute";

interface CourseProps {
  courses?: any[]; 
}

export default function Courses({ courses }: CourseProps) {
  const { cid } = useParams<{ cid: string }>();
  const { pathname } = useLocation();
  const reduxCourses = useSelector((state: any) => state.coursesReducer.courses);
  const courseList = courses || reduxCourses;
  const course = courseList.find((c: any) => c._id === cid);

  return (
    <ProtectedRoute>
      <div id="wd-courses">
        <h2 className="text-danger">
          <FaAlignJustify className="me-3 fs-4 mb-1" />
          {course ? `${course.name} > ${pathname.split("/")[4] || "Home"}` : "Course Not Found"}
        </h2>
        
        <hr />
        <table>
          <tbody>
            <tr>
              <td valign="top">
                <CourseNavigation />
              </td>
              <td valign="top">
                <Routes>
                  <Route path="/" element={<Navigate to="Home" />} />
                  <Route path="Home" element={<Home />} />
                  <Route path="Modules" element={<Modules />} />
                  <Route path="Piazza" element={<h2>Piazza</h2>} />
                  <Route path="Zoom" element={<h2>Zoom</h2>} />
                  <Route path="Assignments" element={<Assignments />} />
                  <Route path="Assignments/new" element={<AssignmentEditor />} />
                  <Route path="Assignments/:aid" element={<AssignmentEditor />} />
                  <Route path="Quizzes" element={<h2>Quizzes</h2>} />
                  <Route path="Grades" element={<h2>Grades</h2>} />
                  <Route path="People" element={<h2>People</h2>} />
                </Routes>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </ProtectedRoute>
  );
}
