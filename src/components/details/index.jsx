import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { SpinnerPage } from  '../helpers/Spinner'
import { BsArrowLeft } from "react-icons/bs";
import {
  BackButton,
  CountryDetailsWrapper,
  CountryDetailsInfo,
  DetailsSection,
  Labels,
  BordersCountry,
  BordersTitle,
  Border,
} from "./details";

export const CountryDetails = () => {
  const [country, setCountry] = useState([]);
  const [borderCountries, setBorderCountry] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  let { name } = useParams();

  useEffect(() => {
    window.scroll(0, 0);
    const fetchCountryData = async (name) => {
      try {
        const url = `https://restcountries.com/v2/name/${name}`;
        const response = await fetch(url);
        const data = await response.json();
        setCountry(data[0]);
        setBorderCountry([]);
        data[0]?.borders?.forEach((border) => {
          return findCountryData(border);
        });
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchCountryData(name);
    const findCountryData = async (border) => {
      try {
        const url = `https://restcountries.com/v2/alpha/${border}`;
        const response = await fetch(url);
        const data = await response.json();
        setBorderCountry((current) => [...current, data.name]);
      } catch (error) {
        console.log(error);
      }
    };
  }, [name]);

  return (
    <main>
      {isLoading ? (
        <SpinnerPage />
        // <p>loading</p>
      ) : (
        <div>
          <BackButton to="/">
            <span>
              <BsArrowLeft />
            </span>{" "}
            Back
          </BackButton>
          <CountryDetailsWrapper key={name}>
            <img src={country.flags.svg} alt={name}></img>

            <CountryDetailsInfo>
              <h2>{name}</h2>
              <DetailsSection>
                <Labels>
                  <li>
                    <span>Native Name:</span> {country.nativeName}
                  </li>
                  <li>
                    <span>Population:</span>{" "}
                    {country.population.toLocaleString()}
                  </li>
                  <li>
                    <span>Region:</span> {country.region}
                  </li>
                  <li>
                    <span>Sub Region:</span> {country.subregion}
                  </li>
                  <li>
                    <span>Capital:</span> {country.capital}
                  </li>
                </Labels>
                <Labels>
                  <li>
                    <span>Top Level Domain:</span> {country.topLevelDomain}
                  </li>
                  <li>
                    <span>Currencies:</span> {country.currencies[0].name}
                  </li>
                  <li>
                    <span>Languages:</span> {country.languages[0].name}
                  </li>
                </Labels>
              </DetailsSection>

              <BordersCountry>
                <BordersTitle className="title">Border Countries:</BordersTitle>
                {borderCountries?.length ? (
                  borderCountries.map((country, index) => (
                    <Border key={index} to={`/${country}`}>
                      {country}
                    </Border>
                  ))
                ) : (
                  <p>No Borders...</p>
                )}
              </BordersCountry>
            </CountryDetailsInfo>
          </CountryDetailsWrapper>
        </div>
      )}
    </main>
  );
};
