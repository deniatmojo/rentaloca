import React from "react";
import HeaderHome from "../../layouts/header";
import Howitwork from "../../layouts/howitwork";
import Wardobe from "../../layouts/wardobe";
import Lorem from "../../layouts/lorem";
import Footer from "../../layouts/footer";
import Faq from "../../layouts/faq";
import Featured from "../../layouts/featured";
import Testimoni from "../../layouts/testimoni";
import Featuredon from "../../layouts/featuredon";
import Demand from "../../layouts/demand";

const home = () => {
  return (
    <main>
      <HeaderHome />
      <Howitwork />
      <Wardobe />
      <Lorem />
      <Featured />
      <Testimoni />
      <Featuredon />
      <Demand />
      <Faq />
    </main>
  );
};

export default home;
