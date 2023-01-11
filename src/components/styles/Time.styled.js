import styled from "styled-components";

export const StyledTime = styled.div`
  display: flex;
  align-items: baseline;
  width: 80%;
  margin: 0 auto;
  h1 {
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 100px;
    line-height: 100px;
    /* identical to box height, or 100% */
    margin: 0;
    letter-spacing: -2.5px;

    color: #ffffff;
  }
  span {
    font-family: "Inter";
    font-style: normal;
    font-weight: 300;
    font-size: 15px;
    line-height: 28px;

    text-transform: uppercase;

    color: #ffffff;
  }
`;
