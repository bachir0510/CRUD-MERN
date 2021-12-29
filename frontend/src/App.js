import CreacteStudent from "./components/CreateStudent";
import StudentList from "./components/StudentList";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<StudentList />} />
          <Route path="/create" element={<CreacteStudent />} />
          <Route path="/edit/:id" element={<CreacteStudent />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
