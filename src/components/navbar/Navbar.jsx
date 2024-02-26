import React from "react";
import { IoMdMoon } from "react-icons/io";

const Navbar = ({ lightMode, setLightMode }) => {
  const handleLightMode = () => {
    // if (root.classList.contains("light-mode")) {
    //   root.classList.remove("light-mode");
    // } else {
    //   root.classList.add("light-mode");
    // }

    // root.classList.toggle("light-mode");
    setLightMode(!lightMode);
  };

  return (
    <div className="bg-elements">
      <div className="container">
        <div className="d-flex justify-content-between py-4">
          <h1 className="fs-3">Where in the world?</h1>

          <div
            onClick={handleLightMode}
            className="d-flex align-items-center gap-2"
            style={{
              cursor: "pointer",
            }}
          >
            <IoMdMoon />
            <p className="m-0">Dark Mode</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
