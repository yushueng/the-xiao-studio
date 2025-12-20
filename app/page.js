import NavbarHero from "./components/NavbarHero.jsx";
import CardSection from "./components/CardSection.jsx";
import AdviceSection from "./components/AdviceSection.jsx";

import AboutMe from "./components/AboutMe.jsx";
import WhatsappInviteSection from "./components/WhatsappInviteSection.jsx";
import SectionDivider from "./components/SectionDivider.jsx";

export default function Home() {
  return (
    <>
      <NavbarHero />
      <SectionDivider />
      <AboutMe />
      <SectionDivider />
      <CardSection />
      <SectionDivider />
      <AdviceSection />
      <SectionDivider />
      <WhatsappInviteSection />
    </>
  );
}
