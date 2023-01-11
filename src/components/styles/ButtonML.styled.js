import styled from "styled-components";

export const StyledButton = styled.div`
  position: relative;
  margin: 40px 10%;
  width: 120px;
  height: 43px;
  border-radius: 25px;
  display: flex;
  align-items: center;
  background-color: white;
  img {
    position: absolute;
    right: 7px;
    width: 32px;
  }

  p {
    margin-left: 15px;
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    line-height: 14px;
    letter-spacing: 3.75px;
    text-transform: uppercase;
    color: #000000;
    opacity: 0.5;
  }

  @media (min-width: 1200px) {
    left: 800px;
    position: absolute;
    margin: 100px 10%;
  }
`;
