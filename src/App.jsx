import { BrowserRouter, Route, Routes } from "react-router-dom";
import CreadeAds from "./components/Pages/Employer/CreateAds";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CreadeAds />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
