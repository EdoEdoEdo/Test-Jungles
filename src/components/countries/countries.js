import styled from "styled-components";
import { Link } from "react-router-dom";
import { breakpoint } from "../../styles/breakpoints";
import { colors, shadows } from "../../styles/variables";

export const WrapperContainer = styled.div`
  display: grid;
  row-gap: 64px;
  column-gap: 5%;
  margin: 0 5%;

  @media ${breakpoint.tablet} {
    { grid-template-columns: repeat(2, 1fr);
  }
  @media ${breakpoint.laptop} {
    { grid-template-columns: repeat(3, 1fr);
  }
  @media ${breakpoint.laptopL} {
    { grid-template-columns: repeat(4, 1fr);
  }
`;
export const Container = styled(Link)`
  background-color: ${colors.white};
  border-radius: 10px;
  -webkit-box-shadow: ${shadows.light};
  box-shadow: ${shadows.light};
  transition: all 0.5s;

  &:hover {
    scale: 1.1;
  }
`;
export const ImageContainer = styled.div`
  width: 100%;
  overflow: hidden;
  height: auto;
`;
export const Image = styled.img`
  border-radius: 10px 10px 0 0;
  width: 100%;
  height: auto;
  object-fit: cover;

  @media ${breakpoint.tablet} {
    height: 220px;
  }
  @media ${breakpoint.laptop} {
    height: 200px;
  }
  @media ${breakpoint.laptopL} {
    height: 180px;
  }
`;
export const InfoSection = styled.section`
  display: flex;
  flex-direction: column;
  padding: 0 26px 2rem;
  margin-top: 1rem;
  line-height: 1.5rem;
`;
export const CountryName = styled.h2`
  line-height: 1.3rem;
  padding-bottom: 2rem;
`;
export const Category = styled.span`
  font-weight: 600;
`;
