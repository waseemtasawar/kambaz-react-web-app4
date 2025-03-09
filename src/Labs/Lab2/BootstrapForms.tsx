import { FormGroup,FormLabel,FormControl } from "react-bootstrap";
export function BootstrapForms() {
    return (
      <div id="wd-css-styling-forms">
        <h2>Forms</h2>
        <FormGroup className="mb-3">
          <FormLabel>Email Address</FormLabel>
          <FormControl type="email" placeholder="name@example.com" />
        </FormGroup>
        <FormGroup className="mb-3">
          <FormLabel>Example textarea</FormLabel>
          <FormControl as="textarea" rows={3} />
        </FormGroup>
      </div>
    );
  }