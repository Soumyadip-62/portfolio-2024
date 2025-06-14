import Banner from "./components/Banner";
import FooterSection from "./components/Footer";
import HireMeSection from "./components/HireMesection";
import ProjectsSection from "./components/Myprojects";
import ServicesSection from "./components/Services";
import WorkExperienceSection from "./components/WorkExperience";

function App() {
  return (
    <>
      <Banner />
      <ServicesSection />
      <WorkExperienceSection />
      <ProjectsSection />
      <HireMeSection />
      <FooterSection />
    </>
  );
}

export default App;
