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
          siteLink='https://news.etsenx.xyz'
        />
        <ProjectDesc
          heading="TripleShop"
          description="This is a fullstack MERN project I built myself from scratch. Design inspired by online courses."
          imgSrc="/Project_2.png"
          techStack1="React"
          techStack2="Express"
          techStack3="MongoDB"
          githubLink="https://github.com/etsenx/store-frontend"
          siteLink="https://tripleshop.etsenx.xyz"
          reverse={true}
        />
        <ProjectDesc
          heading="Digital Printing"
          description="Laravel Project from client about digital printing cashier."
          imgSrc="/digitalprinting.png"
          techStack1="Laravel"
          techStack2="MySQL"
          githubLink="https://github.com/etsenx/connectprinting"
          siteLink="https://digitalprinting.etsenx.com"
        />
      </div>
    </section>
  );
}
