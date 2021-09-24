import React from "react";
import Home from "./Home";
import Sommerpalast from "./Sommerpalast";
import Eis from "./Eis";
import Classes from "./Classes";
import Soon from "./Soon";
import Contact from "./Contact";
import MyNav from "../Nav";

const Content = () => {
  return (
    <div>
      <MyNav />
      <Home />
      <Sommerpalast />
      <Eis />
      <Classes />
      <Soon />
      <Contact />
    </div>
  );
};

export default Content;
