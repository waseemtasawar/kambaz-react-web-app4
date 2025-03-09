import { ListGroup } from "react-bootstrap";
export function BootstrapLists() {
    return (
      <div id="wd-css-styling-lists">
        <h2>Favorite Movies</h2>
        <ListGroup>
          <ListGroup.Item active>Aliens</ListGroup.Item>
          <ListGroup.Item>Terminator</ListGroup.Item>
          <ListGroup.Item>Blade Runner</ListGroup.Item>
          <ListGroup.Item>Lord of the Rings</ListGroup.Item>
          <ListGroup.Item disabled>Star Wars</ListGroup.Item>
        </ListGroup>
      </div>
    );
  }