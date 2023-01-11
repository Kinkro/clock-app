import React, { useEffect, useState } from "react";
import GlobalStyles from "./components/styles/Global";
import { ThemeProvider } from "styled-components";
import RandomQuote from "./components/RandomQuote";
import Greeting from "./components/Greeting";
import Time from "./components/Time";
import Location from "./components/Location";
import ButtonML from "./components/ButtonML";
import More from "./components/More";
import { StyledWrapper } from "./components/styles/Wrapper.styled";
import { StyledDesktopMedia } from "./components/styles/DesktopMedia.styled";

const theme = {
  background: {
    daytime: "../../assets/desktop/bg-image-daytime.jpg",
    nighttime: "../../assets/desktop/bg-image-daytime.jpg",
  },
};

function App() {
  let timeOfDay;
  let count = 0;
  const time = new Date();
  const hours = time.getHours();
  const minutes = time.getMinutes();
  const [currTime, setCurrTime] = useState({
    hours: hours,
    minutes: minutes,
  });
  const [worldTimeAPI, setWorldTimeAPI] = useState([]);
  const [geolocationAPI, setGeolocationAPI] = useState([]);
  const [randomQuote, setRandomQuote] = useState([]);
  const [nextQuote, setNextQuote] = useState(0);
  const [moreLess, setMoreLess] = useState(true);
  const [rotation, setRotation] = useState(0);
  useEffect(() => {
    fetch("http://worldtimeapi.org/api/ip")
      .then((resp) => resp.json())
      .then((data) => setWorldTimeAPI(data));

    fetch(
      "https://api.ipbase.com/v2/info?apikey=h3n8wHix7M9fo9HNWGOR2fodaOXvJyHGrCr3oqqO&language=en&ip="
    )
      .then((resp) => resp.json())
      .then((data) => setGeolocationAPI(data));

    return () => {};
  }, []);
  useEffect(() => {
    fetch("https://api.quotable.io/random")
      .then((resp) => resp.json())
      .then((data) => setRandomQuote(data));
  }, [nextQuote]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrTime({
        hours: hours,
        minutes: minutes + 1,
      });
    }, 60000);

    return () => {
      clearInterval(interval);
    };
  });

  const handleClick = () => {
    count++;
    setNextQuote(count);
  };

  if (currTime.hours >= 5 && currTime.hours < 12) {
    timeOfDay = "Morning";
  } else if (currTime.hours >= 12 && currTime.hours < 18) {
    timeOfDay = "Afternnon";
  } else {
    timeOfDay = "Evening";
  }

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles currentTime={currTime.hours} />
      <StyledWrapper moreLess={moreLess}>
        <div>
          <RandomQuote
            randomQuote={randomQuote}
            handleClick={handleClick}
            moreLess={moreLess}
          />
        </div>
        <StyledDesktopMedia>
          <Greeting timeOfDay={timeOfDay} />
          <Time currTime={currTime} />
          <Location geolocationAPI={geolocationAPI} />
          <ButtonML
            setMoreLess={setMoreLess}
            setRotation={setRotation}
            moreLess={moreLess}
            rotation={rotation}
          />
          <More
            geolocationAPI={geolocationAPI}
            worldTimeAPI={worldTimeAPI}
            moreLess={moreLess}
          />
        </StyledDesktopMedia>
      </StyledWrapper>
    </ThemeProvider>
  );
}

export default App;
