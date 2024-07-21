import ProjectDesc from './ProjectDesc';

export default function Project() {
  return (
    <section data-theme='light' id='projects'>
      <h2 className='text-center text-4xl font-extrabold pt-10'>My Projects</h2>

      <div className='projects mt-28'>
        {/* Project1 */}
        <ProjectDesc
          heading='News Explorer'
          description='Fullstack project using MERN stack. Use news api from newsapi.org and self made api for authentication and saved news. This is final project from Tripleten bootcamp'
          imgSrc='/Screenshot 2024-02-24 224558 (1).png'
          techStack1='React'
          techStack2='Express'
          techStack3='MongoDB'
          githubLink='https://github.com/etsenx/news-explorer-frontend'
          siteLink='https://etsenx.site'
        />
        {/* <ProjectDesc
          heading="Around the World"
          description="This is a frontend project using pure javascript that I build at my Web Developer Bootcamp. Using a bit of API that the bootcamp provide to get or upadate profile values and adding new card, liking the card."
          imgSrc="/news-explorer2.png"
          techStack1="HTML"
          techStack2="CSS"
          techStack3="Javascript"
          githubLink="https://github.com/etsenx/web_project_around"
          siteLink="https://etsenx.github.io/web_project_around/"
        /> */}

        {/* Project 2
        <div className="project flex mx-auto gap-5 flex-row-reverse sm:flex-col md:flex-col">
          <div className="project-image">
            <Image
              src="/fff.png"
              alt="Demo"
              width={600}
              height={400}
              className="rounded-2xl"
            />
          </div>
          <div className="project-description ">
            <h3 className="text-center text-xl font-extrabold mt-8 sm:mt-0 md:mt-0">
              Car Rental
            </h3>
            <p className="mt-5 text-center w-4/5 mx-auto leading-relaxed md:w-full">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos
              mollitia unde sunt quisquam sed optio fuga cum dolores,
              reprehenderit obcaecati eum voluptatum tenetur quas rem minus
              provident? Fugit, id voluptatum?
            </p>
            <div className={`project-stack flex gap-8 justify-center`}>
              <p className="text-center text-lg font-semibold mt-5">Nextjs</p>
              <p className="text-center text-lg font-semibold mt-5">Express</p>
            </div>
            <div className="project-link mt-10 flex justify-center gap-10">
              <a
                href="http://github.com"
                className="project-github flex items-center gap-2"
              >
                <p className="font-bold">Code</p>
                <Image
                  src="/githubicon.svg"
                  alt="github"
                  width={25}
                  height={25}
                />
              </a>
              <a
                href="http://google.com"
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

        {/* Project 3 
        <div className="project flex mx-auto gap-5 sm:flex-col md:flex-col">
          <div className="project-image">
            <Image
              src="/fff.png"
              alt="Demo"
              width={600}
              height={400}
              className="rounded-2xl"
            />
          </div>
          <div className="project-description">
            <h3 className="text-center text-xl font-extrabold mt-8 sm:mt-0 md:mt-0">
              Car Rental
            </h3>
            <p className="mt-5 text-center w-4/5 mx-auto leading-relaxed md:w-full">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos
              mollitia unde sunt quisquam sed optio fuga cum dolores,
              reprehenderit obcaecati eum voluptatum tenetur quas rem minus
              provident? Fugit, id voluptatum?
            </p>
            <div className={`project-stack flex gap-8 justify-center`}>
              <p className="text-center text-lg font-semibold mt-5">Nextjs</p>
              <p className="text-center text-lg font-semibold mt-5">Express</p>
            </div>
            <div className="project-link mt-10 flex justify-center gap-10">
              <a
                href="http://github.com"
                className="project-github flex items-center gap-2"
              >
                <p className="font-bold">Code</p>
                <Image
                  src="/githubicon.svg"
                  alt="github"
                  width={25}
                  height={25}
                />
              </a>
              <a
                href="http://google.com"
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
        </div> */}
      </div>
    </section>
  );
}
