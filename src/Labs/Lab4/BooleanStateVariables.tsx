import { useState } from "react";
export default function BooleanStateVariables() {
  const [done, setDone] = useState(true);
  return (
    <div>
      <h2>Boolean State Variables</h2>
      <label>
        <input type="checkbox" checked={done} onChange={() => setDone(!done)} /> Done
      </label>
      {done && <div className="alert alert-success">Yay! you are done</div>}
    </div>
  );
}