import React, { useState } from "react";
import { IoMdSearch } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import DropDown from "../dropDown/DropDown";
import "./SearchSection.css";

const SearchSection = ({ handleSearch, isLoading, handleRegion }) => {
  const [toggleDropDown, setToggleDropDown] = useState(false);
  const [optionDisplay, setOptionDisplay] = useState("");

  const handleDropDown = () => {
    setToggleDropDown(!toggleDropDown);
  };

  const handleInputChange = (e) => {
    console.log(e.target.value);
    handleSearch(e.target.value);
  };

  return (
    <div>
      <div className="container">
        <div className="d-flex flex-column gap-4 text-start py-4 flex-md-row justify-content-between">
          <div className=" position-relative search-input">
            <IoMdSearch className="fs-2 position-absolute start-0 top-0 mt-3 ms-3" />
            <input
              disabled={isLoading}
              onChange={handleInputChange}
              className="border-0 py-3 rounded-2 ps-5 bg-elements custom-text-white w-100"
              type="text"
              placeholder="Search for a country..."
            />
          </div>
          <div
            onClick={handleDropDown}
            className="bg-elements dropdown1 py-3 px-4 position-relative rounded-2 d-flex align-items-center justify-content-between"
          >
            <p className="m-0">
              {optionDisplay === "" ? "Filter by region" : optionDisplay}
            </p>
            <IoIosArrowDown
              style={{
                transform: toggleDropDown ? "rotate(180deg)" : "rotate(0deg)",
              }}
            />
            {toggleDropDown ? (
              <DropDown
                optionDisplay={optionDisplay}
                setToggleDropDown={setToggleDropDown}
                setOptionDisplay={setOptionDisplay}
                handleRegion={handleRegion}
              />
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchSection;
