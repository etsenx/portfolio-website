import Image from "next/image";

export default function Contact() {
  return (
    <section className="contact" data-theme="light" id="contact">
      <h2 className="text-center text-4xl font-extrabold pt-20">Contact Me</h2>
      <div className="form-container grid grid-cols-1 w-2/4 mx-auto sm:w-3/4">
        <form
          className="form-control mt-4 pb-20"
          action="https://formsubmit.co/fbbcb852851a17ac2f2f24e8b65dfcf1"
          method="POST"
        >
          <div className="join gap-10 mx-auto w-full sm:block">
            <div className="join join-vertical w-full">
              <label htmlFor="email" className="label">
                Email
              </label>
              <input
                id="email"
                name="Email"
                type="email"
                placeholder="example@gmail.com"
                className="input join-item input-bordered input-primary w-full"
                autoComplete="given-email"
              />
            </div>
            <div className="join join-vertical w-full">
              <label htmlFor="name" className="label">
                Name
              </label>
              <input
                name="Name"
                id="name"
                type="text"
                placeholder="John Doe"
                className="input join-item input-bordered input-primary w-full"
                autoComplete="given-name"
              />
            </div>
          </div>
          <div className="join join-vertical mx-auto w-full">
            <label className="label mt-5" htmlFor="message">
              Message
            </label>
            <textarea
              name="Message"
              id="message"
              className="textarea textarea-primary w-full textarea-lg"
              placeholder="Your Message"
            ></textarea>
          </div>
          <button className="btn btn-primary mt-8 btn-block">Send</button>
        </form>

        <div className="info flex gap-24 sm:flex-col sm:gap-0 md:flex-col md:gap-0">
          <div className="location flex items-center justify-center gap-4 pb-20 sm:flex-col sm:pb-10 md:flex-col">
            <div className="info-logo-wrapper">
              <Image
                src="/location.svg"
                alt="location"
                width={40}
                height={40}
                className="info-location"
              />
            </div>
            <div className="text">
              <h2 className="text-xl font-bold sm:text-center md:text-center">
                Location
              </h2>
              <p className="text-lg sm:text-center">Medan, Indonesia</p>
            </div>
          </div>
          <div className="location flex items-center justify-center gap-4 pb-20 sm:flex-col md:flex-col">
            <div className="info-logo-wrapper">
              <Image src="/email.svg" alt="email" width={40} height={40} />
            </div>
            <div className="text">
              <h2 className="text-xl font-bold sm:text-center md:text-center">
                Email
              </h2>
              <p className="text-lg sm:text-center">stipen08@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
