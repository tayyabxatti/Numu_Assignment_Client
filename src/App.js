import logo from "./logo.svg";
import "./App.css";
import UserTable from "./Components/UserTable";
import Userhobies from "./Components/Userhobies";
import { useState } from "react";

function App() {
  const [SelectedUser, setSelectedUser] = useState(null);
  return (
    <div className="App">
      <div className="d-flex ">
        <UserTable setSelectedUser={setSelectedUser} />
        <Userhobies SelectedUser={SelectedUser} />
      </div>
    </div>
  );
}

export default App;
