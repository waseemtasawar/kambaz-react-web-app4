
import { FormGroup, FormLabel } from "react-bootstrap";

export default function BootstrapRange() {
  return (
    <div id="wd-css-styling-range-and-sliders">
      <h3>Range</h3>
      <FormGroup controlId="wd-range1">
        <FormLabel>Example range</FormLabel>
        <input type="range" className="form-range" min="0" max="5" step="0.5" />
      </FormGroup>
    </div>
  );
}
