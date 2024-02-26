import React, { useEffect, useState } from "react";
import SearchSection from "../../components/searchSection/SearchSection";
import Countries from "../../components/countries/Countries";

const Home = ({ lightMode }) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [filteredCountries, setFilteredCountries] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("https://restcountries.com/v3.1/all");
      const countries = await res.json();
      // console.log(countries);
      setIsLoading(false);
      setData(countries);

      // countries.forEach((d) => {
      //   console.log(d.languages);
      //   // console.log(Object.values(d.currencies)[0].name);
      // });
    };

    setTimeout(() => {
      fetchData();
    }, 2000);
  }, []);

  const handleSearch = (userInput) => {
    const searchData = data.filter((country) =>
      country.name.common
        .toLowerCase()
        .startsWith(userInput.toLowerCase().trim())
    );
    console.log(searchData);
    setFilteredCountries(searchData);
  };

  const handleRegion = (choosenRegion) => {
    const searchedRegion = data.filter((country) =>
      choosenRegion == "All" ? country : country.region === choosenRegion
    );
    setFilteredCountries(searchedRegion);
  };

  return (
    <div>
      <SearchSection
        handleSearch={handleSearch}
        isLoading={isLoading}
        handleRegion={handleRegion}
      />
      <Countries
        countries={filteredCountries.length > 0 ? filteredCountries : data}
        isLoading={isLoading}
        lightMode={lightMode}
      />
      {/* {data ? <Countries countries={data} /> : null}
      {isLoading ? <p>Loading...</p> : null} */}
    </div>
  );
};

export default Home;
