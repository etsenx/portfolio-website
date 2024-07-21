import Image from "next/image";

export default function ProjectDesc(props: any) {
  return (
    <div className={`project flex mx-auto gap-5 ${props.reverse ? 'flex-row-reverse' : ''} sm:flex-col md:flex-col`}>
      <div className="project-image">
        <Image
          src={props.imgSrc}
          alt="Demo"
          width={600}
          height={400}
          className="rounded-2xl"
        />
      </div>
      <div className="project-description ">
        <h3 className="text-center text-xl font-extrabold mt-8 sm:mt-0 md:mt-0">
          {props.heading}
        </h3>
        <p className="mt-5 text-center w-4/5 mx-auto leading-relaxed md:w-full">
          {props.description}
        </p>
        <div className={`project-stack flex gap-8 justify-center`}>
          <p className="text-center text-lg font-semibold mt-5">{props.techStack1}</p>
          <p className="text-center text-lg font-semibold mt-5">{props.techStack2}</p>
          <p className="text-center text-lg font-semibold mt-5">{props.techStack3}</p>
        </div>
        <div className="project-link mt-10 flex justify-center gap-10">
          <a
            href={props.githubLink}
            className="project-github flex items-center gap-2"
          >
            <p className="font-bold">Code</p>
            <Image src="/githubicon.svg" alt="github" width={25} height={25} />
          </a>
          <a
            href={props.siteLink}
            className="project-github flex items-center justify-center gap-1"
          >
            <p className="font-bold">Live Demo</p>
            <Image
              src="/externallink.svg"
              alt="github"
              width={25}
              height={25}
            />
          </a>
        </div>
      </div>
    </div>
  );
}
