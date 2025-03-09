import { Link } from "react-router-dom";
import "./account.css";
export default function Signup() {
  return (
    <div id="wd-signup-screen">
      <div className="card">
        <h2>Signup</h2>
        <input id="wd-signup-username" type="text" className="form-control" placeholder="Username" />
        <input id="wd-signup-password" type="password" className="form-control" placeholder="Password" />
        <button id="wd-signup-btn" className="btn btn-primary">Signup</button>
        <div className="text-center mt-2">
          <Link id="wd-signin-link" to="/Kambaz/Account/Signin" className="text-decoration-none">
            Signin
          </Link>
        </div>
      </div>
    </div>
  );
}
