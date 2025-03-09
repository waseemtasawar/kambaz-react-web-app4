import { FaTrash, FaEdit } from "react-icons/fa";

export default function ModuleControlButtons({ moduleId, deleteModule, editModule }: {
  moduleId: string;
  deleteModule: (moduleId: string) => void;
  editModule: (moduleId: string) => void;
}) {
  return (
    <div className="float-end">
      <FaEdit className="text-primary me-3" onClick={() => editModule(moduleId)} />
      <FaTrash className="text-danger" onClick={() => deleteModule(moduleId)} />
    </div>
  );
}
