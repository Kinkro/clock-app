import styled, { css } from "styled-components";

export const StyledImage = styled.img`
  ${(props) =>
    props.rotation &&
    css`
      transform: rotate(${props.rotation}deg);
    `}
`;
