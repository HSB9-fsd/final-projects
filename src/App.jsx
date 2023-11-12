import HomePageJob from "./components/Pages/Jobseeker/HomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePageJob />} />
          <Route path="/createAds" element={<HomePageJob />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
