import HeaderHome from "./component/layouts/header";
import Howitwork from "./component/layouts/howitwork";
import Wardobe from "./component/layouts/wardobe";
import Lorem from "./component/layouts/lorem";
import Footer from "./component/layouts/footer";
import Faq from "./component/layouts/faq";
import Featured from "./component/layouts/featured";

export default function header() {
  return (
    <div>
      <HeaderHome />
      <Howitwork />
      <Wardobe />
      <Lorem />
      <Featured />
      <Faq />
      <Footer />
    </div>
  );
}
