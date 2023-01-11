import React from "react";
import { StyledFlex } from "./styles/Flex.styled";
import { StyledMore } from "./styles/More.styled";

function More({ geolocationAPI, worldTimeAPI, moreLess }) {
  return (
    <StyledMore moreLess={moreLess}>
      <StyledFlex column={1} row={1}>
        <span>current timezone</span>
        <h3>{geolocationAPI.data?.timezone.id}</h3>
      </StyledFlex>
      <StyledFlex column={2} row={1}>
        <span>day of the year</span>
        <h3>{worldTimeAPI.day_of_year}</h3>
      </StyledFlex>
      <StyledFlex column={1} row={2}>
        <span>day of the week</span>
        <h3>{worldTimeAPI.day_of_week}</h3>
      </StyledFlex>
      <StyledFlex column={2} row={2}>
        <span>week number</span>
        <h3>{worldTimeAPI.week_number}</h3>
      </StyledFlex>
    </StyledMore>
  );
}

export default More;
