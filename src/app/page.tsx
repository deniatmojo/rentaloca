import HeaderHome from "./component/layouts/header";
import Howitwork from "./component/layouts/howitwork";
import Wardobe from "./component/layouts/wardobe";

export default function header() {
  return (
    <div>
      <HeaderHome />
      <Howitwork />
      <Wardobe />
    </div>
  );
}
