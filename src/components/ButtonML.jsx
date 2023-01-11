import React from "react";
import Image from "./Image";
import { StyledButton } from "./styles/ButtonML.styled";

function ButtonML({ setMoreLess, setRotation, moreLess, rotation }) {
  return (
    <StyledButton
      onClick={() => {
        setMoreLess((prev) => !prev);
        setRotation((prev) => prev + 180);
      }}
    >
      <p>{moreLess ? "MORE" : "LESS"}</p>
      <Image alt="" rotation={rotation} />
    </StyledButton>
  );
}

export default ButtonML;
