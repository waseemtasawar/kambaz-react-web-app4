import React from "react";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { addModule, deleteModule, updateModule, editModule } from "./reducer";
import ModuleControlButtons from "./ModuleControlButtons";
import ModuleControls from "./ModulesControls";

export default function Modules() {
  const { cid } = useParams();
  const modules = useSelector((state: any) => state.modulesReducer.modules);
  const dispatch = useDispatch();
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

  const updateModuleHandler = (module: any) => {
    dispatch(updateModule(module));
  };

  return (
    <div className="wd-modules">
      <ModuleControls
        setModuleName={setModuleName}
        moduleName={moduleName}
        addModule={addModuleHandler}
      />
      
      <ul className="list-group rounded-0">
        {modules
          .filter((module: any) => module.course === cid)
          .map((module: any) => (
            <li key={module._id} className="list-group-item">
              {module.editing ? (
                <input
                  className="form-control"
                  value={module.name}
                  onChange={(e) =>
                    updateModuleHandler({ ...module, name: e.target.value })
                  }
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      updateModuleHandler({ ...module, editing: false });
                    }
                  }}
                />
              ) : (
                <span>{module.name}</span>
              )}
              
              <ModuleControlButtons
                moduleId={module._id}
                deleteModule={deleteModuleHandler}
                editModule={editModuleHandler}
              />
            </li>
          ))}
      </ul>
    </div>
  );
}
