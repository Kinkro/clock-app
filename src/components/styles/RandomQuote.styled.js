import styled from "styled-components";

export const StyledRandomQuote = styled.div`
  width: 80%;
  margin: 25px auto;
  display: ${({ moreLess }) => (moreLess ? "flex" : "none")};
  justify-content: space-between;
  img {
    width: 1rem;
    height: 1rem;
  }

  p {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
    margin-bottom: 10px;
    color: #ffffff;
  }

  span {
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 22px;

    color: #ffffff;
  }

  @media (min-width: 768px) {
    justify-content: flex-start;

    img {
      margin-left: 35px;
    }
  }
`;
