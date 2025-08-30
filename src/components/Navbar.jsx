export default function Navbar() {
    return (
        <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 
    bg-white/10 dark:bg-gray-900/10 
    backdrop-blur-md border border-white/5 
    rounded-full shadow-lg px-6 py-2 flex items-center space-x-6">
        {/* <a href="#" className="flex items-center space-x-2">
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="h-8"
            alt="Flowbite Logo"
          />
          <span className="text-xl font-semibold text-white dark:text-white">Rafsan</span>
        </a> */}
        <a href="#" className="px-4 py-2 rounded-full bg-blue-700 text-white">
          Home
        </a>
        <a href="#" className="px-4 py-2 rounded-full text-white hover:bg-gray-200 dark:text-white dark:hover:bg-gray-700 transition">
          About Me
        </a>
        <a href="#" className="px-4 py-2 rounded-full text-white hover:bg-gray-200 dark:text-white dark:hover:bg-gray-700 transition">
          Skills
        </a>
        <a href="#" className="px-4 py-2 rounded-full text-white hover:bg-gray-200 dark:text-white dark:hover:bg-gray-700 transition">
          Projects
        </a>
        <a href="#" className="px-4 py-2 rounded-full text-white hover:bg-gray-200 dark:text-white dark:hover:bg-gray-700 transition">
          Contact Me
        </a>
      </nav>
      
    );
  }
  