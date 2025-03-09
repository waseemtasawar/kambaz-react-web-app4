import  { useState } from "react";
export default function DateStateVariables() {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <div>
      <h2>Date State Variables</h2>
      <input
        type="date"
        value={startDate.toISOString().split("T")[0]}
        onChange={(e) => setStartDate(new Date(e.target.value))}
      />
    </div>
  );
}