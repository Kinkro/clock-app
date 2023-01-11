import styled from "styled-components";

export const StyledGreeting = styled.div`
  display: flex;
  align-items: center;
  width: 80%;
  margin: 0 auto;
  span {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 25px;

    letter-spacing: 3px;
    text-transform: uppercase;

    color: #ffffff;
  }
  img {
    width: 24px;
    height: 24px;
  }
`;
