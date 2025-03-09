import { InputGroup, FormControl } from "react-bootstrap";

export default function BootstrapAddons() {
  return (
    <div id="wd-css-styling-addons">
      <h3>Addons</h3>
      <InputGroup className="mb-3">
        <InputGroup.Text>@</InputGroup.Text>
        <FormControl />
      </InputGroup>
      <InputGroup>
        <InputGroup.Text>$</InputGroup.Text>
        <FormControl />
        <InputGroup.Text>0.00</InputGroup.Text>
      </InputGroup>
    </div>
  );
}
