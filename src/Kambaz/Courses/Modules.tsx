import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { addModule, deleteModule, editModule, updateModule } from "./Modules/reducer";
import ModulesControls from "./Modules/ModulesControls";
import { BsGripVertical } from "react-icons/bs";
import LessonControlButtons from "./Modules/LessonControlButtons";
import ModuleControlButtons from "./Modules/ModuleControlButtons";

export default function Modules() {
  const { cid } = useParams();
  const dispatch = useDispatch();
  const modules = useSelector((state: any) => state.modulesReducer.modules);
  const [moduleName, setModuleName] = React.useState("");

  const addModuleHandler = () => {
    dispatch(addModule({ name: moduleName, course: cid }));
    setModuleName("");
  };

  const deleteModuleHandler = (moduleId: string) => {
    dispatch(deleteModule(moduleId));
  };

  const editModuleHandler = (moduleId: string) => {
    dispatch(editModule(moduleId));
  };

  // const updateModuleHandler = (updatedModule: any) => {
  //   dispatch(updateModule(updatedModule));
  // };

  return (
    <div id="wd-modules">
      <ModulesControls
        moduleName={moduleName}
        setModuleName={setModuleName}
        addModule={addModuleHandler}
      />
      <br /><br /><br />

      <ul className="list-group rounded-0">
        {modules
          .filter((module: any) => module.course === cid)
          .map((module: any) => (
            <li key={module._id} className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
              <div className="wd-title p-3 ps-2 bg-secondary d-flex justify-content-between">
                <BsGripVertical className="me-2 fs-3" />

                {module.editing ? (
                  <input
                    className="form-control"
                    value={module.name}
                    onChange={(e) => {
                      dispatch(updateModule({ ...module, name: e.target.value }));
                    }}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        dispatch(updateModule({ ...module, editing: false }));
                      }
                    }}
                  />
                ) : (
                  <span>{module.name}</span>
                )}

                <ModuleControlButtons
                  moduleId={module._id}
                  deleteModule={() => deleteModuleHandler(module._id)}
                  editModule={() => editModuleHandler(module._id)}
                />
              </div>

              <ul className="wd-lessons list-group rounded-0">
                <li className="wd-lesson list-group-item p-3 ps-1 d-flex justify-content-between">
                  LEARNING OBJECTIVES
                  <LessonControlButtons />
                </li>
                <li className="wd-lesson list-group-item p-3 ps-1 d-flex justify-content-between">
                  Introduction to the course
                  <LessonControlButtons />
                </li>
                <li className="wd-lesson list-group-item p-3 ps-1 d-flex justify-content-between">
                  Learn what is Web Development
                  <LessonControlButtons />
                </li>
              </ul>
            </li>
          ))}
      </ul>
    </div>
  );
}
