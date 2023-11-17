import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePageJob from "./components/Pages/Jobseeker/HomePage/HomePage";
import MyJobStreet from "./components/Pages/Jobseeker/MyJobStreet/MyJobStreet";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePageJob />} />
          {/* <Route path="/createAds" element={<HomePageJob />} /> */}
          <Route path="/MyJobstreet" element={<MyJobStreet />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
