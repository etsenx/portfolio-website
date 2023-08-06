import HomeSection from "@/components/Home";
import SkillSection from "@/components/Skill";
import Project from "@/components/Project";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <main>
        <HomeSection />
        <SkillSection />
        <Project />
        <hr />
        <Contact />
      </main>
        <Footer />
    </>
  );
}
