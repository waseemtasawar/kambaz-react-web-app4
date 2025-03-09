import  { useState } from "react";
export default function ObjectStateVariables() {
  const [person, setPerson] = useState({ name: "Peter", age: 24 });
  return (
    <div>
      <h2>Object State Variables</h2>
      <input
        value={person.name}
        onChange={(e) => setPerson({ ...person, name: e.target.value })}
      />
      <input
        value={person.age}
        onChange={(e) => setPerson({ ...person, age: parseInt(e.target.value) })}
      />
    </div>
  );
}