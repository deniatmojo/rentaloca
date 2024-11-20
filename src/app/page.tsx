import HeaderHome from "./component/layouts/header";
import Howitwork from "./component/layouts/howitwork";
import Wardobe from "./component/layouts/wardobe";
import Lorem from "./component/layouts/lorem";
import Footer from "./component/layouts/footer";
import Faq from "./component/layouts/faq";

export default function header() {
  return (
    <div>
      <HeaderHome />
      <Howitwork />
      <Wardobe />
      <Lorem />
      <Faq />
      <Footer />
    </div>
  );
}
