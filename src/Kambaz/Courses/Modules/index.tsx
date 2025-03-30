import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import * as coursesClient from "../client";
import * as modulesClient from "./client";
import {
  setModules,
  addModule,
  deleteModule,
  updateModule,
  editModule,
} from "./reducer";
import ModuleControlButtons from "./ModuleControlButtons";
import ModuleControls from "./ModulesControls";

export default function Modules() {
  const { cid } = useParams();
  const modules = useSelector((state: any) => state.modulesReducer.modules);
  const dispatch = useDispatch();
  const saveModule = async (module: any) => {
    await modulesClient.updateModule(module);
    dispatch(updateModule(module));
  };
  const removeModule = async (moduleId: string) => {
    await modulesClient.deleteModule(moduleId);
    dispatch(deleteModule(moduleId));
  };
  const createModuleForCourse = async () => {
    if (!cid) return;
    const newModule = { name: moduleName, course: cid };
    const module = await coursesClient.createModuleForCourse(cid, newModule);
    dispatch(addModule(module));
  };
  const fetchModules = async () => {
    const modules = await coursesClient.findModulesForCourse(cid as string);
    dispatch(setModules(modules));
  };
  useEffect(() => {
    fetchModules();
  }, []);

  const [moduleName, setModuleName] = React.useState("");

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
        addModule={createModuleForCourse}
      />

      <ul className="list-group rounded-0">
        {modules.map((module: any) => (
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
                    saveModule({ ...module, editing: false });
                  }
                }}
              />
            ) : (
              <span>{module.name}</span>
            )}

            <ModuleControlButtons
              moduleId={module._id}
              deleteModule={(moduleId) => removeModule(moduleId)}
              editModule={editModuleHandler}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
