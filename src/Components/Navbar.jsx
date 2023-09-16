import { Link } from "react-scroll";

function Navbar() {
  return (
    <nav className="hidden bg-inherit  text-slate-800 z-50 font-semibold tracking-wide h-16 fixed right-0 left-0 top-0 sm:flex justify-between items-center px-4 ">
      <Link
        activeClass="active"
        to="hero"
        spy={true}
        smooth={true}
        //   offset={-40}
        duration={800}
        className="cursor-pointer font-Merienda tracking-widest text-xl "
      >
        Sarath.dev
      </Link>

      <ul className="flex gap-8 ">
        <li className="hover:ring-offset-2 outline-none ring-offset-green-600 ring-green-600 cursor-pointer ">
          <Link
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={10}
            duration={500}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            activeClass="active"
            to="skills"
            smooth={true}
            spy={true}
            duration={500}
            offset={-40}
            className="cursor-pointer"
          >
            Skills
          </Link>
        </li>
        <li>
          <Link
            activeClass="active"
            to="projects"
            spy={true}
            smooth={true}
            offset={40}
            duration={500}
            className="cursor-pointer"
          >
            Projects
          </Link>
        </li>
        <li>
          <a
            href="https://drive.google.com/file/d/17Dey8mDvQDky9eIseSyPpm1Y933nZsCb/view"
            target="_blank"
            rel="noreferrer"
          >
            My Resume
          </a>
        </li>
        <li>
          <Link
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            offset={-30}
            duration={1000}
            className="cursor-pointer px-3 border-2 border-lime-500 text-sm "
          >
            Hire Me
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
