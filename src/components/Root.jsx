import React from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import { Fade } from "react-awesome-reveal";

const Root = () => {
  return (
    <div>
      <Fade delay={200} duration={1000}>
        <Navbar></Navbar>
        <Outlet></Outlet>
        <Footer></Footer>
      </Fade>
    </div>
  );
};

export default Root;
