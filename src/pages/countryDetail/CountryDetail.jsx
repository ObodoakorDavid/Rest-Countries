import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./CountryDetail.css";
import { FaArrowLeftLong } from "react-icons/fa6";
import Loading from "../../utils/Loading";

const CountryDetail = ({ lightMode }) => {
  const { countryName } = useParams();
  const [country, setCountry] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    const getACountry = async () => {
      try {
        const response = await fetch(
          `https://restcountries.com/v3.1/name/${countryName}`
        );
        const result = await response.json();
        console.log(result[0]);
        setCountry(result[0]);
      } catch (error) {
        setError("Ooops! Something went wrong, Please Refresh.");
      } finally {
        setIsLoading(false);
      }
    };

    setTimeout(() => {
      getACountry();
    }, 3000);
  }, []);

  if (isLoading) {
    return <Loading isLoading={isLoading} lightMode={lightMode} />;
  }

  if (error) {
    return <p className="mt-5">{error}</p>;
  }

  const handleGoBack = () => {
    navigate(-1);
  };

  const languages = Object.values(country.languages)
    .map((language) => {
      return language;
    })
    .join(", ");

  const currencies = country.currencies
    ? Object.values(country.currencies)[0].name
    : "No Currency";

  return (
    <div className="country-detail">
      <div className="container text-start py-5">
        <button
          onClick={handleGoBack}
          className="px-5 py-2 border-0 mb-5 d-flex gap-2 align-items-center rounded-2 bg-elements custom-text-white shadow-lg"
        >
          <FaArrowLeftLong />
          Back
        </button>

        <div className="d-flex flex-column gap-5 flex-md-row">
          <img
            className="detail-flag"
            src={country.flags.png}
            alt={country.flags.alt}
          />
          <div className="d-flex flex-column gap-4">
            <div className="inner-main d-md-flex align-items-center gap-5">
              <div>
                <p className="fw-bold fs-1">{country.name.common}</p>
                <p>
                  <span className="fw-semibold">Native Name: </span>
                  {Object.values(country.name.nativeName)[0].common}
                </p>
                <p>
                  <span className="fw-semibold">Population: </span>
                  {country.population}
                </p>
                <p>
                  <span className="fw-semibold">Region: </span> {country.region}
                </p>
                <p>
                  <span className="fw-semibold">Sub Region: </span>
                  {country.subregion}
                </p>
                <p>
                  <span className=" fw-semibold">Capital: </span>
                  {country.capital ? country.capital : "No Capital"}
                </p>
              </div>
              <div className="other-side">
                <p>
                  <span className="fw-semibold"> Top Level Domain: </span>
                  {country.tld[0]}
                </p>
                <p>
                  <span className="fw-semibold"> Currencies: </span>
                  {currencies}
                </p>
                <p>
                  <span className="fw-semibold"> Languages: </span>
                  {languages}
                </p>
              </div>
            </div>
            <div className="border-div">
              <p>borders</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryDetail;
