import { useEffect, useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import CountryDetail from "./pages/countryDetail/CountryDetail";
import Error404 from "./pages/error404/Error404";
import Navbar from "./components/navbar/Navbar";

function App() {
  const [lightMode, setLightMode] = useState(() => {
    const userMode = JSON.parse(localStorage.getItem("userMode"));
    return userMode || false;
  });

  useEffect(() => {
    // updated the localstorage to match the current mode
    const root = document.querySelector("#root");
    if (lightMode) {
      root.classList.add("light-mode");
    } else {
      root.classList.remove("light-mode");
    }

    localStorage.setItem("userMode", JSON.stringify(lightMode));
  }, [lightMode]);

  return (
    <>
      <BrowserRouter>
        <Navbar lightMode={lightMode} setLightMode={setLightMode} />
        <Routes>
          <Route path="/" element={<Home lightMode={lightMode} />} />
          <Route
            path="/detail/:countryName"
            element={<CountryDetail lightMode={lightMode} />}
          />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
