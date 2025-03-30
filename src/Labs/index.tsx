import { Route, Routes, Link } from "react-router-dom";
import Lab1 from "./Lab1";
import Lab2 from "./Lab2";
import Lab3 from "./Lab3";
import Lab4 from "./Lab4";
import Lab5 from "./Lab5";
import TOC from "./TOC";

export default function Labs() {
    return (
        <div>
            <h1>Labs</h1>
            <Routes>
                <Route path="/" element={<TOC />} />
                <Route path="Lab1" element={<Lab1 />} />
                <Route path="Lab2" element={<Lab2 />} />
                <Route path="Lab3" element={<Lab3 />} />
                <Route path="Lab4" element={<Lab4 />} />
                <Route path="Lab5" element={<Lab5 />} />
            </Routes>
            <Link to="/Kambaz/">Back to Kambaz Application</Link>
        </div>
    );
}
