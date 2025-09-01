import { Link } from "react-scroll";

export default function Navbar() {
  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 
      bg-white/10 dark:bg-gray-900/10 
      backdrop-blur-md border border-white/5 
      rounded-full shadow-lg px-6 py-2 flex items-center space-x-6">

      <Link 
        to="hero" 
        smooth={true} 
        duration={500} 
        offset={-80}
        className="px-4 py-2 rounded-full hover:bg-blue-500  text-white cursor-pointer"
        activeClass="bg-blue-700"
        spy={true}
      >
        Home
      </Link>

      <Link 
        to="about" 
        smooth={true} 
        duration={500} 
        offset={-80}
        className="px-4 py-2 rounded-full text-white hover:bg-blue-500 dark:text-white dark:hover:bg-gray-700 transition cursor-pointer"
        activeClass="bg-blue-700"
        spy={true}
      >
        About Me
      </Link>

      <Link 
        to="skills" 
        smooth={true} 
        duration={500} 
        offset={-80}
        className="px-4 py-2 rounded-full text-white hover:bg-blue-500 dark:text-white dark:hover:bg-gray-700 transition cursor-pointer"
        activeClass="bg-blue-700"
        spy={true}
      >
        Skills
      </Link>

      <Link 
        to="projects" 
        smooth={true} 
        duration={500} 
        offset={-80}
        className="px-4 py-2 rounded-full text-white hover:bg-blue-500 dark:text-white dark:hover:bg-gray-700 transition cursor-pointer"
        activeClass="bg-blue-700"
        spy={true}
      >
        Projects
      </Link>

      <Link 
        to="contact" 
        smooth={true} 
        duration={500} 
        offset={-10}
        className="px-4 py-2 rounded-full text-white hover:bg-blue-500 dark:text-white dark:hover:bg-gray-700 transition cursor-pointer"
        activeClass="bg-blue-700"
        spy={true}
      >
        Contact Me
      </Link>

    </nav>
  );
}
