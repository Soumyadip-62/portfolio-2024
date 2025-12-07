import Banner from "./components/Banner";
import FooterSection from "./components/Footer";
import HireMeSection from "./components/HireMesection";
import ProjectsSection from "./components/Myprojects";
import TechStacks from "./components/TechStacks";
import WorkExperienceSection from "./components/WorkExperience";

function App() {
  return (
    <>

      <Banner />
      <TechStacks />
      {/* <ServicesSection /> */}
      <WorkExperienceSection />
      <ProjectsSection />
      <HireMeSection />
      <FooterSection />
    </>
  );
}

export default App;
