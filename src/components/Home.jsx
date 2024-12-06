import React, { useEffect } from "react";
import Banner from "./Banner";
import HighRated from "./HighRated";
import TrendingSection from "./TrendingSection";
import { Fade } from "react-awesome-reveal";
import Developers from "./Developers";
const Home = () => {
  //   useEffect(() => {
  //     fetch("https://assignment-10-server-site-red.vercel.app/")
  //       .then((res) => res.json())
  //       .then((data) => {
  //         console.log(data);
  //       });
  //   }, []);
  return (
    <div className="w-11/12 mx-auto">
      <Fade delay={200} duration={1000}>
        <Banner></Banner>
        <HighRated></HighRated>
        <TrendingSection></TrendingSection>
        <Developers></Developers>
      </Fade>
    </div>
  );
};

export default Home;
