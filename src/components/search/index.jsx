import React from "react";
import { FaSearch } from "react-icons/fa";
import { Filter } from "./partial/Filter";
import { SectionWrapper, InputWrapper, Input } from "./search";

export const Search = (props) => {
  return (
    <SectionWrapper>
      <InputWrapper>
        <FaSearch
          style={{
            opacity: "0.4",
            marginLeft: "2rem",
            position: "absolute",
            color: "black",
          }}
        />
        <Input
          type="search"
          name="search"
          id="search"
          placeholder="Search for a country..."
          value={props.searchInput}
          onChange={(e) => props.searchCountries(e.target.value)}
        ></Input>
      </InputWrapper>
      <Filter setCountries={props.setCountries} />
    </SectionWrapper>
  );
};
