import Contact from "./components/Main/Contact";
import Experience from "./components/Main/Experience";
import Services from "./components/Main/Services";
import Team from "./components/Main/Team";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import MainBanner from "./components/MainBanner/MainBanner";

function App() {
  return (
    <div className="App">
      <Team />
      <Services />
      <Experience />
      <Contact />
      <Header />
      <MainBanner />
      <Footer />
    </div>
  );
}

export default App;
