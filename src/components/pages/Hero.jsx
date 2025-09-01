// import LightRays from "../LightRays";
import Aurora from "../Aurora";
import GradientText from "../GradientText";
import TargetCursor from "../TargetCursor";
import { Element } from "react-scroll";
import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import TextType from "./../TextType";
import { Link } from "react-scroll";

export default function Hero() {
  useEffect(() => {
    AOS.init({
      once: false,
    });
  }, []);

  return (
    <Element
      name="hero"
      className="relative flex flex-col justify-center items-center text-center h-screen overflow-hidden"
    >
      {/* Background */}
      <div className="cursor">
        <TargetCursor spinDuration={2} hideDefaultCursor={true} />
      </div>

      {/* Background */}
      <div className="absolute inset-0 z-0">
        <Aurora
          colorStops={["#3A29FF", "#000AC1", "#000DFF"]}
          blend={1.0}
          amplitude={1.0}
          speed={1.0}
        />
      </div>

      {/* Konten Hero */}
      <div className="relative z-10 text-white px-4">
        <h1
          data-aos="fade-up"
          data-aos-anchor-placement="botom-bottom"
          data-aos-duration="10000"
          data-aos-delay="400"
          className="text-5xl md:text-6xl font-bold py-3"
        >
          <GradientText>
            Hello
            <TextType
              text={["There!", "Guys!", "Everyone!"]}
              typingSpeed={75}
              pauseDuration={1500}
              showCursor={false}
              cursorCharacter="|"
              className="ml-4"
            />
            <br />
            Welcome To My Portofolio
          </GradientText>
        </h1>
        <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto text-gray-300">
          I’m thrilled to have you here. Dive into the projects and ideas I’ve
          brought to life through the power of fullstack development. From
          backend logic to pixel-perfect UI — this is where code meets
          creativity.
        </p>
        <Link
          to="projects"
          smooth={true}
          duration={500}
          offset={-80}
          className="mt-6 inline-block px-6 py-3 bg-white/10 dark:bg-gray-900/10 
    backdrop-blur-md border border-white/5 hover:bg-blue-800 rounded-lg font-semibold transition-all duration-300"
        >
          View My Work
        </Link>
      </div>
    </Element>
  );
}
