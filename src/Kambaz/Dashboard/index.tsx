import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState, useEffect,Dispatch, SetStateAction  } from "react";
import { enrollStudent, unenrollStudent } from "../store/reducer";

interface DashboardProps {
  courses: any[];
  course: any;
  setCourse: Dispatch<SetStateAction<any>>;
  addNewCourse: (newCourse: any) => void;
  deleteCourse: (courseId: string) => void;
  updateCourse: (updatedCourse: any) => void;
}

export default function Dashboard({
  courses,
  course,
  setCourse,
  addNewCourse,
  deleteCourse,
  updateCourse,
}: DashboardProps) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const enrollments = useSelector((state: any) => state.enrollmentsReducer?.enrollments || []);
  const [filteredCourses, setFilteredCourses] = useState<any[]>([]);
  const [showAllCourses, setShowAllCourses] = useState(false);

  if (!currentUser) {
    return <h2>Please sign in to view your dashboard.</h2>;
  }

  useEffect(() => {
    if (!courses || !enrollments) return;

    if (currentUser?.role === "STUDENT") {
      setFilteredCourses(
        showAllCourses
          ? courses
          : courses.filter((course) =>
              enrollments.some(
                (enrollment: { user: string; course: string }) =>
                  enrollment.user === currentUser?._id && enrollment.course === course._id
              )
            )
      );
    } else {
      setFilteredCourses(courses);
    }
  }, [courses, enrollments, currentUser, showAllCourses]);

  const handleEnroll = (courseId: string) => {
    dispatch(enrollStudent({ user: currentUser._id, course: courseId }));
  };

  const handleUnenroll = (courseId: string) => {
    dispatch(unenrollStudent({ userId: currentUser._id, courseId }));
  };
  

  return (
    <div className="p-4" id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1>
      <hr />

      {currentUser?.role === "STUDENT" && (
        <button
          className="btn btn-info mb-3"
          onClick={() => setShowAllCourses(!showAllCourses)}
        >
          {showAllCourses ? "Show Enrolled Courses" : "Show All Courses"}
        </button>
      )}

      <h2 id="wd-dashboard-published">
        Published Courses ({filteredCourses.length})
      </h2>

      <div className="row" id="wd-dashboard-courses">
        {filteredCourses.length > 0 ? (
          filteredCourses.map((course) => {
            const isEnrolled = enrollments.some(
              (enrollment: { user: string; course: string }) =>
                enrollment.user === currentUser?._id && enrollment.course === course._id
            );

            return (
              <div key={course._id} className="col" style={{ width: "300px" }}>
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">{course?.name}</h5>
                    <p className="card-text">
                      {course?.description || "No description available"}
                    </p>
                    <button
                      className="btn btn-primary me-2"
                      onClick={() => navigate(`/Kambaz/Courses/${course._id}`)}
                    >
                      Go
                    </button>
                    {currentUser?.role === "STUDENT" && (
                      <>
                        {isEnrolled ? (
                          <button
                            className="btn btn-danger"
                            onClick={() => handleUnenroll(course._id)}
                          >
                            Unenroll
                          </button>
                        ) : (
                          <button
                            className="btn btn-success"
                            onClick={() => handleEnroll(course._id)}
                          >
                            Enroll
                          </button>
                        )}
                      </>
                    )}
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <p>No courses available.</p>
        )}
      </div>
    </div>
  );
}
