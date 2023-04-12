import styled from "styled-components";
import { colors, shadows } from "../../styles/variables";
import { breakpoint } from "../../styles/breakpoints";

export const Heading = styled.header`
  position: sticky;
  position: -webkit-sticky;
  top: 0;
  z-index: 9;
`;
export const Navbar = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 1.5rem 5%;
  -webkit-box-shadow: ${shadows.light};
  box-shadow: ${shadows.light};
  background: ${colors.white};
  font-size: 14px;

  @media ${breakpoint.laptop} {
    padding: 1.5rem 5%;
    font-size: 20px;
 }
`;
export const Toggler = styled.div`
  cursor: pointer;
`;
export const LightToggle = styled.div`
  color: ${colors.white};
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.5rem;
  font-size: 1rem;
  font-weight: 600;
  margin-top: 0.2rem;

  @media ${breakpoint.laptop} {
    margin-top: 0.5rem;
 }
`;
export const DarkToggle = styled.div`
  color: ${colors.black};
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.5rem;
  font-size: 1rem;
  font-weight: 600;
  margin-top: 0.2rem;

  @media ${breakpoint.laptop} {
    margin-top: 0.5rem;
 }
`;
