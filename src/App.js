import { Route, Router, Routes } from "react-router-dom";
import "./App.css";
import Sidebar from "./components/Sidebar";
import Analytics from "./pages/Analytics";
import Dashboard from "./pages/Dashboard";
import FileManager from "./pages/FileManager";
import Messages from "./pages/Messages";
import Saved from "./pages/Saved";
import Setting from "./pages/Setting";
import Users from "./pages/Users";
import DatePicker from "./pages/DatePicker";

function App() {
  return (
    <>
      <Sidebar>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/users" element={<Users />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/fileManager" element={<FileManager />} />
          <Route path="/datePicker" element={<DatePicker />} />
          <Route path="/saved" element={<Saved />} />
          <Route path="/setting" element={<Setting />} />
          <Route path="*" element={<>Not Found</>} />
        </Routes>
      </Sidebar>
    </>
  );
}

export default App;
