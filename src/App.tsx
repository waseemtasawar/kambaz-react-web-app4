
import { HashRouter, Navigate, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./Kambaz/store";
import Kambaz from "./Kambaz";
import Labs from "./Labs";

export default function App() {
  return (
    <Provider store={store}>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/Kambaz" />} />
          <Route path="/Kambaz/*" element={<Kambaz />} />
          <Route path="/Labs/*" element={<Labs />} />
        </Routes>
      </HashRouter>
    </Provider>
  );
}
