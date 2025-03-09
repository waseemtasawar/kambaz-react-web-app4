import ModuleEditor from "./ModuleEditor";

export default function ModuleControls({ moduleName, setModuleName, addModule }: {
  moduleName: string;
  setModuleName: (name: string) => void;
  addModule: () => void;
}) {
  return (
    <div id="wd-modules-controls" className="text-nowrap">
      <button
        className="btn btn-danger float-end"
        data-bs-toggle="modal"
        data-bs-target="#wd-add-module-dialog">
        + Module
      </button>
      <ModuleEditor
        dialogTitle="Add Module"
        moduleName={moduleName}
        setModuleName={setModuleName}
        addModule={addModule}
      />
    </div>
  );
}
