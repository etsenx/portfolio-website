import SkillLogo from "./SkillLogo";
import Image from "next/image";

export default function SkillSection() {
  return (
    <section className="w-full skill-section" data-theme="light">
      <div
        className="w-4/6 mx-auto text-center box sm:w-5/6 md:w-5/6"
        id="skill"
      >
        <div className="skill-columns">
          <div className="skill-column">
            <div className="skill-img-container">
              <Image
                src="/frontend.png"
                alt="Frontend Image"
                width={40}
                height={40}
              />
            </div>
            <div className="skill-desc-container">
              <h2 className="text-2xl mt-4 font-extrabold">
                Frontend Developer
              </h2>
              <p className=" text-lg mt-6 text-center w-3/5 mx-auto sm:w-4/5">
                I like turning design into a real website so we can interact
                with it real time. Seeing the design turning into a real website
                really amaze me.
              </p>
            </div>
            <p className="text-lg mt-8 font-semibold">Tools I use:</p>
            <div className="tech-stack mt-10 flex items-center">
              <div className="skill-stack gap-7 gap-y-5 grid-cols-3 grid mx-auto">
                <SkillLogo src="/htmllogo.svg" alt="html logo" />
                <SkillLogo src="/csslogo.svg" alt="css logo" />
                <SkillLogo src="/jslogo.svg" alt="javascript logo" />
                <SkillLogo src="/reactlogo.svg" alt="react logo" />
                <SkillLogo src="/tailwindlogo.svg" alt="tailwind logo" />
                <SkillLogo src="/nextjslogo.svg" alt="nextjs logo" />
              </div>
            </div>
          </div>
          <div className="skill-column">
            <div className="skill-img-container">
              <Image
                src="/backend.png"
                alt="Backend Image"
                width={40}
                height={40}
              />
            </div>
            <div className="skill-desc-container">
              <h2 className="text-2xl mt-4 font-extrabold">
                Backend Developer
              </h2>
              <p className=" text-lg mt-6 text-center w-3/5 mx-auto sm:w-4/5">
                I like the complex logic behind a website about processing data.
                Although, It is more complex. It just seems really cool and
                enjoyable for me to do the backend of a project.
              </p>
            </div>
            <p className="text-lg mt-8 font-semibold">Tools I use:</p>
            <div className="tech-stack mt-10 flex items-center">
              <div className="skill-stack gap-7 gap-y-5 grid-cols-3 grid mx-auto">
                <SkillLogo src="/expressjslogo.svg" alt="expressjs logo" />
                <SkillLogo src="/mongodblogo.svg" alt="mongodb logo" />
                <SkillLogo src="/nodejslogo.svg" alt="nodejs logo" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
