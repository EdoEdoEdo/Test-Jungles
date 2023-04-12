import styled from "styled-components";
import { Link } from "react-router-dom";
import { breakpoint } from "../../styles/breakpoints";
import { colors, shadows } from "../../styles/variables";

export const BackButton = styled(Link)`
  margin: 3rem 5%;
  background-color: ${colors.white};
  -webkit-box-shadow: ${shadows.light};
  box-shadow: ${shadows.light};
  padding: 0.4rem 0.1rem;
  font-size: 1rem;
  display: flex;
  flex-direction: row;
  width: 9rem;
  gap: 0.3rem;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  font-weight: 400;

  span {
    font-size: 1.5rem;
    margin-top: 0.5rem;
  }
`;
export const CountryDetailsWrapper = styled.div`
  width: 100%;
  padding: 0 5%;
  margin-bottom: 10%;
  display: block;

  img {
    max-width: 100%;
    width: 100%;
    height: 100%;
  }
  @media ${breakpoint.laptop} {
    width: 100%;
    margin: 0 5%;
    padding: 0;
    margin-bottom: 10%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);

    img {
      max-width: 100%;
      width: 100%;
      height: auto;
    }
  }
`;
export const CountryDetailsInfo = styled.div`
  padding: 3rem 0;
  margin: 0;
  display: block;

  h2 {
    padding: 0 5%;
    font-size: 2rem;
    text-transform: capitalize;
  }
  @media ${breakpoint.laptop} {
    padding: 0.8rem 0;
    margin-left: 2.5rem;
    display: flex;
    flex-direction: column;

    h2 {
      padding: 0;
      font-size: 2rem;
      text-transform: capitalize;
    }
  }
`;
export const DetailsSection = styled.div`
  display: block;
  margin-top: 3rem;
  text-align: left;
  width: 100%;

  @media ${breakpoint.laptop} {
    display: flex;
    flex-direction: row;
    gap: 5rem;
    margin-top: 3rem;
    text-align: left;
    width: 80%;
  }
`;
export const Labels = styled.ul`
  padding: 0 5%;
  line-height: 2.5rem;
  font-size: 1rem;
  margin-top: 3rem;
  list-style: none;

  span {
    font-weight: 600;
  }

  @media ${breakpoint.laptop} {
    padding: 0;
    line-height: 2.5rem;
    font-size: 1rem;
    margin-top: -1rem;
    list-style: none;

    span {
      font-weight: 600;
    }
  }
`;
export const BordersCountry = styled.div`
  display: flex;
  flex-flow: row wrap;
  gap: 1rem;
  width: 100%;
  margin-top: 3rem;
  padding: 0 5%;
  -webkit-box-align: center;
  align-items: center;

  @media ${breakpoint.laptop} {
    display: flex;
    flex-direction: row;
    gap: 1rem;
    width: 80%;
    margin-top: 3rem;
    padding: 0;
    align-items: center;
    flex-wrap: wrap;
  }
`;
export const BordersTitle = styled.p`
  font-weight: 600;
  font-size: 1rem;
`;
export const Border = styled(Link)`
  background-color: ${colors.white};
  padding: 0.4rem 1.2rem;
  color: ${colors.blue};
  -webkit-box-shadow: ${shadows.light};
  box-shadow: ${shadows.light};
  cursor: pointer;
  font-size: 0.7rem;
  transition: all ease-in-out 0.3s;
`;
