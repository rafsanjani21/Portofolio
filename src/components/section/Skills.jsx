import LogoLoop from "../LogoLoop";
import GradientText from "../GradientText";
import { Element } from "react-scroll";
import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import { useState } from "react";

const imageLogos = [
  { src: "/html.png" },
  { src: "/css.png" },
  { src: "/js.png" },
  { src: "/node.png" },
  { src: "/pg.png" },
  { src: "/ex.svg" },
  { src: "/react.svg" },
  { src: "/vite.svg" },
  { src: "/tail.svg" },
  { src: "/chatgpt.svg" },
  { src: "/github.svg" },
];

const imageName = [{ src: "/name.png" }, { src: "/logoo.png" }];

function Skill() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    AOS.init({
      once: false,
    });

    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Element name="skills" className="h-full relative overflow-hidden">
      <div
        data-aos="fade-up"
        data-aos-anchor-placement="botom-bottom"
        data-aos-duration="10000"
        data-aos-delay="400"
        className=" h-full"
      >
        <div className="text-4xl md:text-6xl my-6">
          <GradientText>My Skills</GradientText>
        </div>
        <LogoLoop
          className="bg-gray-400 bg-clip-padding border border-x-0 border-b-0 border-blue-500 bg-opacity-20 backdrop-blur-3xl backdrop-filter"
          logos={imageLogos}
          speed={isMobile ? 50 : 90}
          direction="left"
          logoHeight={isMobile ? 50 : 100}
          gap={isMobile ? 50 : 80}
          pauseOnHover
          scaleOnHover
          // fadeOut
          // fadeOutColor="#0A0909"
          ariaLabel="Technology partners"
        />
        <LogoLoop
          className="bg-gray-400 bg-clip-padding border border-x-0 border-t-0 border-blue-500 bg-opacity-20 backdrop-blur-3xl backdrop-filter"
          logos={imageName}
          speed={isMobile ? 50 : 90}
          direction="right"
          logoHeight={isMobile ? 50 : 100}
          gap={isMobile ? 5 : 10}
          pauseOnHover
          scaleOnHover
          ariaLabel="Technology partners"
        />
      </div>
    </Element>
  );
}

export default Skill;
