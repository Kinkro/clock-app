import React from "react";
import { StyledTime } from "./styles/Time.styled";

function Time({ currTime }) {
  return (
    <StyledTime>
      <h1>
        {currTime.hours < 10 ? "0" + currTime.hours : currTime.hours}:
        {currTime.minutes < 10 ? "0" + currTime.minutes : currTime.minutes}
      </h1>
      <span>BST</span>
    </StyledTime>
  );
}

export default Time;
