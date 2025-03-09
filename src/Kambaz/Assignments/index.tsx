import { useParams, Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { FaSearch, FaPlus, FaTrash } from "react-icons/fa";
import { deleteAssignment } from "./reducer";
import { useState } from "react";

export default function Assignments() {
  const { cid } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const [assignmentToDelete, setAssignmentToDelete] = useState<string | null>(null);

  const assignments = useSelector((state: any) => state.assignmentsReducer?.assignments || [])
    .filter((assignment: any) => assignment.course === cid);

  const handleDelete = (assignmentId: string) => {
    setAssignmentToDelete(assignmentId);
  };

  const confirmDelete = () => {
    if (assignmentToDelete) {
      dispatch(deleteAssignment(assignmentToDelete));
      setAssignmentToDelete(null);
    }
  };

  return (
    <div id="wd-assignments" className="p-3">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <div className="input-group w-50">
          <span className="input-group-text"><FaSearch /></span>
          <input type="text" className="form-control" placeholder="Search for Assignments" />
        </div>
        <div>
          <button className="btn btn-danger me-2"><FaPlus /> Group</button>
          <button className="btn btn-danger" onClick={() => navigate(`/Kambaz/Courses/${cid}/Assignments/new`)}>
            <FaPlus /> Assignment
          </button>
        </div>
      </div>

      <h3 className="d-flex align-items-center justify-content-between border-bottom pb-2">
        ASSIGNMENTS <small className="text-muted">40% of Total</small>
        <button className="btn btn-outline-secondary"><FaPlus /></button>
      </h3>

      <ul className="list-group mt-3">
        {assignments.map((assignment: any) => (
          <li key={assignment._id} className="list-group-item d-flex justify-content-between align-items-center">
            <Link to={`/Kambaz/Courses/${cid}/Assignments/${assignment._id}`} className="fw-bold text-decoration-none">
              {assignment.title}
            </Link>
            <button className="btn btn-danger btn-sm" onClick={() => handleDelete(assignment._id)}>
              <FaTrash />
            </button>
          </li>
        ))}
      </ul>

      {assignmentToDelete && (
        <div className="modal fade show d-block" tabIndex={-1} role="dialog">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Confirm Delete</h5>
                <button type="button" className="btn-close" onClick={() => setAssignmentToDelete(null)}></button>
              </div>
              <div className="modal-body">
                <p>Are you sure you want to delete this assignment?</p>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={() => setAssignmentToDelete(null)}>
                  Cancel
                </button>
                <button type="button" className="btn btn-danger" onClick={confirmDelete}>
                  Yes, Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
