import Image from "next/image";

export default function HomeSection() {
  return (
    <>
      <section className="w-full home-section" id="home">
        <div className="home-container w-3/4 mx-auto">
          <h1 className="text-8xl mx-auto pt-40 sm:text-6xl sm:pt-20">
            Hi,
            <br /> I&apos;m Steven,
            <br /> A <span className="text-rose-600">Web Developer</span>
          </h1>
          <p className="mx-auto font-extralight text-lg">
            FullStack Developer
          </p>
          <div className="home-icon flex gap-5">
            <a
              href="https://github.com/etsenx"
              target="_blank"
              className="social-link"
            >
              <Image
                width={40}
                height={40}
                src="/githubicon.svg"
                className="white-color mt-5"
                alt="Github link"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/steven-steven-754432262/"
              target="_blank"
              className="social-link"
            >
              <Image
                width={40}
                height={40}
                src="/linkedinicon.svg"
                className="white-color mt-5"
                alt="LinkedIn link"
              />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
