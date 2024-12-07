import React, { useContext } from "react";
import ToggleButton from "./ToggleButton";
import Banner from "./Banner";
import HighRated from "./HighRated";
import TrendingSection from "./TrendingSection";
import { Fade } from "react-awesome-reveal";
import Developers from "./Developers";
import { ThemeContext } from "../Context/ThemeProvider";

const Home = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <di>
      <div
        className={`w-11/12 mx-auto  ${
          theme === "dark" ? "bg-gray-800 text-gray-200" : "bg-white text-black"
        }`}
      >
        <ToggleButton />
        <Fade delay={200} duration={1000}>
          <Banner />
          <HighRated />
          <TrendingSection />
          <Developers />
        </Fade>
      </div>
    </di>
  );
};

export default Home;
