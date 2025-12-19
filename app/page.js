import Navbar from "./components/NavbarHero.jsx";
import CardSection from "./components/CardSection.jsx";
import AdviceSection from "./components/AdviceSection.jsx";
import Footer from "./components/Footer.jsx";
import AboutMe from "./components/AboutMe.jsx";

export default function Home() {
  return (
    <>
      <Navbar />
      <AboutMe />
      <CardSection />
      <AdviceSection />
      <Footer />
    </>
  );
}
