import React, { useEffect } from "react";
import Banner from "./Banner";
import HighRated from "./HighRated";

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
    </div>
  );
};

export default Home;
