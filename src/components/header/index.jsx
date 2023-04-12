import React from "react";
import { Link } from "react-router-dom";
import Toggle from "./partial/DarkMode";
import { Heading, Navbar } from "./header";

export const Header = () => {
  return (
    <>
      <Heading>
        <Navbar>
          <Link style={{boxShadow: "none"}} to="/">
            <h1>Where in the world?</h1>
          </Link>
          <Toggle />
        </Navbar>
      </Heading>
    </>
  );
};
