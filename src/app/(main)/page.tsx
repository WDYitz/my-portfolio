import HeroSection from "./_components/hero-section";
import MyProjectsSection from "./_components/my-projects-section";
import SubHeroSection from "./_components/sub-hero-section";
import TechStackSection from "./_components/tech-stack-section";

const Home = () => {
  return (
    <main className="space-y-20 overflow-x-hidden">
      <HeroSection />
      <SubHeroSection />
      <TechStackSection />
      <MyProjectsSection />
    </main >
  );
}

export default Home;