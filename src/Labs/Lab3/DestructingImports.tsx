import Math, { add, subtract } from "./Math";
import * as Mathematica from "./Math";
export default function DestructingImports() {
  return (
    <div id="wd-destructuring-imports">
      <h2>Destructuring Imports</h2>
      <table>
        <tr><td>{Math.add(2, 3)}</td><td>{Mathematica.add(2, 3)}</td><td>{add(2, 3)}</td></tr>
        <tr><td>{Math.subtract(5, 1)}</td><td>{Mathematica.subtract(5, 1)}</td><td>{subtract(5, 1)}</td></tr>
      </table>
      <hr />
    </div>
  );
}
