import styled from "styled-components";

export const StyledLocation = styled.div`
  width: 80%;
  margin: auto;
  h2 {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 700;
    font-size: 15px;
    line-height: 28px;
    /* identical to box height, or 187% */

    display: flex;
    align-items: flex-end;
    letter-spacing: 3px;
    text-transform: uppercase;

    color: #ffffff;
  }

  @media (min-width: 1200px) {
    margin-bottom: 70px;
  }
`;
