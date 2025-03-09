export default function ModuleEditor({
  dialogTitle, moduleName, setModuleName, addModule
}: {
  dialogTitle: string;
  moduleName: string;
  setModuleName: (name: string) => void;
  addModule: () => void;
}) {
  return (
    <div className="modal fade" id="wd-add-module-dialog" data-bs-backdrop="static">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5"> {dialogTitle} </h1>
            <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
          </div>
          <div className="modal-body">
            <input
              className="form-control"
              defaultValue={moduleName}
              placeholder="Module Name"
              onChange={(e) => setModuleName(e.target.value)}
            />
          </div>
          <div className="modal-footer">
            <button className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
            <button
              onClick={addModule}
              className="btn btn-danger"
              data-bs-dismiss="modal">
              Add Module
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
