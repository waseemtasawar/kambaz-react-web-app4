import React, { useState, useEffect } from "react";
const REMOTE_SERVER = import.meta.env.VITE_REMOTE_SERVER ;

export default function WorkingWithObjectsmy() {
  const [module, setModule] = useState({
    id: "", name: "", description: "", course: ""
  });
  const [assignment, setAssignment] = useState({
    id: "", title: "", score: 0, completed: false
  });
  const [newModuleName, setNewModuleName] = useState("");
  const [newModuleDescription, setNewModuleDescription] = useState("");
  const [newAssignmentScore, setNewAssignmentScore] = useState(0);
  const [assignmentCompleted, setAssignmentCompleted] = useState(false);

  const fetchModule = async () => {
    const response = await fetch(`${REMOTE_SERVER}/lab5/module`);
    const data = await response.json();
    setModule(data);
  };

  const fetchModuleName = async () => {
    const response = await fetch(`${REMOTE_SERVER}/lab5/module/name`);
    const name = await response.text();
    setModule(prev => ({...prev, name}));
  };

  const updateModuleName = async () => {
    await fetch(`${REMOTE_SERVER}/lab5/module/name/${newModuleName}`, {
      method: "POST"
    });
    fetchModule();
  };

  const updateModuleDescription = async () => {
    await fetch(`${REMOTE_SERVER}/lab5/module/description/${newModuleDescription}`, {
      method: "POST"
    });
    fetchModule();
  };

  const updateAssignmentScore = async () => {
    await fetch(`${REMOTE_SERVER}/lab5/assignment/score/${newAssignmentScore}`, {
      method: "PUT"
    });
    fetchAssignment();
  };

  const updateAssignmentCompleted = async () => {
    await fetch(`${REMOTE_SERVER}/lab5/assignment/completed/${assignmentCompleted}`, {
      method: "PUT"
    });
    fetchAssignment();
  };

  const fetchAssignment = async () => {
    const response = await fetch(`${REMOTE_SERVER}/lab5/assignment`);
    const data = await response.json();
    setAssignment(data);
  };

  useEffect(() => {
    fetchModule();
    fetchAssignment();
  }, []);

  return (
    <div id="wd-working-with-objects">
      <h3>Working With Objects</h3>
      
      <h4>Module</h4>
      <a className="btn btn-primary me-2" onClick={fetchModule}>
        Get Module
      </a>
      <a className="btn btn-primary" onClick={fetchModuleName}>
        Get Module Name
      </a>
      <div className="mt-3 p-3 border rounded">
        <pre>{JSON.stringify(module, null, 2)}</pre>
      </div>

      <h4 className="mt-3">Update Module</h4>
      <div className="row mb-2">
        <div className="col">
          <input className="form-control" value={newModuleName}
            onChange={(e) => setNewModuleName(e.target.value)}/>
          <button className="btn btn-warning mt-2" onClick={updateModuleName}>
            Update Module Name
          </button>
        </div>
        <div className="col">
          <input className="form-control" value={newModuleDescription}
            onChange={(e) => setNewModuleDescription(e.target.value)}/>
          <button className="btn btn-warning mt-2" onClick={updateModuleDescription}>
            Update Description
          </button>
        </div>
      </div>

      <h4 className="mt-3">Assignment</h4>
      <div className="mt-3 p-3 border rounded">
        <pre>{JSON.stringify(assignment, null, 2)}</pre>
      </div>

      <h4 className="mt-3">Update Assignment</h4>
      <div className="row mb-2">
        <div className="col">
          <input type="number" className="form-control" 
            value={newAssignmentScore}
            onChange={(e) => setNewAssignmentScore(parseInt(e.target.value))}/>
          <button className="btn btn-warning mt-2" onClick={updateAssignmentScore}>
            Update Score
          </button>
        </div>
        <div className="col">
          <div className="form-check mt-2">
            <input className="form-check-input" type="checkbox"
              checked={assignmentCompleted}
              onChange={(e) => setAssignmentCompleted(e.target.checked)}/>
            <label className="form-check-label">
              Completed
            </label>
          </div>
          <button className="btn btn-warning mt-2" onClick={updateAssignmentCompleted}>
            Update Completed Status
          </button>
        </div>
      </div>
    </div>
  );
}