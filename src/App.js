import "./App.css";
import logo from "./image/logo.png";
import Login from "./Composants/User/Login";
import SignUp from "./Composants/User/SignUp";
import ClientStorage from "./Composants/ClientStorage/ClientStorage";
import AdminDashboard from "./Composants/Admin/AdminDashboard";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const numberOfColumns = 10;
  const columns = [];

  for (let i = 0; i < numberOfColumns; i++) {
    columns.push(<div key={i} className="column"></div>);
  }
  return (
    <div className="background">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/ClientStorage" element={<ClientStorage />} />
          <Route path="/AdminDashboard" element={<AdminDashboard />} />
        </Routes>
      </BrowserRouter>
      <div className="container">
        <div></div>
        <img src={logo} alt="Logo" className="logo" />
        {columns}
      </div>
      <div></div>
    </div>
  );
}

export default App;
