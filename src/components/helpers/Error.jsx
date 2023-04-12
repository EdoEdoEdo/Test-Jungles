import React from "react";
import { BsArrowLeft } from "react-icons/bs";
import { BackButton } from "../details/details";

export const Error = ({ link }) => {
  const reload = () => {
    window.location.reload();
  };

  return (
    <div>
      <h1>
        Hi<span>!</span>
      </h1>
      <p>This is an error compononent 😉</p>
      {link ? (
        <BackButton to="/">
          <span>
            <BsArrowLeft style={{ marginLeft: "5px" }} /> Back To Home
          </span>
        </BackButton>
      ) : (
        <BackButton onClick={reload}>
          <BsArrowLeft style={{ marginLeft: "5px" }} /> Back To Home
        </BackButton>
      )}
    </div>
  );
};
