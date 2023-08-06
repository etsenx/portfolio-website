export default function Navbar() {
  return (
    <div className="navbar mx-auto w-4/5 sm:w-full md:4/5">
      <div className="flex-1">
        <a
          className="btn btn-ghost normal-case text-2xl sm:text-lg md:text-xl"
          href="#home"
        >
          etsenx
        </a>
      </div>
      <div className="flex-none sm:dropdown sm:dropdown-end md:dropdown md:dropdown-end">
        <label
          tabIndex={0}
          className="sm:btn sm:btn-ghost sm:btn-circle sm:navbar-end md:btn md:btn-ghost md:btn-circle md:navbar-end"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="sm:h-10 sm:w-10 md:h-12 md:w-12"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h7"
            />
          </svg>
        </label>
        <ul
          tabIndex={0}
          className="menu menu-horizontal sm:menu-vertical md:menu-vertical px-1 text-lg sm:menu-sm md:menu-sm mt-2 dropdown-content z-[1] p-2 sm:shadow md:shadow bg-base-100 sm:rounded-box md:rounded-box sm:w-52 md:w-52"
        >
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#skill">Skill</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Get In Touch</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
