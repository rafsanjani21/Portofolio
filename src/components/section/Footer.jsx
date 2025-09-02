import { SiGithub, SiGmail, SiInstagram, SiLinkedin } from "react-icons/si";
import { Element } from "react-scroll";
export default function Footer() {
  return (
    <Element name="footer" className="flex flex-col justify-center items-center mx-2 border rounded-lg bg-gray-400 bg-clip-padding border-blue-500 bg-opacity-20 backdrop-blur-3xl backdrop-filter p-8 mt-8">
      <img src="/rafsan.png" alt="profile" className="w-20 h-20" />
      <div className="text-center text:sm md:text-xl font-bold whitespace-nowrap">
        Muhammad Rafsanjani
      </div>
      <div className="text-xs md:text-sm whitespace-nowrap">
        Copyright © 2025 - All right reserved
      </div>
      <div className=" text-white text-2xl md:text-4xl mt-4 flex gap-2">
            <a
              href="https://github.com/rafsanjani21/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiGithub className="cursor-pointer hover:scale-150 transition-transform" />
            </a>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=rafsanjani1719@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiGmail className="cursor-pointer hover:scale-150 transition-transform" />
            </a>
            
            <a
              href="https://www.instagram.com/m_rafsanjani_/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiInstagram className="cursor-pointer hover:scale-150 transition-transform" />
            </a>
            <a
              href="https://www.linkedin.com/in/muhammadrafsanjani17/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiLinkedin className="cursor-pointer hover:scale-150 transition-transform" />
            </a>
            
          </div>
    </Element>
  );
}
