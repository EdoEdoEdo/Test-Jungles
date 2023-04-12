import React from "react";
import {
  WrapperContainer,
  Container,
  ImageContainer,
  Image,
  InfoSection,
  CountryName,
  Category,
} from "../countries";

export const AllCountries = (props) => {
  return (
    <WrapperContainer>
      {props.countries.map(
        ({ name, population, region, capital, flags, index }) => (
          <Container
            key={name}
            to={`/${name.toLowerCase().replace(/\s/g, "%20")}`}
          >
            <ImageContainer>
              <Image src={flags ? flags.svg : flags.png} alt={name} />
            </ImageContainer>
            <InfoSection>
              <CountryName className="countryName"> {name}</CountryName>
              <div>
                <p>
                  <Category className="category">Population:</Category>
                  {population.toLocaleString()}
                </p>
                <p>
                  <Category className="category">Region:</Category> {region}
                </p>
                <p>
                  <Category className="category">Capital:</Category> {capital}
                </p>
              </div>
            </InfoSection>
          </Container>
        )
      )}
    </WrapperContainer>
  );
};
