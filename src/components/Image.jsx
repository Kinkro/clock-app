import React from "react";
import { StyledImage } from "./styles/Image.styled";
import arrowUp from "../assets/desktop/icon-arrow-up.svg";

function Image({ rotation }) {
  return <StyledImage src={arrowUp} alt="" rotation={rotation} />;
}

export default Image;
