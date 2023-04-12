import { createGlobalStyle } from "styled-components";
import { colors, shadows } from "./variables";

export const Global = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Nunito Sans', sans-serif;
}
a {
  text-decoration: none;
}
ul,
ol {
  list-style: none;
}
body {
  background: ${colors.lightGrey};
  transition: background 0.2s linear;
  color: ${colors.black}
}
body a {
    color: ${colors.black}
}
body.dark {
  background: ${colors.darkBlue};
  transition: background 0.2s linear;
  color: ${colors.white}
}
body.dark a{
  background-color: ${colors.blue};
  box-shadow: ${shadows.dark};
  color: ${colors.white};
}
body.dark nav{
  background-color: ${colors.blue};
  box-shadow: ${shadows.dark};
}
body.dark #regions {
  background-color: ${colors.blue};
  box-shadow: ${shadows.dark};
}
body.dark #regionsList {
  background-color: ${colors.blue};
  box-shadow: ${shadows.dark};
}
`;
