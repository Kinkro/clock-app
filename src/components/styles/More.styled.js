import styled from "styled-components";

export const StyledMore = styled.div`
  display: ${(props) => (props.moreLess ? "none" : "flex")};
  background-color: ${({ currentTime }) =>
    currentTime >= 18 || currentTime < 5 ? "black" : "lightgray"};
  flex-direction: column;
  height: 320px;
  justify-content: space-evenly;
  span {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 10px;
    line-height: 28px;
    letter-spacing: 2px;
    text-transform: uppercase;

    color: ${({ currentTime }) =>
      currentTime >= 18 || currentTime < 5 ? "white" : "#303030"};
  }

  h3 {
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 24px;
    text-align: right;
    color: ${({ currentTime }) =>
      currentTime >= 18 || currentTime < 5 ? "white" : "#303030"};
  }

  @media (min-width: 768px) {
    display: ${(props) => (props.moreLess ? "none" : "grid")};
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);

    h3 {
      font-size: 28px;
    }
    span {
      font-size: 12px;
    }
  }
`;
