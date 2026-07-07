import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Program from "./pages/program";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/program" element={<Program />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;