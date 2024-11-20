import HeaderHome from "./component/layouts/header";
import Howitwork from "./component/layouts/howitwork";
import Wardobe from "./component/layouts/wardobe";
import Lorem from "./component/layouts/lorem";
import Footer from "./component/layouts/footer";
import Faq from "./component/layouts/faq";
import Featured from "./component/layouts/featured";
import Testimoni from "./component/layouts/testimoni";
import Featuredon from "./component/layouts/featuredon";
import Demand from "./component/layouts/demand";

export default function header() {
  return (
    <div>
      <HeaderHome />
      <Howitwork />
      <Wardobe />
      <Lorem />
      <Featured />
      <Testimoni />
      <Featuredon />
      <Demand />
      <Faq />
      <Footer />
    </div>
  );
}
