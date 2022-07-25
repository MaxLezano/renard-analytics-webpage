import Contact from "./Contact/Contact";
import Experience from "../Main/Experience/Experience";
import MainBanner from "../MainBanner/MainBanner";
import Services from "../Main/Service/Services";
import Team from "../Main/Team/Team";

const Main = () => {
  return (
    <div>
      <MainBanner />
      <Team />
      <Services />
      <Experience />
      <Contact />
    </div>
  );
};

export default Main;
