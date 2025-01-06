import React, { useContext } from "react";

import Banner from "./Banner";
import HighRated from "./HighRated";
import TrendingSection from "./TrendingSection";
import { Fade } from "react-awesome-reveal";
import Developers from "./Developers";
import { ThemeContext } from "../Context/ThemeProvider";
import UpcomingGames from "./UpcomingGames";

const Home = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <di>
      <div
        className={`w-11/12 mx-auto  ${
          theme === "dark" ? "bg-gray-800 text-gray-200" : "bg-white text-black"
        }`}
      >
        <Banner />
        <HighRated />
        <TrendingSection />
        <UpcomingGames />
      </div>
    </di>
  );
};

export default Home;
