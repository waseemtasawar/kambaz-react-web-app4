import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { addAssignment, updateAssignment } from "./reducer";

export default function AssignmentEditor() {
  const { cid, aid } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const assignments = useSelector(
    (state: any) => state.assignmentsReducer.assignments
  );

  const existingAssignment = assignments.find(
    (assignment: any) => assignment._id === aid
  );

  const [assignment, setAssignment] = useState(
    existingAssignment || {
      title: "",
      description: "",
      points: "",
      dueDate: "",
      availableFrom: "",
      availableUntil: "",
      course: cid,
    }
  );

  const handleSave = () => {
    if (existingAssignment) {
      dispatch(updateAssignment(assignment));
    } else {
      dispatch(addAssignment(assignment));
    }
    navigate(`/Kambaz/Courses/${cid}/Assignments`);
  };

  return (
    <div>
      <h1>{existingAssignment ? "Edit Assignment" : "New Assignment"}</h1>
      <input
        value={assignment.title}
        onChange={(e) =>
          setAssignment({ ...assignment, title: e.target.value })
        }
        className="form-control mb-2"
        placeholder="Assignment Title"
      />
      <textarea
        value={assignment.description}
        onChange={(e) =>
          setAssignment({ ...assignment, description: e.target.value })
        }
        className="form-control mb-2"
        placeholder="Description"
      />
      <input
        type="number"
        value={assignment.points}
        onChange={(e) =>
          setAssignment({ ...assignment, points: e.target.value })
        }
        className="form-control mb-2"
        placeholder="Points"
      />
      <input
        type="date"
        value={assignment.dueDate}
        onChange={(e) =>
          setAssignment({ ...assignment, dueDate: e.target.value })
        }
        className="form-control mb-2"
      />
      <input
        type="date"
        value={assignment.availableFrom}
        onChange={(e) =>
          setAssignment({ ...assignment, availableFrom: e.target.value })
        }
        className="form-control mb-2"
      />
      <input
        type="date"
        value={assignment.availableUntil}
        onChange={(e) =>
          setAssignment({ ...assignment, availableUntil: e.target.value })
        }
        className="form-control mb-2"
      />
      <button onClick={handleSave} className="btn btn-primary me-2">
        Save
      </button>
      <button
        onClick={() => navigate(`/Kambaz/Courses/${cid}/Assignments`)}
        className="btn btn-secondary"
      >
        Cancel
      </button>
    </div>
  );
}
