import refresh from "../assets/desktop/icon-refresh.svg";
import { StyledRandomQuote } from "./styles/RandomQuote.styled";

function RandomQuote({ randomQuote, handleClick, moreLess }) {
  return (
    <StyledRandomQuote moreLess={moreLess}>
      <div>
        <p>{randomQuote.content}</p>
        <span>{randomQuote.author}</span>
      </div>
      <img src={refresh} alt="" onClick={handleClick} />
    </StyledRandomQuote>
  );
}

export default RandomQuote;
