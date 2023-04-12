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
import { Error } from '../../helpers/Error';

export const FilterCountries = (props) => {
  return (
    <WrapperContainer>
      {props.foundFilter ? (
        props.filtered?.map(
          ({ name, population, region, capital, flags, index }) => (
            <Container
              key={name}
              to={`/${name.toLowerCase().replace(/\s/g, "%20")}`}
            >
              <div>
                <ImageContainer>
                  <Image src={flags.png} alt="flag" />
                </ImageContainer>
                <InfoSection>
                  <CountryName>{name}</CountryName>
                  <p>
                    <Category>Population:</Category>{" "}
                    {population.toLocaleString()}
                  </p>
                  <p>
                    <Category>Region:</Category> {region}
                  </p>
                  <p>
                    <Category>Capital:</Category> {capital}
                  </p>
                </InfoSection>
              </div>
            </Container>
          )
        )
      ) : (
        <Error />
        // <p>ERROR</p>
      )}
    </WrapperContainer>
  );
};
