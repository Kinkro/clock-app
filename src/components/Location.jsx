import React from "react";
import { StyledLocation } from "./styles/Location.styled";

function Location({ geolocationAPI }) {
  return (
    <StyledLocation>
      <h2>
        In {geolocationAPI.data?.location.city.name},{" "}
        {geolocationAPI.data?.location.country.alpha2}
      </h2>
    </StyledLocation>
  );
}

export default Location;
