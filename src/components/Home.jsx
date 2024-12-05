import React, { useEffect } from "react";
import Banner from "./Banner";
import HighRated from "./HighRated";
import TrendingSection from "./TrendingSection";

const Home = () => {
  //   useEffect(() => {
  //     fetch("http://localhost:5000/")
  //       .then((res) => res.json())
  //       .then((data) => {
  //         console.log(data);
  //       });
  //   }, []);
  return (
    <div className="w-11/12 mx-auto">
      <Banner></Banner>
      <HighRated></HighRated>
      <TrendingSection id="trending"></TrendingSection>
    </div>
  );
};

export default Home;
