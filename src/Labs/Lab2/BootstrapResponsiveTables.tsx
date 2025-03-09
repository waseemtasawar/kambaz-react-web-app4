import { Table } from "react-bootstrap";
export function BootstrapResponsiveTables() {
    return (
      <div id="wd-css-responsive-tables">
        <h2>Responsive Tables</h2>
        <Table responsive>
          <thead>
            <tr>
              {Array(6).fill(<th>Very long set of columns</th>)}
            </tr>
          </thead>
          <tbody>
            {Array(2).fill(
              <tr>
                {Array(6).fill(<td>Very long set of columns</td>)}
              </tr>
            )}
          </tbody>
        </Table>
      </div>
    );
  }