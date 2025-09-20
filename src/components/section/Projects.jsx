import GradientText from "../GradientText";
import Card from "../Card";
import { SiGithub } from "react-icons/si";
import { FaGlobe, FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Element } from "react-scroll";
import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect, useState, useRef } from "react";

export default function Projects() {
  const [showAll, setShowAll] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const scrollRef = useRef(null);

  useEffect(() => {
    AOS.init({
      once: false,
    });
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const projects = [
    {
      title: "Portofolio HTML CSS",
      img: "/porto.png",
      desc: "This is a personal portfolio project, created using only HTML and CSS. The project was developed as both a personal portfolio and an assignment for the bootcamp at Dibimbing.id.",
      github: "https://github.com/rafsanjani21/potofolio",
      demo: "https://muhammadrafsanjani.vercel.app/",
    },
    {
      title: "Buoy U-TEWS",
      img: "/buoyy.png",
      desc: "Buoy U-TEWS is a real-time monitoring project, with the actual device implemented on Sebesi Island, Lampung Province, Indonesia. This web application is built using the PERN stack and retrieves sensor data via MQTT.",
      github: "https://github.com/rafsanjani21/FE_buoy",
      demo: "https://buoy-utews.c-greenproject.org/",
    },
    {
      title: "Portofolio Vite+React",
      img: "/porto2.png",
      desc: "This portfolio website was built using Vite, React, and Tailwind CSS to ensure a modern, responsive, and lightweight experience.",
      github: "https://github.com/rafsanjani21/FE_buoy",
      demo: "https://buoy-utews.c-greenproject.org/",
    },
    {
      title: "PUMMA (Backend)",
      img: "/pumma.png",
      desc: "I created a backend for monitoring data from various sensors, including sea water pressure sensors, ultrasonic sensors, wind speed sensors, and others.",
      github: "https://github.com/rafsanjani21/BE_pumma",
      demo: "https://pummaubuoy.vercel.app/",
    },
  ];

  const visibleProjects = isDesktop
    ? showAll
      ? projects
      : projects.slice(0, 3)
    : projects;

  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -300 : 300,
        behavior: "smooth",
      });
    }
  };

  return (
    <Element name="projects" className="h-full overflow-hidden relative">
      <div
        data-aos="fade-up"
        data-aos-anchor-placement="bottom-bottom"
        data-aos-duration="0"
        className="text-4xl md:text-6xl my-6"
      >
        <GradientText>My Projects</GradientText>
      </div>

      {/* Container project */}
      <div
        ref={scrollRef}
        data-aos="zoom-in-up"
        data-aos-duration="0"
        className="flex gap-6 justify-start lg:justify-center overflow-x-auto scrollbar-thin lg:scrollbar-hide scrollbar-thumb-blue-500 scrollbar-track-transparent px-4 snap-x snap-mandatory lg:flex-wrap max-w-full overscroll-x-contain"
      >
        {visibleProjects.map((project, index) => (
          <Card
            key={index}
            className="custom-spotlight-card relative h-96 w-80 flex-shrink-0 snap-center"
            spotlightColor="hsla(237, 100%, 50%, 1)"
          >
            <img
              className="mb-2 rounded-xl border h-44"
              src={project.img}
              alt={project.title}
            />
            <div className="text-center text-xl">{project.title}</div>
            <div className="text-center text-sm mb-2 mt-1 max-h-24 overflow-y-auto px-2 scrollbar-hide">
              {project.desc}
            </div>
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-4xl mt-4 flex gap-2">
              <a href={project.github} target="_blank" rel="noopener noreferrer">
                <SiGithub className="cursor-pointer hover:scale-150 transition-transform" />
              </a>
              <a href={project.demo} target="_blank" rel="noopener noreferrer">
                <FaGlobe className="cursor-pointer hover:scale-150 transition-transform" />
              </a>
            </div>
          </Card>
        ))}
      </div>

      {/* Panah navigasi hanya di mobile */}
      <div className="lg:hidden flex justify-center gap-6 mt-4">
        <button
          onClick={() => scroll("left")}
          className="bg-white/20 dark:bg-gray-900/20 p-3 rounded-md shadow-md hover:bg-blue-500 hover:text-white transition border border-blue-500"
        >
          <FaArrowLeft size={20} />
        </button>
        <button
          onClick={() => scroll("right")}
          className="bg-white/20 dark:bg-gray-900/20 p-3 rounded-md shadow-md hover:bg-blue-500 hover:text-white transition border border-blue-500"
        >
          <FaArrowRight size={20} />
        </button>
      </div>

      {/* tombol show more (desktop) */}
      <div className="flex justify-center mt-6">
        <button
          onClick={() => setShowAll(!showAll)}
          className="px-6 py-3 bg-white/10 dark:bg-gray-900/10 
    backdrop-blur-md border  hover:bg-blue-800 border-blue-500 rounded-lg font-semibold transition-all duration-300 lg:block hidden"
        >
          {showAll ? "Show Less" : "Show More"}
        </button>
      </div>
    </Element>
  );
}
