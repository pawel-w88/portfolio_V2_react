import React from "react";
import MovingText from "react-moving-text";
import TextTransition, { presets } from "react-text-transition";
import myIMG from "../../assets/myImages.jpeg";
import { useContext } from "react";
import ThemeContext from "../../ThemeContext";

import "./Home.scss";

export const Home = () => {
  const TEXTS = [
    "Pawel Wojciechowski",
    "Junior Developer",
    "Frontend Entwickler",
    "Softwareentwickler",
  ];

  const isDarkMode = useContext(ThemeContext);
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      3000 // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);

  return (
    <div className={`Home ${isDarkMode ? "dark" : "light"}`}>
      <div className="text">
        <h1>
          <MovingText
            type="fadeInFromTop"
            duration="3000ms"
            delay="0s"
            direction="normal"
            timing="ease"
            iteration="1"
            fillMode="none"
          >
            Welcome in my World!
          </MovingText>
        </h1>
        <p>Hallo, I am </p>
        <span>
          <TextTransition springConfig={presets.gentle}>
            {TEXTS[index % TEXTS.length]}.
          </TextTransition>
        </span>
        <p>
          I Love <span>React .</span>
        </p>
      </div>
      <img className="image" src={myIMG} alt="MY" />
    </div>
  );
};

// export default Home;
