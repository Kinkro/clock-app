import React from "react";
import moon from "../assets/desktop/icon-moon.svg";
import sun from "../assets/desktop/icon-sun.svg";
import { StyledGreeting } from "./styles/Greeting.styled";

function Greeting({ timeOfDay }) {
  return (
    <StyledGreeting>
      <img src={timeOfDay === "Evening" ? moon : sun} alt="" />
      <span>Good {timeOfDay}</span>
    </StyledGreeting>
  );
}

export default Greeting;
