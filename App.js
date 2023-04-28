import { Routes, Route } from "react-router-dom";
import "./App.css";
import Contact from "./comp/Contact";
import Education from "./comp/Education";
import Experience from "./comp/Experience";
import Confirmation from "./comp/Confirmation";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Contact />} />
        <Route path="/education" element={<Education />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/confirmation" element={<Confirmation />} />
      </Routes>
    </div>
  );
}

export default App;
