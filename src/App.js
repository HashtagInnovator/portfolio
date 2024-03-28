import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BouncingCubes from "./Components/LandingPage/BoucingCubes/BouncingCubes";

function App() {
  return (
    <>
      <div className="bg-[#25293C] min-h-screen text-white font-courgette">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<BouncingCubes />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
