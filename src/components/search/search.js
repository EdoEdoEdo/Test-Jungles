import styled from "styled-components";
import { colors, shadows } from "../../styles/variables";
import { breakpoint } from "../../styles/breakpoints";

export const SectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  gap: 2rem;
  padding: 3rem 5%;

  @media ${breakpoint.laptop} {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 3rem 5%;
  }
`;
export const InputWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;

  @media ${breakpoint.laptop} {
     width: 30rem;
  }
`;
export const Input = styled.input`
  padding: 1.2rem;
  -webkit-box-shadow: ${shadows.light};
  box-shadow: ${shadows.light};
  border: none;
  width: 100%;
  background-color: ${colors.white};
  border-radius: 10px;

  &:focus-visible {
    outline: none;
  }

  &::placeholder {
    opacity: 0.4;
    font-size: 0.9rem;
    color: $very-dark-blue;
    font-weight: 600;
  }

  &[type="search"] {
    font-size: 0.9rem;
    color: $very-dark-blue;
    padding-left: 5rem;
  }
`;
export const SelectRegion = styled.div`
  position: relative;
  border-radius: 10px;
  width: 11.5rem;
  height: 30%;
  padding: 0 0.2rem;
  -webkit-box-shadow: ${shadows.light};
  box-shadow: ${shadows.light};
  background-color: ${colors.white}; ;
`;
export const RegionSpan = styled.span`
  padding: 1.5rem 1rem;
  cursor: pointer;
  border-radius: 5px;
  list-style: none;
  display: flex;
  flex-direction: row;
  gap: 1rem;
  align-items: center;
  font-size: 0.9rem;
  font-weight: 400;
  justify-content: space-between;

  &:after {
    content: "";
    display: inline-block;
    width: 0.4rem;
    height: 0.4rem;
    border-bottom: 1px solid currentColor;
    border-left: 1px solid currentColor;
    border-bottom-left-radius: 2px;
    transform: rotate(-45deg) translate(50%, 0);
    transform-origin: center center;
    transition: all ease-in-out 0.3s;
    color: $dark-blue;
  }
`;
export const RegionList = styled.div`
  background-color: ${colors.white};
  border-radius: 10px;
  box-shadow: ${shadows.light};
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  left: 0;
  line-height: 1.8rem;
  list-style: none;
  margin: 0;
  max-height: 300px;
  max-width: 100%;
  overflow-y: auto;
  padding: 0.2rem 1rem;
  position: absolute;
  top: calc(100% + 0.5rem);
  width: 100%;
  cursor: pointer;
`;
