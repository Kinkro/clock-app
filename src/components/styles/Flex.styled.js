import styled from "styled-components";

export const StyledFlex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  width: 80%;
  margin: 0 auto;

  @media (min-width: 768px) {
    flex-direction: column;
    justify-content: center;
    width: 65%;
    align-items: flex-start;
    grid-column: ${(props) => props.column} / ${(props) => props.column + 1};
    grid-row: ${(props) => props.row} / ${(props) => props.row + 1};
  }
`;
